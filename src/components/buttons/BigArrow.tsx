import styled from '@emotion/styled';
import { PlainBtn } from '.';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { flexCenter, textStyles } from '@/layout/styles/classes';
import React from 'react';

const Icon = styled.span<{ dark?: boolean }>`
    background-color: transparent;
    border: 1px solid ${({ theme, dark }) => (dark ? theme.colors.darkBlue : theme.colors.blue)};
    border-radius: 50%;
    padding: 7px;
    transition: border-color 200ms;

    > span {
        ${flexCenter};
        width: 49px;
        height: 49px;
        border-radius: 50%;
        background-color: ${({ theme, dark }) =>
            dark ? theme.colors.darkBlue : theme.colors.blue};
        transition: background-color 200ms;

        > svg {
            width: 17px;
            height: 10px;
            transform: rotate(-90deg) translate(1px, 1px);
            path {
                fill: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;

const Btn = styled(PlainBtn)<{ dark?: boolean }>`
    gap: 20px;
    text-transform: uppercase;
    font-weight: 700;
    gap: 10px;

    :hover,
    :focus {
        > ${Icon} {
            border-color: ${({ theme, dark }) => (dark ? theme.colors.darkerBlue : '#006ac9')};

            > span {
                background-color: ${({ theme, dark }) =>
                    dark ? theme.colors.darkerBlue : '#006ac9'};
            }
        }
    }
`;

const Text = styled.span<{ dark?: boolean }>`
    ${textStyles};
    font-weight: 700;
    color: ${({ theme, dark }) => (dark ? theme.colors.darkBlue : theme.colors.gray)};
`;

type Props = {
    children?: React.ReactNode;
    as?: React.ElementType;
    to?: string;
    className?: string;
    dark?: boolean;
    iconFirst?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Arrow({ children, iconFirst, dark, ...props }: Props) {
    return (
        <Btn dark={dark} {...props}>
            {iconFirst ? (
                <Icon dark={dark}>
                    <span>
                        <ChevronIcon />
                    </span>
                </Icon>
            ) : (
                ''
            )}
            <Text dark={dark}>{children}</Text>
            {iconFirst ? (
                ''
            ) : (
                <Icon dark={dark}>
                    <span>
                        <ChevronIcon />
                    </span>
                </Icon>
            )}
        </Btn>
    );
}
