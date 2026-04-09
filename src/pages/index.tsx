import { Fragment } from 'react';
import { SingleArticle } from '@/SingleArticle';
import { CLink } from '@/CLink';
import { MeetDoctors } from '@/home/MeetDoctors';
import { QualityCare } from '@/home/QualityCare';
import { Technology } from '@/home/Technology';
import { Stories } from '@/Stories';
import { getNavLink } from '@/layout/NavLinks';
import { Treatments } from '@/home/Treatments';
import HomeHero from '@/HomeHero';
import { BottomBannerImplants } from '@/BottomBannerImplants';
import { Seo } from '@/Seo';
import { HeadProps } from 'gatsby';

export default function Home() {
    return (
        <Fragment>
            <HomeHero />
            <SingleArticle>
                <p className="single-article-tagline">
                    Comprehensive & Implant Dentistry - Linden, NJ
                </p>
                <h2>
                    Great Patient Care and Exceptional Treatment Outcomes,{' '}
                    <strong>All Under One Roof</strong>
                </h2>
                <p>
                    At Magic Smile Dental in Linden, NJ, we offer comprehensive care all in one
                    place, ensuring you get the best treatment without needing to visit multiple
                    offices. With an experienced oral surgeon on staff, we can offer various
                    treatments, from{' '}
                    <CLink to={getNavLink('general dentistry')}>routine dental care</CLink> to{' '}
                    <CLink to={getNavLink('oral surgery')}>complex oral surgery</CLink>.
                </p>
                <p>
                    We take time with each procedure to guarantee the best, most personalized
                    results. We tailor our care to meet the unique needs of every patient. Plus, we
                    speak your language. Whether Spanish, Russian, Ukrainian, or Polish, we make
                    communicating and feeling comfortable throughout your treatment more accessible.
                </p>
            </SingleArticle>
            <MeetDoctors />
            <QualityCare />
            <Technology />
            <Stories />
            <Treatments />
            <BottomBannerImplants />
        </Fragment>
    );
}

export const Head = ({ location }: HeadProps) => {
    return <Seo pathname={location.pathname.split('/').slice(-2)[0]} />;
};
