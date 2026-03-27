import { type SerializedStyles } from '@emotion/react';
import * as Tabs from '@radix-ui/react-tabs';

type TabsPrimitiveProps = {
    ariaLabel: string;
    tabs: string[];
    children: React.ReactNode;
    rootStyles: SerializedStyles;
    listStyles: SerializedStyles;
};

export const TabsPrimitive = ({
    ariaLabel,
    tabs,
    rootStyles,
    listStyles,
    children,
}: TabsPrimitiveProps) => {
    return (
        <Tabs.Root defaultValue="1" css={rootStyles}>
            <Tabs.List aria-label={ariaLabel} css={listStyles}>
                {tabs.map((tab, i) => (
                    <Tabs.Trigger value={`${i + 1}`} key={i}>
                        {tab}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            {children}
        </Tabs.Root>
    );
};

export const SingleTab = ({ children, value }: { children: React.ReactNode; value: string }) => (
    <Tabs.Content value={value} asChild>
        {children}
    </Tabs.Content>
);

/* usage


const rootStyles = css`
    margin: 32px 0 0;
`;

const listStyles = css`
    ${flexStart};
    align-items: center;
    gap: 16px;
    max-width: max-content;

    > button {
        ${plainBtnStyles};
        transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        font-weight: 600;
        text-transform: uppercase;
        padding: 8px 16px;
        flex-shrink: 0;
        color: #898989;

        :hover,
        :focus {
            color: ${theme.colors.blue4};
        }

        &[data-state='active'] {
            color: #2a7994;
            box-shadow: ${theme.colors.blue4} 0px -3px 0px 0px inset,
                ${theme.colors.blue4} 0px 1px 0px 0px;
        }
    }

    @media (max-width: 649px) {
        flex-direction: column;
        align-items: flex-start;

        > button {
            box-shadow: #d9d9d9 0px 1px 0px 0px;
            width: 100%;
            justify-content: flex-start;
        }
    }

    @media (min-width: 650px) {
        border-bottom: 1px solid #d9d9d9;
    }

    @media (min-width: 768px) {
        gap: 32px;
    }
`;


const tabHeadings = description.map(text => text[0].replace(/<[^>]+>/g, ''));


<TabsPrimitive
    ariaLabel="product description and information"
    tabs={tabHeadings}
    rootStyles={rootStyles}
    listStyles={listStyles}
>
    {tabContent.map((content, i) => (
        <SingleTab value={`tab${i + 1}`} key={i}>
            <div>{parse(content, { trim: true })}</div>
        </SingleTab>
    ))}
</TabsPrimitive>

*/
