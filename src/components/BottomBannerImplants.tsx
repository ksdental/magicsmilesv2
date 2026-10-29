import { useEffect, useRef, useState } from 'react';
import { BottomBanner } from './BottomBanner';
import { StaticImage } from 'gatsby-plugin-image';

const surveyUrl = 'https://api.leadconnectorhq.com/widget/survey/1hpl5Inh3ZDfmLCyH8Ra';

type Props = {
    lazyLoad?: boolean;
};

export const BottomBannerImplants = ({ lazyLoad = false }: Props) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [shouldLoad, setShouldLoad] = useState(!lazyLoad);

    useEffect(() => {
        if (!lazyLoad || shouldLoad) return;

        const iframe = iframeRef.current;
        if (!iframe) return;

        if (!('IntersectionObserver' in window)) {
            setShouldLoad(true);
            return;
        }

        // Start loading before the visitor reaches the survey, not at page startup.
        const observer = new IntersectionObserver(
            entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '800px 0px', threshold: 0 }
        );
        observer.observe(iframe);
        return () => observer.disconnect();
    }, [lazyLoad, shouldLoad]);

    return (
        <BottomBanner
            title={
                <h2>
                    Find Out If You’re A <strong>Candidate For Dental Implants</strong>
                </h2>
            }
            text="Answer The Following Questions To Learn More About Our Pricing And Financing Options."
        >
            <StaticImage
                src="../../assets/images/home/bottom.png"
                alt="All-on-4 dental implants illustration"
                width={405}
                height={422}
            />
            <iframe
                ref={iframeRef}
                src={shouldLoad ? surveyUrl : undefined}
                onFocus={() => setShouldLoad(true)}
                id="1hpl5Inh3ZDfmLCyH8Ra"
                title="V4 Implant Eval - General Survey"
            ></iframe>
            {lazyLoad && (
                <noscript>
                    <a href={surveyUrl}>Open the dental implant survey</a>
                </noscript>
            )}
        </BottomBanner>
    );
};
