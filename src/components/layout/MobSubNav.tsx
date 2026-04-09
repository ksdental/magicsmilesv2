import { PlainBtn } from '@/buttons';
import { CLink } from '@/CLink';
import { Dialog, DialogClose, DialogContent, DialogOpen } from '@/DialogPrimitive';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { css } from '@emotion/react';
import useLocationData from '@s/hooks/useLocationData';
import useRouteChange from '@s/hooks/useRouteChange';
import useWindowSize from '@s/hooks/useWindowSize';
import { Fragment, useEffect, useState } from 'react';
import { NavLinksTypes } from './NavLinks';
import { mobNavBtnStyles, subNavLinkStyles } from './NavLinkStyles';
import { flexStart } from './styles/classes';

const overlayStyles = css`
    display: none;
`;

const contentStyles = css`
    position: fixed;
    top: calc(
        (100vw / 3.636363636363636) + 20px + 52px + 60px
    ); // top padding 20px + header height depending on image height + 40px
    max-width: 400px;
    width: 100%;
    right: 0;
    bottom: 0;
    padding: 20px;
    padding-top: 0;

    @media (min-width: 400px) {
        top: 242px; // header height + 40px;
    }

    > button:first-of-type {
        width: 100%;
    }

    > nav {
        ${flexStart};
        flex-direction: column;
        align-items: stretch;
        height: calc(100% - 32px);
        overflow-y: auto;
    }
`;

type SubNavProps = {
    text: string;
    links: NavLinksTypes;
    setSubDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobSubNav = ({ text, links, setSubDialogOpen }: SubNavProps) => {
    const [open, setOpen] = useState(false);

    const { width } = useWindowSize();

    useRouteChange(setOpen);

    const { category } = useLocationData();

    useEffect(() => {
        setSubDialogOpen(open);
    }, [open, setSubDialogOpen]);

    return width < 1100 ? (
        <Dialog open={open} onOpenChange={setOpen} modal={false}>
            <DialogOpen>
                <PlainBtn
                    aria-label={`open ${text} menu`}
                    css={mobNavBtnStyles}
                    className={category === text ? 'current-nav-category' : ''}
                >
                    {text} <ChevronIcon />
                </PlainBtn>
            </DialogOpen>

            <DialogContent
                contentStyles={contentStyles}
                overlayStyles={overlayStyles}
                title={`${text} navigation menu`}
                slideIn
            >
                <DialogClose>
                    <PlainBtn
                        data-mobile-expanded="true"
                        css={mobNavBtnStyles}
                        className={category === text ? 'current-nav-category' : ''}
                    >
                        back <ChevronIcon />
                    </PlainBtn>
                </DialogClose>
                <nav>
                    {links.map((data, i) => (
                        <CLink to={data.link} css={subNavLinkStyles} key={i}>
                            {data.text}
                        </CLink>
                    ))}
                </nav>
            </DialogContent>
        </Dialog>
    ) : (
        <Fragment />
    );
};
