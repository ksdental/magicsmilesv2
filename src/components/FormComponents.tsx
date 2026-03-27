import chevron from '@a/icons/chevron.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { BigArrowBtn } from './buttons';
import { smTxt } from './layout/styles/Typography';
import { flexStart, titleLine } from './layout/styles/classes';

export const Form = styled.form<{ submit: boolean }>`
    position: relative;
    width: 100%;
    max-width: 590px;
    scroll-margin-top: 180px;

    > h2 {
        ${titleLine};
        color: ${({ theme }) => theme.colors.black};
        margin: 0 0 40px;
        text-transform: uppercase;

        ::after {
            background-color: ${({ theme }) => theme.colors.black};
            margin-left: 0;
        }
    }

    ${({ submit }) =>
        submit &&
        css`
            ::before {
                opacity: 0;
            }
            * {
                pointer-events: none;
                visibility: hidden;
            }
        `};
`;

export const Input = styled.input<{ rows?: number; setColor?: boolean; select?: boolean }>`
    ${smTxt};
    color: ${({ theme }) => theme.colors.black};
    border: none;
    background-color: #efefef;
    width: 100%;
    padding: 11px 10px;
    display: block;
    transition:
        border-color 0.3s ease-in,
        opacity 0.3s ease-in-out;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 100%;
    resize: none;
    transition: outline 0.3s ease-in-out;

    :disabled {
        pointer-events: none;
        opacity: 0.7;
    }

    option {
        text-transform: capitalize;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        text-fill-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.black};
        -webkit-box-shadow: 0 0 0px 1000px #efefef inset;
        transition: background-color 50000s ease-in-out 0s;
    }

    :not(:placeholder-shown):invalid {
        border-color: #ff3131;
    }

    ${({ setColor }) =>
        setColor &&
        css`
            text-transform: uppercase;
            padding: 13px 16px;

            :not(:placeholder-shown):invalid {
                border-color: #ff3131;
            }

            :focus-within:invalid {
                border-color: #ff3131;
            }
        `};

    ${({ select }) =>
        select &&
        css`
            background-image: url(${chevron});
            background-position: center right 20px;
            background-repeat: no-repeat;
            appearance: none;

            &::-ms-expand {
                display: none;
            }
        `};
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 24px;
    font-size: 1rem;

    > span {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        margin-bottom: 12px;
        transition: color 0.3s ease-in-out;
        display: block;

        > strong {
            font-size: 0.875rem;
            margin-left: 0.2ch;
            transform: translateY(1px);
            display: inline-block;
        }
    }
`;

export const FormFlex = styled.div<{ columns?: string }>`
    @media (min-width: 570px) {
        display: flex;
        align-items: flex-start;
        gap: 20px;

        > label,
        > div {
            width: 50%;
            flex: 1;
        }
    }

    @media (min-width: 768px) {
        gap: 40px;
    }
`;

export const RadioBtns = styled.div`
    margin-bottom: 24px;

    > p {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        margin: 0 0 12px;
    }

    > div {
        ${flexStart};
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
`;

export const RadioBtn = styled.label`
    position: relative;

    :focus-within {
        > span::after {
            border-color: ${({ theme }) => theme.colors.black};
        }
    }

    > span {
        position: relative;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        background-color: #efefef;
        cursor: pointer;
        padding: 13px 15px 12px;
        display: block;
        line-height: 1;

        ::after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            border: 1px solid transparent;
            transition: border-color 300ms;
            z-index: 1;
        }
    }

    > input {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        cursor: pointer;

        &:checked + span::after {
            border-color: ${({ theme }) => theme.colors.dark};
        }
    }
`;

export const Select = styled.select`
    border-color: #ccc;
    padding: 6px 8px;
    font-size: 1rem;
    width: 100%;
`;

const StyledMsg = styled.div<{ submit: boolean; newsletter?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: ${({ newsletter }) => (newsletter ? '5px' : '20px')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: ${({ submit }) => (submit ? 10 : -1)};
    opacity: ${({ submit }) => (submit ? 1 : 0)};
    transform: ${({ submit }) => (submit ? 'scale(1)' : 'scale(0)')};
    transition: all 0.3s ease-in;
    transition-property: opacity, transform;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};

    &,
    > h3,
    > p,
    > button {
        visibility: ${({ submit }) => (submit ? 'visible' : 'hidden')} !important;
        pointer-events: ${({ submit }) => (submit ? 'all' : 'none')} !important;
    }

    > h3 {
        margin: 0;
    }

    > p {
        font-size: 1.25rem;
        margin: 2rem 0 0;
    }

    @media (min-width: 1024px) {
        padding: 40px;
    }
`;

export const Thanks = ({
    submit,
    setSubmit,
    newsletter,
}: {
    submit: boolean;
    setSubmit: Dispatch<SetStateAction<'init' | 'submitting' | 'submitted' | 'error'>>;
    newsletter?: boolean;
}) => (
    <StyledMsg submit={submit} newsletter={newsletter}>
        {newsletter ? (
            <p style={{ margin: 0 }}>Thank you for subscribing.</p>
        ) : (
            <Fragment>
                <h3>Thank you</h3>
                <p>Someone will be right with you shortly!</p>

                <BigArrowBtn onClick={() => setSubmit('init')} aria-hidden={!submit}>
                    Resubmit Form
                </BigArrowBtn>
            </Fragment>
        )}
    </StyledMsg>
);

export const Error = ({ error, newsletter }: { error: boolean; newsletter?: boolean }) => (
    <StyledMsg submit={error} newsletter={newsletter}>
        {newsletter ? (
            <p style={{ margin: 0 }}>Something went wrong!</p>
        ) : (
            <Fragment>
                <h3>Something went wrong</h3>
                <p>Please give us a call instead.</p>
            </Fragment>
        )}
    </StyledMsg>
);
