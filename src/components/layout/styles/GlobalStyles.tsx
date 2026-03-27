import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { h1, h2, h3, h4, h5 } from './Typography';
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/700.css';

export const theme = {
    colors: {
        black: '#000000',
        dark: '#00101e',
        darkerBlue: '#001c36',
        darkBlue: '#002a4f',
        blue: '#017eee',
        lightBlue: '#15b0e0',
        lighterBlue: '#d3eaff',
        green: '#00de73',
        orange: '#e5aa51',
        gray: '#383838',
        charcoal: '#34394D ',
        lightGray: '#f5f5f5',
        white: '#ffffff',
        halfWhite: 'rgba(255, 255, 255, 0.5)',
    },
    spacing: {
        md: '2.22vw', //32px at 1440px wide viewport
        lg: '4.45vw', //64px ^^
        xl: '6.67vw', //96px ^^
        xxl: '8.89vw', //128px ^^
    },
};

export const GlobalStyles = () => {
    return (
        <Global
            styles={() => css`
                ${emotionNormalize};

                html {
                    font-size: 100%;
                }
                body {
                    color: ${theme.colors.black};
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1rem;
                    line-height: 180%;
                    letter-spacing: 0.06em;
                    word-wrap: break-word;
                    font-kerning: normal;
                    word-wrap: break-word;
                    -webkit-font-smoothing: antialiased;
                }

                h1 {
                    ${h1};
                }

                h2 {
                    ${h2};
                }

                h3 {
                    ${h3};
                }

                h4 {
                    ${h4};
                }
                h5 {
                    ${h5};
                }

                a {
                    text-decoration: none;
                    color: ${theme.colors.blue};
                    outline: none;
                    background-color: transparent;
                    -webkit-text-decoration-skip: objects;
                }

                *,
                *:before,
                *:after {
                    box-sizing: border-box;
                }

                img {
                    max-width: 100%;
                    display: block;
                    margin: 0;
                    padding: 0;
                }

                ul,
                ol {
                    padding-inline-start: 24px;
                }

                button {
                    :disabled {
                        opacity: 0.5;
                        pointer-events: none;
                    }
                }

                .userway_p1 {
                    z-index: 450 !important;
                }

                .userway_p1.uon {
                    z-index: 750 !important;
                }

                @media (min-width: 1100px) {
                    div.userway_buttons_wrapper {
                        top: 200px !important;
                    }
                }

                @media (min-width: 1280px) {
                    body {
                        font-size: 1.125rem;
                    }
                }
            `}
        />
    );
};
