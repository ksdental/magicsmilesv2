import { BasicHero } from '@/BasicHero';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { SingleArticle } from '@/SingleArticle';
import { VideoBox } from '@/VideoBox';
import { VideoBoxGrid } from '@/VideoBoxGrid';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '.';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Dental Video Library - Linden, NJ
"
                title={
                    <h2>
                        <strong>Magic Smile Dental</strong> Video Library
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/library/hero.jpg"
                        alt="camera lens"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <SingleArticle
                noBg
                css={css`
                    > div:not(.gatsby-image-wrapper) {
                        max-width: 1100px;
                    }
                `}
            >
                <VideoBoxGrid>
                    <VideoBox
                        videoID="1013550343"
                        videoTitle="We Put Our Patients First, No Matter The Condition!"
                    >
                        <StaticImage
                            src="../../assets/images/library/1.jpg"
                            alt="dr anatoly standing in a dental office"
                            width={800}
                        />
                    </VideoBox>

                    <VideoBox videoID="1013550813" videoTitle="The Benefits Of Laser Dentistry!">
                        <StaticImage
                            src="../../assets/images/library/2.jpg"
                            alt="dental office"
                            width={800}
                        />
                    </VideoBox>

                    <VideoBox
                        videoID="1013551099"
                        videoTitle="The Future Of Implants: Technology Takes Over Our Office"
                    >
                        <StaticImage
                            src="../../assets/images/library/3.jpg"
                            alt="dental office"
                            width={800}
                        />
                    </VideoBox>

                    <VideoBox
                        videoID="1013551392"
                        videoTitle="Why You Should Consider A Multi Specialist Practice"
                    >
                        <StaticImage
                            src="../../assets/images/library/4.jpg"
                            alt="three doctors having a discussion in a dental office"
                            width={800}
                        />
                    </VideoBox>

                    <VideoBox
                        videoID="1013551756"
                        videoTitle="Top 3 Concerns For Dental Implant Procedures"
                    >
                        <StaticImage
                            src="../../assets/images/library/5.jpg"
                            alt="Dental implants illustration"
                            width={800}
                        />
                    </VideoBox>

                    <VideoBox
                        videoID="1013552233"
                        videoTitle="Your Personalized Treatment Plan Explained"
                    >
                        <StaticImage
                            src="../../assets/images/library/6.jpg"
                            alt="Patient sitting in the dental office"
                            width={800}
                        />
                    </VideoBox>
                </VideoBoxGrid>
            </SingleArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        You Are <strong>Welcome Here.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/library/banner.jpg"
                    alt="patient smiling in a dental office"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
