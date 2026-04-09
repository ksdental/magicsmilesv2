import { GlobalStyles, theme } from '@/layout/styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { createContext, FC, useContext, useState } from 'react';

type SiteState = {
    language: 'en' | 'es';
};

type SiteContext = {
    siteState: SiteState;
    setSiteState: React.Dispatch<React.SetStateAction<SiteState>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const siteContext = createContext<SiteContext>(null as any);

export const useSiteContext = (): SiteContext => useContext(siteContext);

export const LayoutProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [siteState, setSiteState] = useState<SiteState>({
        language: 'en',
    });

    return (
        <siteContext.Provider value={{ siteState, setSiteState }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </siteContext.Provider>
    );
};
