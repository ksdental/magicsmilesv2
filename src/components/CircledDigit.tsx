import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { flexCenter } from './layout/styles/classes';

const Digit = styled.p`
    ${flexCenter};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 9px;
    margin: -23px auto 0;
    border-radius: 50%;
    border: 1px solid rgb(158, 158, 158);
    position: relative;
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    width: 46px;
    height: 46px;
    isolation: isolate;

    ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        z-index: -1;
        background-color: rgb(158, 158, 158);
    }
`;

export const CircledDigit = ({ children }: { children: ReactNode }) => {
    return (
        <Digit>
            <span>{children}</span>
        </Digit>
    );
};
