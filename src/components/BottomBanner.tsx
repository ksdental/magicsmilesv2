import styled from '@emotion/styled';
import { CLink } from './CLink';
import { siteInfo } from './layout/NavLinks';
import { ReactComponent as GoogleIcon } from '@a/icons/google.svg';
import { ReactComponent as FacebookIcon } from '@a/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '@a/icons/instagram.svg';
import { ReactComponent as TiktokIcon } from '@a/icons/tiktok.svg';
import { flexCenter, flexSpace } from './layout/styles/classes';
import { ReactNode } from 'react';
import { h3 } from './layout/styles/Typography';

const Section = styled.section<{ noPadding?: boolean }>`
    background-color: ${({ theme }) => theme.colors.lighterBlue};
    color: ${({ theme }) => theme.colors.darkerBlue};
    text-align: center;
    margin: 0 20px;
    max-width: 1300px;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -20px;
        right: -20px;
        bottom: 0;
        z-index: -1;
        background-color: #0c3052;
    }

    > div:first-of-type {
        padding: ${({ noPadding }) => (noPadding ? '0 !important' : '50px 20px')};
    }

    @media (min-width: 768px) {
        margin: 0 50px;

        ::before {
            left: -50px;
            right: -50px;
        }
    }

    @media (min-width: 1024px) {
        ${flexSpace};
        align-items: stretch;
        margin: 0 70px -150px;
        z-index: 10;

        ::before {
            display: none;
            content: none;
        }

        > div:first-of-type {
            padding: 50px 30px;
            flex: 1;
        }
    }

    @media (min-width: 1440px) {
        margin: 0 auto -150px;

        > div:first-of-type {
            padding: 75px 30px;
        }
    }
`;

const TextBox = styled.div`
    margin-bottom: 30px;

    > h2 {
        margin: 0;
    }

    > p {
        ${h3};
        margin: 20px auto 0;
        max-width: 700px;
        text-transform: none;
    }

    @media (min-width: 1024px) {
        margin-bottom: 50px;

        > h2 > strong {
            display: block;
        }
    }
`;

const Flex = styled.div<{ noGap?: boolean }>`
    > iframe {
        border: none;
        width: 100%;
        overflow: hidden;
        height: 467px;
        background-color: ${({ theme }) => theme.colors.darkBlue};
        border-radius: 18px;
        margin-top: 30px;
    }

    @media (min-width: 1024px) {
        ${flexCenter};
        gap: ${({ noGap }) => (noGap ? 0 : '60px')};

        > iframe {
            width: 60%;
            margin-top: 0;
        }
    }
`;

const Social = styled.div`
    ${flexCenter};
    border-top: 1px solid rgba(56, 56, 56, 0.37);

    > a {
        ${flexCenter};
        margin: 15px;
        border: 1px solid ${({ theme }) => theme.colors.darkerBlue};
        width: 37px;
        height: 37px;
        border-radius: 50%;
        transition: border-color 0.3s ease-in-out;
        > svg {
            width: 20px;
            height: 20px;

            > path {
                fill: ${({ theme }) => theme.colors.darkerBlue};
                transition: fill 0.3s ease-in-out;
            }
        }

        :hover,
        :focus {
            border-color: ${({ theme }) => theme.colors.blue};

            > svg > path {
                fill: ${({ theme }) => theme.colors.blue};
            }
        }
    }

    @media (min-width: 1024px) {
        flex-direction: column;
        border-top: none;
        border-left: 1px solid rgba(56, 56, 56, 0.37);

        > a {
            margin: 10px 20px;
        }
    }
`;

type Props = {
    title?: ReactNode;
    text?: string;
    children?: ReactNode;
    noPadding?: boolean;
    noGap?: boolean;
};

export const BottomBanner = ({ title, text, children, noPadding, noGap }: Props) => {
    return (
        <Section noPadding={noPadding} id="footer-cta">
            <div>
                {title || text ? (
                    <TextBox>
                        {title || ''}
                        {text ? <p>{text}</p> : ''}
                    </TextBox>
                ) : (
                    ''
                )}
                <Flex noGap={noGap}>{children}</Flex>
            </div>
            <Social>
                <CLink to={siteInfo.social.google} aria-label="Visit Magic Smile Dental on Google">
                    <GoogleIcon />
                </CLink>
                <CLink
                    to={siteInfo.social.facebook}
                    aria-label="Visit Magic Smile Dental on Facebook"
                >
                    <FacebookIcon />
                </CLink>
                <CLink
                    to={siteInfo.social.instagram}
                    aria-label="Visit Magic Smile Dental on Instagram"
                >
                    <InstagramIcon />
                </CLink>
                <CLink to={siteInfo.social.tiktok} aria-label="Visit Magic Smile Dental on TikTok">
                    <TiktokIcon />
                </CLink>
            </Social>
        </Section>
    );
};
