import { Footer } from '@/layout/Footer';
import { Nav } from '@/layout/Nav';
import { SkipNavContent, SkipNavLink } from '@/layout/SkipNav';
import { Script } from 'gatsby';
import { Fragment, ReactNode } from 'react';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <SkipNavLink />
            <Nav />
            <SkipNavContent />
            <Script
                strategy="idle"
                type="text/javascript"
                src="https://cdn.userway.org/widget.js"
                data-text="Accessibility Menu"
                data-color="#001c36"
            ></Script>

            <main>{children}</main>
            <Footer />
        </Fragment>
    );
};
