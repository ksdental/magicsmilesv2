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

    return (
        <a {...rest} href={props.to} ref={ref}>
            {props.children}
        </a>
    );
});
