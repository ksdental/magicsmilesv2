import { plainBtnStyles } from '@/buttons/Plain';
import { css } from '@emotion/react';
import { theme } from './styles/GlobalStyles';

const dynamicStyles = css`
    &[aria-current='page'] {
        color: ${theme.colors.lighterBlue};
    }

    &.current-nav-category {
        color: ${theme.colors.lighterBlue};

        > svg path {
            fill: ${theme.colors.lighterBlue};
        }
    }

    &[data-mobile-expanded] {
        > svg {
            transform: rotate(90deg);
        }
    }

    &[aria-expanded='true'] {
        > svg {
            transform: rotate(180deg);
        }
    }

    @media (pointer: fine) {
        :hover {
            opacity: 0.75;
        }

        :focus-visible {
            opacity: 0.75;
        }
    }
`;

export const navLinkStyles = css`
    ${dynamicStyles};
    display: flex;
    text-transform: capitalize;
    color: ${theme.colors.white};
    transition: color 0.3s ease-in-out;
    font-weight: 500;
    letter-spacing: 0.1em;
    line-height: 160%;
    padding: 12px;
    text-align: center;
    overflow-wrap: break-word;
    font-size: 1rem;
    min-width: 135px; // because of who we are wrapping

    @media (min-width: 1200px) {
        padding: 12px 24px;
    }
`;

export const subNavLinkStyles = css`
    ${navLinkStyles};
    text-align: left;
    padding: 16px 0;
    border-bottom: ${theme.colors.blue} 0.5px solid;
`;

export const navBtnStyles = css`
    ${plainBtnStyles};
    ${navLinkStyles};

    > svg {
        margin-left: 4px;
        transition: transform 0.3s ease-in-out;
        flex-shrink: 0;

        path {
            transition: fill 0.3s ease-in-out;
            fill: ${theme.colors.white};
        }
    }

    @media (min-width: 1680px) {
        > svg {
            margin-left: 8px;
        }
    }
`;

export const subNavBtnStyles = css`
    ${navBtnStyles};
`;

export const mobNavBtnStyles = css`
    ${plainBtnStyles};
    ${navLinkStyles};
    ${subNavLinkStyles};
    text-align: left;
    padding: 16px 0;
    border-bottom: ${theme.colors.blue} 0.5px solid;
    justify-content: space-between;

    > svg {
        margin-left: 8px;
        transition: transform 0.3s ease-in-out;
        flex-shrink: 0;
        transform: rotate(-90deg);
        width: 16px;
        height: 10px;

        path {
            transition: fill 0.3s ease-in-out;
            fill: ${theme.colors.blue};
        }
    }
`;
