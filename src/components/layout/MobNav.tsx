import { CLink } from '@/CLink';
import { Dialog, DialogClose, DialogContent, DialogOpen } from '@/DialogPrimitive';
import { PlainBtn } from '@/buttons';
import { ReactComponent as CloseIcon } from '@a/icons/close.svg';
import { ReactComponent as MenuIcon } from '@a/icons/menu.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useRouteChange from '@s/hooks/useRouteChange';
import useWindowSize from '@s/hooks/useWindowSize';
import { Fragment, useState } from 'react';
import { MobSubNav } from './MobSubNav';
import { subNavLinkStyles } from './NavLinkStyles';
import { navLinks } from './NavLinks';
import { theme } from './styles/GlobalStyles';
import { flexStart } from './styles/classes';
import { StaticImage } from 'gatsby-plugin-image';
import bg from '@a/images/nav-menu-bg.jpg';

const overlayStyles = css`
    background-color: rgba(0, 0, 0, 0.6);
`;

const contentStyles = css`
    background-color: ${theme.colors.darkerBlue};
    padding: 20px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 400px;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;

    > div {
        margin-bottom: 60px;
    }
`;

const NavMenu = styled.nav<{ subDialogOpen: boolean }>`
    ${flexStart};
    flex-direction: column;
    align-items: stretch;
    transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    height: calc(100% - 100px);
    overflow-y: auto;

    @media (min-height: 720px) {
        height: calc(100% - 150px);
    }

    ${({ subDialogOpen }) =>
        subDialogOpen &&
        css`
            visibility: ${subDialogOpen ? 'hidden' : 'visible'};
            pointer-events: ${subDialogOpen ? 'none' : 'auto'};
            opacity: ${subDialogOpen ? 0 : 1};
        `};
`;

const OpenBtn = styled(PlainBtn)`
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    display: flex;
    width: 60px;
    height: 45px;

    @media (min-width: 1100px) {
        display: none;
    }
`;

export const MobNav = () => {
    const [open, setOpen] = useState(false);
    const [subDialogOpen, setSubDialogOpen] = useState(false);

    const { width } = useWindowSize();

    useRouteChange(setOpen);

    return width < 1100 ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogOpen>
                <OpenBtn aria-label="open navigation menu">
                    <MenuIcon />
                </OpenBtn>
            </DialogOpen>

            <DialogContent
                contentStyles={contentStyles}
                overlayStyles={overlayStyles}
                title="website main navigation menu"
                slideIn
            >
                <div>
                    <DialogClose>
                        <PlainBtn
                            data-mobile-expanded="true"
                            aria-label="close the nav menu"
                            css={css`
                                margin-left: auto;
                                margin-bottom: 20px;
                                display: flex;
                            `}
                        >
                            <CloseIcon />
                        </PlainBtn>
                    </DialogClose>

                    <StaticImage
                        src="../../../assets/images/layout/logo-white.png"
                        alt="Magic Smile Dental — home"
                        width={360}
                        height={110}
                    />
                </div>
                <NavMenu subDialogOpen={subDialogOpen}>
                    {navLinks.map((data, i) =>
                        data.links ? (
                            <MobSubNav
                                key={i}
                                text={data.text}
                                links={data.links}
                                setSubDialogOpen={setSubDialogOpen}
                            />
                        ) : (
                            <CLink to={data.link} css={subNavLinkStyles} key={i}>
                                {data.text}
                            </CLink>
                        )
                    )}
                </NavMenu>
            </DialogContent>
        </Dialog>
    ) : (
        <Fragment />
    );
};
