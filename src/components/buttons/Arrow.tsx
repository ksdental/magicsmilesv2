import styled from '@emotion/styled';
import { PlainBtn } from '.';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';

const Btn = styled(PlainBtn)<{ lightBlue?: boolean }>`
    text-transform: uppercase;
    font-weight: 700;
    gap: 10px;
    color: ${({ theme, lightBlue }) => (lightBlue ? theme.colors.lighterBlue : theme.colors.white)};

    > span {
        position: relative;

        ::after {
            position: absolute;
            display: block;
            content: '';
            width: 0px;
            height: 1px;
            bottom: -2px;
            left: auto;
            right: 0px;
            background-color: currentcolor;
            z-index: 1;
            will-change: width;
            transition: width 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }
    }

    > svg {
        transform: rotate(-90deg);

        path {
            fill: ${({ theme, lightBlue }) =>
                lightBlue ? theme.colors.lighterBlue : theme.colors.white};
        }
    }

    :hover,
    :focus {
        > span::after {
            width: 100%;
            left: 0px;
            right: auto;
            transition: width 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }
    }
`;

type Props = {
    children?: React.ReactNode;
    lightBlue?: boolean;
    as?: React.ElementType;
    to?: string;
    className?: string;
};

export default function Arrow({ children, ...props }: Props) {
    return (
        <Btn {...props}>
            <span>{children}</span> <ChevronIcon />
        </Btn>
    );
}
