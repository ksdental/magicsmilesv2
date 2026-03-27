/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement } from 'react';
import { LayoutProvider } from '@s/layouts/LayoutProvider';
import { DefaultLayout } from '@s/layouts/DefaultLayout';
import type { GatsbySSR } from 'gatsby';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
    return <LayoutProvider>{element}</LayoutProvider>;
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
    if ((element.type as any).Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = (element.type as any).Layout ?? DefaultLayout;
    return <Layout {...props}>{element}</Layout>;
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents, setPostBodyComponents }) => {
    setHeadComponents([
        <meta
            key="google-site-verification"
            name="google-site-verification"
            content="ME4sV7lhauc8rGD1wfTaUQ16Dokc4oSMfcajYttnnU4"
        />,
        <script
            key="ga4"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YJZ098CGWQ"
        />,
        <script
            key="ga4-config"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-YJZ098CGWQ');
                `,
            }}
        />,
        <script
            key="facebook-pixel"
            dangerouslySetInnerHTML={{
                __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1126207509696252');
                    fbq('track', 'PageView');
                `,
            }}
        />,
        <noscript key="facebook-pixel-noscript">
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt="empty"
                src="https://www.facebook.com/tr?id=1126207509696252&ev=PageView&noscript=1"
            />
        </noscript>,
    ]);

    setPostBodyComponents([
        <script
            key="callrail"
            type="text/javascript"
            src="//cdn.callrail.com/companies/713922579/889914bdab54806c02a4/12/swap.js"
        />,
    ]);
};
