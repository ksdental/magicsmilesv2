import styled from '@emotion/styled';

const SkipLink = styled.a`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;

    &:focus {
        padding: 1rem;
        position: fixed;
        top: 10px;
        left: 10px;
        background: white;
        z-index: 120;
        width: auto;
        height: auto;
        clip: auto;
    }
`;

export const SkipNavLink = () => <SkipLink href="#skip-site-nav">Skip to content</SkipLink>;

export const SkipNavContent = () => <div id="skip-site-nav" />;
