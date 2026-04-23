import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CLink } from '@/CLink';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '.';
export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Patient Information - Linden, NJ"
                title={
                    <h2>
                        <strong>You’ll Love How</strong>We Treat You Here
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/patient-center/hero.jpg"
                        alt="Patient standing with a doctor inside the Magic Smile Dental office"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <BgArticle noBg imgRight centerImage>
                <div>
                    <StaticImage
                        src="../../assets/images/patient-center/1.png"
                        alt="Dr. Anatoly Bensianoff"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            Welcome To <strong>Magic Smile Dental!</strong>
                            Please fill out our new patient forms below.
                        </h2>

                        <CLink to="/Magic-Smile-NP-Forms.docx" style={{ fontWeight: 700 }}>
                            New Patient Forms
                        </CLink>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        You Are <strong>Welcome Here.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/patient-center/banner.jpg"
                    alt="Treatment table in the dental office"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
