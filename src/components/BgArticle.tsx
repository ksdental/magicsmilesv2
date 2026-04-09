import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { titleLine, titleWhiteLine } from './layout/styles/classes';
import { css } from '@emotion/react';
import { h4 } from './layout/styles/Typography';

export const BgArticleBox = styled.div`
    margin-top: 50px;

    > h2 {
        ${titleLine};
        color: ${({ theme }) => theme.colors.darkerBlue};
        margin: 0 0 30px;
    }

    > p {
        margin: 0 0 1em;

        :last-of-type {
            margin-bottom: 0;
        }

        > a {
            font-weight: 700;
        }
    }

    > .bg-article-cta {
        ${h4};
        font-weight: 700;
        margin-top: 1em;
        text-transform: uppercase;
        display: block;
        color: ${({ theme }) => theme.colors.blue};

        :hover,
        :focus {
            text-decoration: underline;
        }
    }

    > ul {
        margin: 0;
        list-style: none;
        padding-inline-start: 36px;
        text-align: left;

        > li {
            color: ${({ theme }) => theme.colors.darkerBlue};
            position: relative;

            ::before {
                content: '';
                position: absolute;
                left: -30px;
                top: 10px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: currentcolor;
                outline: currentcolor solid 1px;
                outline-offset: 2px;
            }

            :not(:last-of-type) {
                margin-bottom: 1em;
            }
        }
    }

    @media (min-width: 1024px) {
        margin-top: 0;
        margin-left: 50px;

        > h2 {
            ::after {
                margin-left: 0;
            }
        }
    }

    @media (min-width: 1440px) {
        margin-left: 60px;
    }
`;

type ArticleProps = {
    darkBg?: boolean;
    centerImage?: boolean;
    alignTop?: boolean;
    alignBottom?: boolean;
    imgRight?: boolean;
    singleBg?: boolean;
    big?: boolean;
};

const Article = styled.article<ArticleProps>`
    position: ${({ singleBg }) => (singleBg ? 'static' : 'relative')};
    isolation: isolate;
    padding: 75px 20px;
    text-align: center;

    > .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    > a,
    > button {
        margin: 30px auto 0;
        max-width: max-content;
    }

    @media (min-width: 768px) {
        padding-right: 50px;
        padding-left: 50px;
    }

    @media (min-width: 1024px) {
        padding-top: ${({ alignTop }) => (alignTop ? 0 : '100px')};
        padding-bottom: ${({ alignBottom }) => (alignBottom ? 0 : '100px')};

        ::before {
            content: '';
            position: absolute;
            top: 0px;
            left: 50%;
            width: 1px;
            height: 100%;
            background-color: ${({ darkBg }) =>
                darkBg ? 'rgba(255, 255, 255, 0.62)' : 'rgba(56, 56, 56, 0.37)'};
        }

        > div:not(.gatsby-image-wrapper) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: left;
            align-items: center;
            max-width: 2220px;
            margin: 0 auto;
            gap: ${({ imgRight }) => (imgRight ? '2px' : 0)};

            > *:not(${BgArticleBox}) {
                max-width: ${({ centerImage }) => (centerImage ? '65%' : 'max-content')};
                justify-self: ${({ centerImage }) => (centerImage ? 'center' : 'end')};
                align-self: ${({ alignTop, alignBottom }) =>
                    alignTop ? 'start' : alignBottom ? 'end' : 'center'};
            }

            > ${BgArticleBox} {
                margin-top: ${({ alignTop }) => (alignTop ? '40px' : 0)};
                margin-bottom: ${({ alignBottom }) => (alignBottom ? '40px' : 0)};
                margin-left: ${({ imgRight }) => (imgRight ? '' : '')};
                max-width: ${({ centerImage, big }) => (centerImage || big ? '800px' : '590px')};
                justify-self: ${({ imgRight }) => (imgRight ? 'end' : 'start')};
            }

            ${({ imgRight, centerImage }) =>
                imgRight &&
                css`
                    > *:not(${BgArticleBox}) {
                        order: 1;
                        justify-self: ${centerImage ? 'center' : 'start !important'};
                    }

                    > ${BgArticleBox} {
                        margin-right: 50px !important;
                        margin-left: 0 !important;
                    }
                `};
        }

        > a,
        > button {
            position: relative;
            margin-top: 40px;

            > span:last-of-type {
                position: absolute;
                right: 0%;
                transform: translateX(100%) translateX(20px);
                white-space: nowrap;
            }
        }
    }

    ${({ darkBg, theme }) =>
        darkBg &&
        css`
            ${BgArticleBox} {
                > h2 {
                    ${titleWhiteLine};
                    color: ${theme.colors.white};
                }

                > p {
                    color: ${theme.colors.white};
                }

                > ul > li {
                    color: ${theme.colors.white};
                }

                @media (min-width: 1024px) {
                    > h2::after {
                        margin-left: 0;
                    }
                }
            }
        `};
`;

type Props = {
    children: React.ReactNode;
    whiteBg?: boolean;
    noBg?: boolean;
    className?: string;
} & ArticleProps;
export default function BgArticle({
    children,
    darkBg,
    noBg,
    centerImage,
    alignTop,
    alignBottom,
    imgRight,
    singleBg,
    whiteBg,
    big,
    className,
}: Props) {
    return (
        <Article
            darkBg={darkBg}
            centerImage={centerImage}
            alignTop={alignTop}
            alignBottom={alignBottom}
            imgRight={imgRight}
            singleBg={singleBg}
            big={big}
            className={className}
        >
            {noBg ? (
                ''
            ) : darkBg ? (
                <StaticImage
                    src="../../assets/images/dark-bg.jpg"
                    alt="background"
                    layout="fullWidth"
                />
            ) : whiteBg ? (
                <StaticImage
                    src="../../assets/images/white_pattern.jpg"
                    alt="white pattern"
                    layout="fullWidth"
                />
            ) : (
                <StaticImage
                    src="../../assets/images/light-pattern.jpg"
                    alt="background"
                    layout="fullWidth"
                />
            )}
            {children}
        </Article>
    );
}
