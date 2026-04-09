/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement } from 'react';
import { LayoutProvider } from '@s/layouts/LayoutProvider';
import { DefaultLayout } from '@s/layouts/DefaultLayout';
import type { GatsbyBrowser } from 'gatsby';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return <LayoutProvider>{element}</LayoutProvider>;
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
    if ((element.type as any).Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = (element.type as any).Layout ?? DefaultLayout;
    return <Layout {...props}>{element}</Layout>;
};

declare global {
    interface Window {
        fbq: {
            (...args: unknown[]): void;
            callMethod?: (...args: unknown[]) => void;
            queue?: unknown[];
            push?: (args: unknown[]) => void;
            loaded?: boolean;
            version?: string;
        };
        _fbq?: unknown;
    }
}

export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};
