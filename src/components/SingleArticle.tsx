import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { textStyles, titleLine, titleWhiteLine } from './layout/styles/classes';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

const Section = styled.section<{ titleNextLine?: boolean; firstImg?: boolean; dark?: boolean }>`
    padding: ${({ firstImg }) => (firstImg ? '0 25px 65px' : '65px 25px')};
    position: relative;
    text-align: center;
    background-color: ${({ theme, dark }) => (dark ? theme.colors.darkerBlue : 'unset')};

    > .gatsby-image-wrapper:first-of-type {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    @media (min-width: 768px) {
        padding: ${({ firstImg }) => (firstImg ? '0 50px 75px' : '75px 50px')};
    }

    @media (min-width: 1024px) {
        padding: 100px 70px !important;

        h2 > strong {
            display: ${({ titleNextLine }) => (titleNextLine ? 'block' : 'inline')};
        }
    }
`;

const Box = styled.div<{ firstImg?: boolean; dark?: boolean }>`
    max-width: ${({ firstImg }) => (firstImg ? '1060px' : '960px')};
    margin: 0 auto;

    > h2 {
        ${({ dark }) => (dark ? titleWhiteLine : titleLine)};
        margin: 0 0 30px;
        color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.darkerBlue)};
    }

    > p {
        color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.gray)};

        &.single-article-tagline {
            ${textStyles};
            font-size: 0.75rem;
            margin: 0 0 10px;
            font-weight: 300;
            font-family: 'Raleway', sans-serif;
        }

        :not(:first-of-type) {
            margin: 0 0 1em;
        }

        :last-of-type {
            margin-bottom: 0;
        }

        > a {
            font-weight: 700;
            color: ${({ theme }) => theme.colors.blue};
        }
    }

    > a,
    > button {
        margin-top: 30px;
    }

    ${({ firstImg }) =>
        firstImg &&
        css`
            > .gatsby-image-wrapper:first-of-type {
                margin: 0 -25px 60px;
            }
            @media (min-width: 768px) {
                > .gatsby-image-wrapper:first-of-type {
                    margin-left: -50px;
                    margin-right: -50px;
                }

                @media (min-width: 1024px) {
                    > .gatsby-image-wrapper:first-of-type {
                        margin-left: 0;
                        margin-right: 0;
                    }
                }
            }
        `};

    @media (min-width: 1280px) {
        > h2 {
            margin-bottom: 50px;
        }
    }
`;

type Props = {
    children: ReactNode;
    titleNextLine?: boolean;
    firstImg?: boolean;
    noBg?: boolean;
    dark?: boolean;
    lightBg?: boolean;
    className?: string;
    darkBg?: boolean;
};

export const SingleArticle = ({
    children,
    titleNextLine,
    firstImg,
    noBg,
    dark,
    lightBg,
    className,
    darkBg,
}: Props) => {
    return (
        <Section
            titleNextLine={titleNextLine}
            firstImg={firstImg}
            className={className}
            dark={dark}
        >
            {noBg ? (
                ''
            ) : darkBg ? (
                <StaticImage
                    src="../../assets/images/dark-bg.jpg"
                    alt="background"
                    layout="fullWidth"
                />
            ) : lightBg ? (
                <StaticImage
                    src="../../assets/images/light-pattern.jpg"
                    alt="background"
                    layout="fullWidth"
                />
            ) : (
                <StaticImage
                    src="../../assets/images/white_pattern.jpg"
                    alt="white pattern"
                    layout="fullWidth"
                />
            )}

            <Box firstImg={firstImg} dark={dark}>
                {children}
            </Box>
        </Section>
    );
};
