import { CLink } from '@/CLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIntersectionObserver from '@s/hooks/useIntersectionObserver';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment, useEffect, useRef, useState } from 'react';
import { DesktopNav } from './DesktopNavPrimitive';
import { navLinks, siteInfo } from './NavLinks';
import { textStyles, flexCenter, flexSpace } from './styles/classes';
import { theme } from './styles/GlobalStyles';
import bg from '@a/images/nav-menu-bg.jpg';
import { MobNav } from './MobNav';
import { PlainBtn } from '@/buttons';
import { ReactComponent as CalendarIcon } from '@a/icons/calendar.svg';

const Navbar = styled.header<{ scrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-right: var(--removed-body-scroll-bar-size);
    z-index: 100;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Top = styled.div`
    ${flexCenter};
    padding: 12px 16px;
    gap: 32px;
    max-width: 1850px;
    margin: 0 auto;

    @media (min-width: 1100px) {
        justify-content: space-between;
    }
`;

const HomeLink = styled(CLink)`
    transition: opacity 0.3s ease-in-out;
    flex-shrink: 0;

    :hover {
        opacity: 0.7;
    }

    :focus-visible {
        opacity: 0.7;
    }

    @media (max-width: 1023px) {
        > .gatsby-image-wrapper {
            width: 212px;
            height: 65px;
        }
    }
`;

const DesktopNavMenu = styled(DesktopNav)`
    width: 100%;
    display: none;
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    padding: 0 30px;

    @media (min-width: 1100px) {
        display: block;
    }
`;

const menuStyles = css`
    justify-content: center;
    > li {
        position: relative; // for submenu align with item
    }
`;

const contentStyles = css`
    top: calc(1rem * 1.6 + 24px); //font size x line height

    > ul {
        background-color: ${theme.colors.darkerBlue};
        padding: 75px 40px;
        margin-top: 26px;
        min-width: 350px;
        box-sizing: content-box;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;

        @media (min-width: 1440px) {
            padding: 80px 50px;
        }

        @media (min-width: 1680px) {
            margin-top: 1px;
        }
    }
`;

const PhoneLink = styled.p`
    ${flexCenter};
    display: none;
    flex-direction: column;
    gap: 1px;
    align-items: flex-start;
    line-height: 1;

    :first-of-type {
        margin-left: 30px;
    }

    :last-of-type {
        margin-right: 30px;
    }

    > span {
        color: ${({ theme }) => theme.colors.gray};
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        font-weight: 400;
    }

    > a {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.5rem;
        font-weight: 700;
        transition: opacity 0.3s ease-in-out;
        letter-spacing: 0em;

        :hover {
            opacity: 0.75;
        }

        :focus-visible {
            opacity: 0.75;
        }
    }

    @media (min-width: 1100px) {
        display: flex;
    }
`;

const Bottom = styled.div`
    ${flexSpace};
    background-color: ${({ theme }) => theme.colors.lighterBlue};

    > div {
        ${flexCenter};
        flex: 1;

        > a {
            ${textStyles};
            color: ${({ theme }) => theme.colors.gray};
            line-height: 1;

            > svg {
                margin-right: 10px;
            }
        }
    }

    @media (min-width: 1100px) {
        display: none;
    }
`;

export const HomeLogo = () => (
    <HomeLink to="/" aria-label="home">
        <StaticImage
            src="../../../assets/images/layout/logo.png"
            alt="Magic Smile Dental — home"
            width={250}
            height={76}
            loading="eager"
        />
    </HomeLink>
);

// link can be /meet-the-doctors/#dr-herbert or #dr-herbert
export const scrollToSection = (link: string) => {
    const fullLink = typeof link === 'string' ? link.split('#') : '';
    const element = document.querySelector(`#${fullLink[1] || ''}`);
    if (!element) {
        navigate(fullLink[0], {
            state: {
                tag: `#${fullLink[1] || ''}`,
            },
        });
    }
    const y = element && element.getBoundingClientRect().top + window.scrollY - 176;
    window.scroll({
        behavior: 'smooth',
        top: y || 0,
    });
};

const Observe = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    top: 10px;
    left: 0;
`;

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    const observeRef = useRef<HTMLElement | null>(null);

    const visible = useIntersectionObserver(observeRef, {});

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScrolled(!visible);
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
    }, [visible]);

    return (
        <Fragment>
            <Navbar scrolled={scrolled}>
                <div>
                    <Top>
                        <PhoneLink style={{ visibility: 'hidden' }}>
                            <span>call today</span>
                            <CLink to={siteInfo.currentPatientsPhone.link}>
                                {siteInfo.currentPatientsPhone.text}
                            </CLink>
                        </PhoneLink>
                        <HomeLogo />
                        <PhoneLink>
                            <span>call today</span>
                            <CLink to={siteInfo.currentPatientsPhone.link}>
                                {siteInfo.currentPatientsPhone.text}
                            </CLink>
                        </PhoneLink>
                    </Top>
                    <DesktopNavMenu
                        menuStyles={menuStyles}
                        contentStyles={contentStyles}
                        links={navLinks}
                    />

                    <Bottom>
                        <div>
                            <PlainBtn as={CLink} to={siteInfo.appointmentLink}>
                                <CalendarIcon />
                                Schedule Consultation
                            </PlainBtn>
                        </div>
                        <MobNav />
                    </Bottom>
                </div>
            </Navbar>
            <Observe ref={observeRef} />
        </Fragment>
    );
};
