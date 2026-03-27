import { CLink } from '@/CLink';
import { Dialog, DialogClose, DialogContent, DialogOpen } from '@/DialogPrimitive';
import { PlainBtn } from '@/buttons';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { ReactComponent as CloseIcon } from '@a/icons/close.svg';
import { ReactComponent as MenuIcon } from '@a/icons/menu.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useLocationData from '@s/hooks/useLocationData';
import useRouteChange from '@s/hooks/useRouteChange';
import useWindowSize from '@s/hooks/useWindowSize';
import { Fragment, useEffect, useState } from 'react';
import { HomeLogo } from './Nav';
import { navBtnStyles, navLinkStyles } from './NavLinkStyles';
import { NavLinksTypes, navLinks } from './NavLinks';
import { theme } from './styles/GlobalStyles';
import { flexSpace, flexStart, px } from './styles/classes';

const overlayStyles = css`
    display: none;
`;

const contentStyles = css`
    ${flexStart};
    ${px};
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.blue[500]};
    padding-top: 8px;
    padding-bottom: 8px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    > nav {
        ${flexStart};
        flex-direction: column;
        margin: 0 auto;
        max-width: max-content;
        overflow-y: auto;
        padding-right: 10px;

        > *:last-child {
            margin-bottom: 6px;
        }
    }

    &[data-state='open'] {
        animation: slideIn 300ms ease-in;
    }

    &[data-state='closed'] {
        animation: slideOut 300ms ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100vw);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100vw);
        }
    }

    @media (min-height: 720px) {
        padding: 64px;
    }
`;

const Top = styled.div`
    ${flexSpace};
    width: 100%;
    margin-bottom: 32px;

    > button {
        &[aria-label='close sub nav menu'] {
            color: ${({ theme }) => theme.colors.black};
            text-transform: capitalize;
            font-weight: 400;

            > svg {
                transform: scaleX(-1);
                margin-right: 16px;
                flex-shrink: 0;

                path {
                    fill: ${({ theme }) => theme.colors.black};
                }

                circle {
                    stroke: ${({ theme }) => theme.colors.black};
                }
            }
        }

        &[aria-label='close nav menu'] {
            margin-left: auto;
        }
    }

    @media (min-height: 575px) {
        margin-bottom: 64px;
    }

    @media (min-height: 675px) {
        margin-bottom: 96px;
    }

    @media (min-height: 775px) {
        margin-bottom: 128px;
    }
`;

type MobNavProps = {
    text?: string;
    links?: NavLinksTypes;
    allDialogsClosed: boolean;
    closeAllDialogs: () => void;
};

export const MobNavD = ({
    text,
    links = navLinks,
    allDialogsClosed,
    closeAllDialogs,
}: MobNavProps) => {
    const [open, setOpen] = useState(false);

    const { width } = useWindowSize();

    useRouteChange(setOpen);

    const { title, category } = useLocationData();

    useEffect(() => {
        setOpen(false);
    }, [allDialogsClosed]);

    const currentCategory = category === text || title === text;

    return width < 1024 ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogOpen>
                {text ? (
                    <PlainBtn
                        css={navBtnStyles}
                        className={currentCategory ? 'current-nav-category' : ''}
                    >
                        {text} <ChevronIcon />
                    </PlainBtn>
                ) : (
                    <PlainBtn
                        aria-label="open navigation menu"
                        css={css`
                            @media (min-width: 1024px) {
                                display: none;
                            }
                        `}
                    >
                        <MenuIcon />
                    </PlainBtn>
                )}
            </DialogOpen>

            <DialogContent
                contentStyles={contentStyles}
                overlayStyles={overlayStyles}
                title="mobile nav menu"
            >
                <Top>
                    {text ? (
                        <DialogClose>
                            <PlainBtn aria-label="close sub nav menu">
                                <ChevronIcon />
                            </PlainBtn>
                        </DialogClose>
                    ) : (
                        <HomeLogo />
                    )}

                    <PlainBtn onClick={closeAllDialogs} aria-label="close nav menu">
                        <CloseIcon />
                    </PlainBtn>
                </Top>

                <nav>
                    {links.map((data, i) =>
                        data.links ? (
                            <MobNavD
                                text={data.text}
                                links={data.links}
                                key={i}
                                allDialogsClosed={allDialogsClosed}
                                closeAllDialogs={closeAllDialogs}
                            />
                        ) : (
                            <CLink to={data.link} css={navLinkStyles} key={i}>
                                {data.text}
                            </CLink>
                        )
                    )}
                </nav>
            </DialogContent>
        </Dialog>
    ) : (
        <Fragment />
    );
};
