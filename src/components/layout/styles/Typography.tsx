import { css } from '@emotion/react';

export const headingStyles = css`
    font-weight: 300;
    font-family: 'Raleway', sans-serif;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 0.01em;

    > strong {
        font-weight: 700;
    }
`;

export const h1 = css`
    ${headingStyles};
    font-size: 2rem;

    @media (min-width: 1280px) {
        font-size: 3rem;
    }
`;

export const h2 = css`
    ${headingStyles};
    font-size: 1.875rem;

    @media (min-width: 1280px) {
        font-size: 2.75rem;
    }
`;

export const h3 = css`
    ${headingStyles};
    font-size: 1.375rem;

    @media (min-width: 1280px) {
        font-size: 1.875rem;
    }
`;

export const h4 = css`
    font-size: 1.25rem;

    @media (min-width: 1280px) {
        font-size: 1.5rem;
    }
`;

export const h5 = css`
    font-size: 1.125rem;

    @media (min-width: 1280px) {
        font-size: 1.375rem;
    }
`;

export const smTxt = css`
    font-size: 0.875rem;

    @media (min-width: 1280px) {
        font-size: 1rem;
    }
`;

export const lgTxt = css`
    font-size: 1.125rem;

    @media (min-width: 1280px) {
        font-size: 1.25rem;
    }
`;
