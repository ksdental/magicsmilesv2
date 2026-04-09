import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { flexCenter, titleLine } from './layout/styles/classes';
import { css } from '@emotion/react';

export const ImgArticleSection = styled.section`
    padding: 70px 20px;

    > h2 {
        ${titleLine};
        text-align: center;
        margin: 0 0 40px;
    }

    @media (min-width: 1280px) {
        padding: 110px 70px;

        > h2 {
            margin-bottom: 55px;
        }
    }
`;

const Article = styled.article`
    ${flexCenter};
    flex-direction: column;
    gap: 12px;
    max-width: 700px;
    margin: 0 auto 30px;

    :last-of-type {
        margin-bottom: 0;
    }

    > div {
        :last-of-type {
            background-color: ${({ theme }) => theme.colors.lightGray};
            color: ${({ theme }) => theme.colors.gray};
            padding: 60px 20px 50px;
            text-align: center;

            > h3 {
                color: ${({ theme }) => theme.colors.darkerBlue};
                margin: 0 0 0.5em;
                text-transform: capitalize;
            }

            > p {
                margin: 0 0 1em;

                :last-of-type {
                    margin-bottom: 0;
                }

                > a {
                    color: ${({ theme }) => theme.colors.darkBlue};
                    transition: text-decoration 0.3s ease-in-out;
                    font-weight: 700;

                    :hover,
                    :focus {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        gap: 30px;
        flex-direction: row;
        align-items: stretch;
        max-width: 1300px;
        margin: 0 auto 70px;

        :last-of-type {
            margin-bottom: 0;
        }

        > div {
            width: 50%;

            :last-of-type {
                ${flexCenter};
                flex-direction: column;
                align-items: flex-start;
                padding: 75px;
                text-align: left;
            }
        }
    }

    @media (min-width: 1280px) {
        gap: 40px;
    }
`;

const ImgContainer = styled.div<{ imgRight?: boolean }>`
    position: relative;

    @media (min-width: 1024px) {
        > .gatsby-image-wrapper {
            height: 100%;
        }

        ${({ imgRight }) =>
            imgRight &&
            css`
                order: 1;

                > p {
                    transform: translateY(50%) translateX(-50%);
                    left: -23px;
                    right: unset;
                }
            `};
    }
`;

const Number = styled.p`
    ${flexCenter};
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(50%);
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0;

    ::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        content: '';
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid rgb(158, 158, 158);
    }

    ::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgb(158, 158, 158);
    }

    > span {
        color: ${({ theme }) => theme.colors.white};
        z-index: 2;
        font-weight: 700;
    }

    @media (min-width: 1024px) {
        width: 115px;
        height: 115px;
        transform: translateY(50%) translateX(50%);
        bottom: 50%;
        left: unset;
        right: -20px;

        ::before {
            width: 75px;
            height: 75px;
        }

        ::after {
            width: 50px;
            height: 50px;
        }
    }
`;

type Props = {
    number: string;
    image: ReactNode;
    children: ReactNode;
    imgRight?: boolean;
};

export const ImgArticle = ({ number, image, children, imgRight }: Props) => {
    return (
        <Article>
            <ImgContainer imgRight={imgRight}>
                {image}
                <Number>
                    <span>{number}</span>
                </Number>
            </ImgContainer>
            {children}
        </Article>
    );
};
