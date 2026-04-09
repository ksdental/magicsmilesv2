import styled from '@emotion/styled';
import { PlainBtn } from '.';
import { ReactComponent as PlayIcon } from '@a/icons/play.svg';

const Btn = styled(PlainBtn)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    isolation: isolate;

    ::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        z-index: -1;
        transition: transform 300ms;
    }

    ::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        transform: scale(1.2);
        opacity: 0;
        pointer-events: none;
        transition:
            transform 300ms,
            opacity 300ms;
    }

    > svg {
        width: 20px;
        height: 20px;
        margin-left: 2px;
        transition: transform 0.3s ease;

        > path {
            transition: fill 0.3s ease;
        }
    }

    :hover,
    :focus {
        ::before {
            transform: scale(0);
        }

        ::after {
            transform: scale(1);
            opacity: 1;
        }

        > svg {
            transform: scale(1.25) translateX(1px);
            > path {
                fill: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;
type Props = {
    onClick?: () => void;
    as?: React.ElementType;
};
export default function Play({ onClick, as }: Props) {
    return (
        <Btn aria-label="play a video" onClick={onClick} as={as}>
            <PlayIcon />
        </Btn>
    );
}
