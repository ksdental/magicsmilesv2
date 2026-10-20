import type { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';
import { forwardRef } from 'react';

const isExternalLink = (path: string) =>
    path?.startsWith(`http://`) ||
    path?.startsWith(`https://`) ||
    path?.startsWith(`//`) ||
    path?.startsWith(`www`) ||
    path?.includes('.');

type MyLinkProps = Omit<GatsbyLinkProps<unknown>, 'ref'>;

export const CLink = forwardRef<HTMLAnchorElement, MyLinkProps>(function MyLink(props, ref) {
    if (props.to.startsWith(`/`) && !props.to?.includes('.')) {
        return <GatsbyLink {...props} innerRef={ref} />;
    }

    // eslint-disable-next-line
    const { to, ...rest } = props;

    if (isExternalLink(props.to)) {
        return (
            <a {...rest} href={props.to} rel="noopener noreferrer" target="_blank" ref={ref}>
                {props.children}
            </a>
        );
    }

    // CallRail swap.js rewrites tel: link text/href before hydration. Render plain-text phone labels as
    // unmanaged HTML so React neither discards the SSR tree (#418/#423/#425) nor reverts the swapped number.
    if (props.to.startsWith('tel:') && typeof props.children === 'string') {
        const html = props.children
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, ...attrs } = rest;
        return (
            <a
                {...attrs}
                href={props.to}
                ref={ref}
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }

    return (
        <a {...rest} href={props.to} ref={ref}>
            {props.children}
        </a>
    );
});
