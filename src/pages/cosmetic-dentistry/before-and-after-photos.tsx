import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { BasicHero } from '@/BasicHero';
import { BeforeAfterSection } from '@/BeforeAfterSection';
import { BottomBannerConsult } from '@/BottomBannerConsult';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Before & After Photos - Linden, NJ"
                title={
                    <h2>
                        The Proof Is <strong>In Our Patients</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/before-and-after/hero.jpg"
                        alt="person getting teeth whitening treatment"
                        layout="fullWidth"
                    />
                }
            />
            <BeforeAfterSection />

            <BottomBannerConsult
                title={
                    <h2>
                        You Are <strong>Welcome Here.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/before-and-after/banner.jpg"
                    alt="doctor standing with a patient"
                    width={560}
                    height={380}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
