import { plainBtnStyles } from '@/buttons/Plain';
import styled from '@emotion/styled';
import { AccordionBtn, AccordionContent, AccordionItem } from '@/AccordionPrimitive';
import { h3 } from '@/layout/styles/Typography';
import { flexCenter, flexSpace } from '@/layout/styles/classes';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { ReactNode } from 'react';

const Item = styled(AccordionItem)`
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: 1024px) {
        height: 700px;
        display: flex;
        border-bottom: unset;
        border-left: 2px solid ${({ theme }) => theme.colors.white};

        > h3 {
            order: 1;
            display: flex;
        }

        &[data-state='open'] {
            flex-grow: 1;
        }
    }

    @media (min-width: 1600px) {
        height: 900px;
    }
`;

const Btn = styled(AccordionBtn)`
    ${plainBtnStyles};
    ${h3};
    ${flexSpace};
    transition: color 0.3s ease-in-out;
    width: 100%;
    text-transform: none;
    padding: 16px 20px;
    background-color: ${({ theme }) => theme.colors.darkBlue};

    > p {
        color: ${({ theme }) => theme.colors.white};
        margin: 0;

        > strong {
            font-weight: 700;
            margin-left: 0.5ch;
        }
    }

    > span {
        ${flexCenter};
        border: 2px solid ${({ theme }) => theme.colors.white};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition:
            background-color 0.3s ease-in-out,
            transform 0.3s ease-in-out;

        > svg {
            width: 16px;
            height: 16px;

            path {
                fill: ${({ theme }) => theme.colors.white};
                transition: fill 0.3s ease-in-out;
            }
        }
    }

    &[data-state='open'] {
        > span {
            background-color: ${({ theme }) => theme.colors.white};

            > svg {
                transform: rotate(-180deg);

                path {
                    fill: ${({ theme }) => theme.colors.gray};
                }
            }
        }
    }

    :hover {
        > span {
            background-color: ${({ theme }) => theme.colors.halfWhite};
        }
    }

    :focus-visible {
        > span {
            background-color: ${({ theme }) => theme.colors.halfWhite};
        }
    }

    @media (min-width: 1024px) {
        width: 70px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        justify-content: center;

        > span {
            display: none;
        }
    }
`;

const Content = styled(AccordionContent)`
    background-color: ${({ theme }) => theme.colors.darkBlue};

    > div:not(.gatsby-image-wrapper) {
        padding: 30px 20px;
        z-index: 2;

        > p {
            font-size: 16px;

            :first-of-type {
                margin-top: 0;
            }

            :last-of-type {
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 1024px) {
        width: 100%;
        isolation: isolate;
        position: relative;

        > .gatsby-image-wrapper {
            z-index: -1;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 140%;

            ::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
            }
        }

        > div:not(.gatsby-image-wrapper) {
            padding: 30px;
            max-width: 800px;
            padding-right: 150px;
            align-self: center;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
    }

    @media (min-width: 1280px) {
        > .gatsby-image-wrapper {
            width: 120%;
        }
    }

    @media (min-width: 1440px) {
        > .gatsby-image-wrapper {
            width: unset;
        }

        > div:not(.gatsby-image-wrapper) {
            padding: 30px 75px;
        }
    }
`;

type AccordionItemProps = {
    t: ReactNode;
    children: React.ReactNode;
    value: string;
    setValue?: (value: string) => void;
};

export const DrAccordionItem = ({ t, children, value, setValue }: AccordionItemProps) => {
    const handleValue = () => (setValue ? setValue(value) : null);
    return (
        <Item value={value}>
            <Btn onClick={handleValue}>
                {t}
                <span>
                    <ChevronIcon />
                </span>
            </Btn>

            <Content>{children}</Content>
        </Item>
    );
};
