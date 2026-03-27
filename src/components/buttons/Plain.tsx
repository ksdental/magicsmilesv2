import { flexCenter } from '@/layout/styles/classes';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const plainBtnStyles = css`
    ${flexCenter};
    display: inline-flex;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    line-height: 160%;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
`;

export default styled.button<{ to?: string }>`
    ${plainBtnStyles};
`;
