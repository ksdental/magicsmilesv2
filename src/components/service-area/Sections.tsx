import styled from '@emotion/styled';
import { BgArticleBox } from '@/BgArticle';

export const NearbyCare = styled.section`
    padding: 64px 25px;

    > div {
        max-width: 1280px;
        margin: 0 auto;
        display: grid;
        gap: 36px;
        align-items: center;

        > .gatsby-image-wrapper {
            width: 100%;
            max-width: 380px;
            justify-self: center;
        }

        > ${BgArticleBox} {
            margin: 0;
        }
    }

    @media (min-width: 768px) {
        padding: 80px 50px;
    }

    @media (min-width: 1024px) {
        > div {
            grid-template-columns: minmax(0, 1fr) clamp(340px, 31vw, 440px);
            gap: 32px;

            > .gatsby-image-wrapper {
                grid-column: 2;
                grid-row: 1;
                max-width: none;
            }

            > ${BgArticleBox} {
                grid-column: 1;
                grid-row: 1;
            }
        }
    }
`;

export const Cards = styled.div`
    display: grid;
    gap: 24px;
    text-align: left;
    margin-top: 36px;
    > div {
        background: ${({ theme }) => theme.colors.white};
        border-top: 3px solid ${({ theme }) => theme.colors.blue};
        padding: 30px;
        box-shadow: 0 5px 24px rgba(0, 0, 0, 0.05);
        > h3 {
            margin: 0 0 20px;
            color: ${({ theme }) => theme.colors.darkerBlue};
        }
        > p:last-child {
            margin-bottom: 0;
        }
        a {
            font-weight: 700;
            color: ${({ theme }) => theme.colors.blue};
        }
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        > div:last-child:nth-child(odd) {
            grid-column: 1 / -1;
        }
    }
`;
