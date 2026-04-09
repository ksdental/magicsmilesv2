import { plainBtnStyles } from '@/buttons/Plain';
import styled from '@emotion/styled';
import { AccordionBtn, AccordionContent, AccordionItem as AI } from './AccordionPrimitive';
import { h4, headingStyles } from './layout/styles/Typography';
import { flexSpace } from './layout/styles/classes';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';

const Item = styled(AI)<{ dark?: boolean }>`
    border-bottom: 1px solid
        ${({ theme, dark }) => (dark ? theme.colors.halfWhite : 'rgba(56, 56, 56, 0.37)')};
    padding-bottom: 24px;
    text-align: left;

    :first-of-type {
        padding-top: 24px;
        border-top: 1px solid
            ${({ theme, dark }) => (dark ? theme.colors.halfWhite : 'rgba(56, 56, 56, 0.37)')};
    }

    :not(:first-of-type) {
        margin-top: 24px;
    }

    > div {
        > p {
            color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.gray)};

            :last-of-type {
                margin-bottom: 0;
            }

            > a {
                font-weight: 700;
                transition: opacity 0.3s ease-in-out;

                :hover,
                :focus {
                    opacity: 0.7;
                }
            }
        }
    }

    &[data-state='open'] {
        border-bottom-color: ${({ dark, theme }) =>
            dark ? theme.colors.white : 'rgba(56, 56, 56, 0.67)'};
    }
`;

const Btn = styled(AccordionBtn)<{ dark?: boolean }>`
    ${plainBtnStyles};
    ${h4};
    ${headingStyles};
    ${flexSpace};
    text-transform: capitalize;
    transition: color 0.3s ease-in-out;
    width: 100%;
    color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.gray)};
    font-size: 1.125rem;

    > svg {
        transition: transform 0.3s ease-in-out;

        path {
            fill: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.black)};
            transition: fill 0.3s ease-in-out;
        }
    }

    &[data-state='open'] {
        > svg {
            transform: rotate(-180deg);
        }
    }

    :hover {
        opacity: 0.75;
    }

    :focus-visible {
        opacity: 0.75;
    }

    @media (min-width: 1280px) {
        font-size: 1.375rem;
    }
`;

type AccordionItemProps = {
    text: string;
    children: React.ReactNode;
    value: string;
    dark?: boolean;
};

export const AccordionItem = ({ text, children, value, dark }: AccordionItemProps) => {
    return (
        <Item value={value} dark={dark}>
            <Btn dark={dark}>
                {text} <ChevronIcon />
            </Btn>

            <AccordionContent>{children}</AccordionContent>
        </Item>
    );
};
