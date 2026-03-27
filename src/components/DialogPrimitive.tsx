import { css, type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Root as Hidden } from '@radix-ui/react-visually-hidden';
import { forwardRef, ReactNode } from 'react';

const Overlay = styled(DialogPrimitive.Overlay)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;

    &[data-state='open'] {
        animation: fadeIn 300ms ease-in;
    }

    &[data-state='closed'] {
        animation: fadeOut 300ms ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

const Content = styled(DialogPrimitive.Content)<{ slideIn?: boolean }>`
    position: fixed;
    z-index: 101;
    overflow: hidden;

    &[data-state='open'] {
        animation: fadeIn 300ms ease-in;
    }

    &[data-state='closed'] {
        animation: fadeOut 300ms ease-out;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOutLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }

    ${({ slideIn }) =>
        slideIn &&
        css`
            &[data-state='open'] {
                animation: slideInRight 300ms ease-in;
            }

            &[data-state='closed'] {
                animation: slideOutLeft 300ms ease-out;
            }
        `};
`;

type DialogProps = {
    children: ReactNode;
    overlayStyles: SerializedStyles;
    contentStyles: SerializedStyles;
    title: string;
    slideIn?: boolean;
};

export const Dialog = DialogPrimitive.Root;

export const DialogOpen = ({ children }: { children: ReactNode }) => {
    return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
};

export const DialogClose = ({ children }: { children: ReactNode }) => (
    <DialogPrimitive.Close asChild>{children}</DialogPrimitive.Close>
);

// eslint-disable-next-line
export const DialogContent = forwardRef<HTMLDivElement, DialogProps>(
    ({ children, overlayStyles, contentStyles, title, ...props }, forwardedRef) => (
        <DialogPrimitive.Portal>
            <Overlay css={overlayStyles} />
            <Content css={contentStyles} {...props} ref={forwardedRef}>
                <Hidden asChild>
                    <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
                </Hidden>
                {children}
            </Content>
        </DialogPrimitive.Portal>
    )
);

// Usage

// const overlayStyles = css`
//     background-color: red;
// `;

// const contentStyles = css`
//    &[data-state='open'] {
//     animation: slideIn 300ms ease-in;
//     }

//     &[data-state='closed'] {
//         animation: slideOut 300ms ease-out;
//     }

//     @keyframes slideIn {
//         from {
//             transform: translateY(-100vw);
//         }
//         to {
//             transform: translateY(0);
//         }
//     }

//     @keyframes slideOut {
//         from {
//             transform: translateY(0);
//         }
//         to {
//             transform: translateY(-100vw);
//         }
//      }
// `;

// <Dialog>
//     <DialogOpen>Dialog trigger</DialogOpen>
//     <DialogContent
//         overlayStyles={overlayStyles}
//         contentStyles={contentStyles}
//         aria-describedby={undefined} if no Dialog title
//     >
//         Dialog Content
//         <DialogClose>Close</DialogClose>
//     </DialogContent>
// </Dialog>
