import { BottomBanner } from './BottomBanner';
import { StaticImage } from 'gatsby-plugin-image';

export const BottomBannerImplants = () => {
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
                src="https://api.leadconnectorhq.com/widget/survey/1hpl5Inh3ZDfmLCyH8Ra"
                id="1hpl5Inh3ZDfmLCyH8Ra"
                title="V4 Implant Eval - General Survey"
            ></iframe>
        </BottomBanner>
    );
};
