import styled from '@emotion/styled';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { forwardRef, ReactNode, Ref } from 'react';

export const Accordion = styled(AccordionPrimitive.Root)`
    &[data-orientation='horizontal'] {
        display: flex;
    }
`;

export const AccordionItem = AccordionPrimitive.Item;

export const AccordionContent = styled(AccordionPrimitive.Content)`
    overflow: hidden;

    &[data-state='open'] {
        animation: slideDown 300ms ease-out;
    }

    &[data-state='closed'] {
        animation: slideUp 300ms ease-out;
    }

    @keyframes slideDown {
        from {
            max-height: 0;
        }
        to {
            max-height: var(--radix-accordion-content-height);
        }
    }

    @keyframes slideUp {
        from {
            max-height: var(--radix-accordion-content-height);
        }
        to {
            max-height: 0;
        }
    }

    &[data-orientation='horizontal'] {
        &[data-state='open'] {
            animation: slideRight 300ms ease-out;
        }

        &[data-state='closed'] {
            animation: slideLeft 300ms ease-out;
        }

        @keyframes slideRight {
            from {
                max-width: 0;
            }
            to {
                max-width: var(--radix-accordion-content-width);
            }
        }

        @keyframes slideLeft {
            from {
                max-width: var(--radix-accordion-content-width);
            }
            to {
                max-width: 0;
            }
        }
    }
`;

type BtnProps = {
    children: ReactNode;
    className?: string;
} & AccordionPrimitive.AccordionTriggerProps;

// eslint-disable-next-line react/display-name
export const AccordionBtn = forwardRef(
    ({ children, className, ...props }: BtnProps, forwardedRef: Ref<HTMLButtonElement>) => (
        <AccordionPrimitive.Header style={{ margin: 0 }}>
            <AccordionPrimitive.Trigger className={className} ref={forwardedRef} {...props}>
                {children}
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
);

/* usage

        <Accordion type="single" collapsible>
            <AccordionItem value={data.text}> // must provide unique value to each item
                <AccordionBtn>
                {data.text} <ChevronIcon />
                </AccordionBtn>
                <AccordionContent>
                    content here
                </AccordionContent>
            </AccordionItem>
*/
