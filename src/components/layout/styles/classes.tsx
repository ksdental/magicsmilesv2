import { css } from '@emotion/react';

export const px = css`
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 1024px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1280px) {
        padding-left: 64px;
        padding-right: 64px;
    }

    @media (min-width: 1440px) {
        padding-left: 80px;
        padding-right: 80px;
    }
`;

export const npx = css`
    margin-left: -16px;
    margin-right: -16px;

    @media (min-width: 768px) {
        margin-left: -32px;
        margin-right: -32px;
    }

    @media (min-width: 1024px) {
        margin-left: -48px;
        margin-right: -48px;
    }

    @media (min-width: 1280px) {
        margin-left: -64px;
        margin-right: -64px;
    }

    @media (min-width: 1440px) {
        margin-left: -80px;
        margin-right: -80px;
    }
`;

export const py = css`
    padding-top: 32px;
    padding-bottom: 32px;

    @media (min-width: 1024px) {
        padding-top: 48px;
        padding-bottom: 48px;
    }

    @media (min-width: 1280px) {
        padding-top: 64px;
        padding-bottom: 64px;
    }

    @media (min-width: 1440px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const pyb = css`
    padding-top: 32px;
    padding-bottom: 32px;

    @media (min-width: 1024px) {
        padding-top: 64px;
        padding-bottom: 64px;
    }

    @media (min-width: 1280px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width: 1440px) {
        padding-top: 120px;
        padding-bottom: 120px;
    }
`;

export const ml = css`
    margin-left: 16px;

    @media (min-width: 768px) {
        margin-left: 32px;
    }

    @media (min-width: 1024px) {
        margin-left: 48px;
    }

    @media (min-width: 1280px) {
        margin-left: 64px;
    }

    @media (min-width: 1440px) {
        margin-left: 80px;
    }
`;

export const mr = css`
    margin-right: 16px;

    @media (min-width: 768px) {
        margin-right: 32px;
    }

    @media (min-width: 1024px) {
        margin-right: 48px;
    }

    @media (min-width: 1280px) {
        margin-right: 64px;
    }

    @media (min-width: 1440px) {
        margin-right: 80px;
    }
`;

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flexSpace = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const flexStart = css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const textStyles = css`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: 400;
`;

export const titleFontStyles = css`
    font-weight: 300;
    font-family: 'Raleway', sans-serif;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 0.01em;

    > strong {
        font-weight: 700;
    }
`;

export const titleLine = css`
    ::after {
        content: '';
        display: block;
        margin: 24px auto 0px;
        width: 70px;
        height: 4px;
        background-color: #001c36;
    }
`;

export const titleWhiteLine = css`
    ::after {
        content: '';
        display: block;
        margin: 24px auto 0px;
        width: 70px;
        height: 4px;
        background-color: #fff;
    }
`;
