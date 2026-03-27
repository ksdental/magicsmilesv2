import styled from '@emotion/styled';
import { flexCenter, titleFontStyles } from './layout/styles/classes';
import { PlainBtn, PlayBtn } from './buttons';
import bg from '@a/images/nav-menu-bg.jpg';
import { CLink } from './CLink';
import { siteInfo } from './layout/NavLinks';
import { ReactComponent as GoogleIcon } from '@a/icons/google.svg';
import { ReactComponent as FacebookIcon } from '@a/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '@a/icons/instagram.svg';
import { ReactComponent as TiktokIcon } from '@a/icons/tiktok.svg';
import { ReactComponent as PlayIcon } from '@a/icons/play.svg';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { ReactNode } from 'react';
import useLocationData from '@s/hooks/useLocationData';

export const HeroBigTitleBox = styled.div<{ videoExist: boolean }>`
    display: none;

    @media (min-width: 768px) {
        display: block;
        padding: 0px 50px;
        color: ${({ theme }) => theme.colors.white};
        align-self: center;
        justify-self: stretch;
        z-index: 3;
        margin-bottom: ${({ videoExist }) => (videoExist ? '200px' : 0)};

        > p {
            ${titleFontStyles};
            margin: 0 0 10px 0;
            font-size: 0.75rem;
            letter-spacing: unset;
        }

        > h2 {
            line-height: 1.2;
            margin: 0;
            font-size: 2.75rem;

            > strong {
                display: block;
            }
        }
    }

    @media (min-width: 1024px) {
        padding: 0px 170px 0 70px;
    }
`;

export const HeroVideoImageBox = styled.div`
    align-self: end;
    justify-self: start;
    z-index: 3;
    max-width: max-content;
    display: none;
    max-width: 380px;

    @media (min-width: 768px) {
        display: block;
        position: relative;

        > button {
            position: absolute;
            bottom: 15px;
            right: 15px;
            z-index: 5;
        }
    }
`;

export const BigPlayBtn = styled(PlainBtn)`
    width: 84px;
    height: 84px;
    background: ${({ theme }) => theme.colors.white};
    padding: 14px;
    border-radius: 50%;
    position: relative;
    align-self: end;
    justify-self: center;
    z-index: 4;
    transform: translateY(42px);

    > svg {
        width: 24px;
        height: 24px;
        margin-left: 2px;

        path {
            fill: ${({ theme }) => theme.colors.black};
        }
    }

    ::before {
        content: '';
        position: absolute;
        top: 14px;
        left: 14px;
        right: 14px;
        bottom: 14px;
        border: 1px solid ${({ theme }) => theme.colors.black};
        border-radius: inherit;
    }

    @media (min-width: 568px) {
        display: none;
    }
`;

const ConsultationBtn = styled(PlainBtn)`
    ${flexCenter};
    background-color: ${({ theme }) => theme.colors.lightGray};
    display: none;
    z-index: 3;
    letter-spacing: 0.1em;
    font-weight: 400;
    color: #015298;

    > span {
        ${flexCenter};
        background-color: ${({ theme }) => theme.colors.lighterBlue};
        padding: 10px 15px;

        > svg {
            width: 16px;
            height: 16px;
            transform: rotate(-90deg);

            path {
                fill: ${({ theme }) => theme.colors.darkerBlue};
            }
        }
    }

    @media (min-width: 1100px) {
        display: flex;
        flex-shrink: 0;
        padding-right: 15px;
        position: relative;
        overflow: hidden;
        isolation: isolate;
        margin-left: auto;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 40px;
            transition: transform 0.3s ease-in-out;
            background-color: ${({ theme }) => theme.colors.lighterBlue};
            z-index: -1;
            transform-origin: left;
        }

        > span {
            align-self: stretch;
            margin-right: 15px;
        }

        :hover,
        :focus {
            ::before {
                transform: scaleX(10);
            }
        }
    }

    @media (min-width: 1280px) {
        font-size: 1.125rem;
        padding-right: 30px;

        > span {
            margin-right: 30px;
        }
    }
`;

export const HeroVideo = styled.video`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const HeroBigPlayBtn = ({ handlePlay }: { handlePlay: () => void }) => (
    <BigPlayBtn aria-label="play a video" onClick={handlePlay}>
        <PlayIcon />
    </BigPlayBtn>
);

const RightBar = styled.div`
    justify-self: end;
    width: 100px;
    height: 100%;
    padding-bottom: 30px;
    border-left: 1px solid ${({ theme }) => theme.colors.halfWhite};
    display: none;
    z-index: 3;

    @media (min-width: 1024px) {
        ${flexCenter};
        justify-content: flex-end;
        flex-direction: column;
        gap: 15px;

        > a {
            ${flexCenter};
            border: 1px solid ${({ theme }) => theme.colors.white};
            border-radius: 50%;
            width: 37px;
            height: 37px;
            transition: opacity 0.3s ease-in-out;

            > svg {
                width: 20px;
                height: 20px;
            }

            :hover,
            :focus {
                opacity: 0.7;
            }
        }
    }
`;
export const HeroSocialBar = () => (
    <RightBar>
        <CLink to={siteInfo.social.google} aria-label="Google My Business">
            <GoogleIcon />
        </CLink>
        <CLink to={siteInfo.social.facebook} aria-label="Facebook">
            <FacebookIcon />
        </CLink>
        <CLink to={siteInfo.social.instagram} aria-label="Instagram">
            <InstagramIcon />
        </CLink>
        <CLink to={siteInfo.social.tiktok} aria-label="Tiktok">
            <TiktokIcon />
        </CLink>
    </RightBar>
);

export const HeroConsultationBtn = () => (
    <ConsultationBtn as={CLink} to={siteInfo.appointmentLink}>
        <span>
            <ChevronIcon />
        </span>
        Schedule Consultation
    </ConsultationBtn>
);

const BottomBar = styled.div`
    align-self: end;
    border-top: 1px solid ${({ theme }) => theme.colors.halfWhite};
    padding: 0 30px;
    z-index: 3;
    display: none;

    > p {
        font-size: 1.125rem;
        line-height: 1.02;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
        margin: 0;
    }

    @media (min-width: 568px) {
        ${flexCenter};
        align-items: center;
        gap: 16px;
        padding: 12px 30px;
    }

    @media (min-width: 768px) {
        padding-left: 400px;
        padding-top: 0;
        padding-bottom: 0;

        > [aria-label='play a video'] {
            display: none;
        }

        > p {
            line-height: 1.1;
            margin: 20px 0;
        }
    }

    @media (min-width: 1024px) {
        margin-right: 100px;
        min-height: 80px;
    }

    @media (min-width: 1100px) {
        padding-right: 0;
        align-items: stretch;
        justify-content: space-between;

        > p + button {
            display: flex;
        }
    }

    @media (min-width: 1440px) {
        > p {
            margin: 30px 0;
        }
    }
`;

export const HeroBottomBar = ({
    text,
    handlePlay,
    videoExist,
}: {
    text?: string;
    handlePlay?: () => void;
    videoExist: boolean;
}) => {
    const { pageTitle } = useLocationData();

    return (
        <BottomBar>
            {videoExist ? <PlayBtn onClick={handlePlay} /> : ''}
            {text ? <p>{text}</p> : ''}
            {pageTitle === 'contact-us' ? '' : <HeroConsultationBtn />}
        </BottomBar>
    );
};

const TitleBox = styled.div<{ smMobile?: boolean }>`
    display: ${({ smMobile }) => (smMobile ? 'block' : 'none')};
    text-align: center;
    padding: 60px 30px 40px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.colors.white};
    z-index: 3;
    position: relative;

    > p {
        ${titleFontStyles};
        margin: 0 0 10px 0;
        letter-spacing: unset;
        font-size: 0.75rem;
    }

    > h2 {
        line-height: 1.2;
        margin: 0;

        > strong {
            display: block;
        }
    }

    @media (min-width: 568px) {
        display: ${({ smMobile }) => (smMobile ? 'none' : 'block')};
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const HeroTitleBox = ({
    title,
    tagline,
    smMobile,
}: {
    title: ReactNode;
    tagline: string;
    smMobile?: boolean;
}) => (
    <TitleBox smMobile={smMobile}>
        <p>{tagline}</p>
        {title}
    </TitleBox>
);
