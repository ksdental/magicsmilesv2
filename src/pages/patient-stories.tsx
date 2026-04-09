import VideoHero from '@/VideoHero';
import { Fragment } from 'react';
import video from '@a/video/edme.mp4';
import poster from '@a/images/video-posters/edme-poster.jpg';
import { SingleArticle } from '@/SingleArticle';
import { StaticImage } from 'gatsby-plugin-image';
import { VideoBox } from '@/VideoBox';
import { css } from '@emotion/react';
import { VideoBoxGrid } from '@/VideoBoxGrid';
export { Head } from '.';

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="Patient Testimonials - Linden, NJ"
                title={
                    <h2>
                        Our Patients Tell
                        <strong>The Story Best</strong>
                    </h2>
                }
                centerVideo={video}
                centerVideoPoster={poster}
            />

            <SingleArticle
                css={css`
                    > div:not(.gatsby-image-wrapper) {
                        max-width: 1100px;
                    }
                `}
            >
                <h2>
                    <strong> Real Patients. </strong> Real Stories.
                </h2>

                <VideoBoxGrid>
                    <VideoBox
                        videoID="1013553199"
                        videoTitle="After So Many Negative Experiences With Dentists, I Gave Up Going To One"
                    >
                        <StaticImage
                            src="../../assets/images/patient-stories/1.jpg"
                            alt="patient standing in a dental office"
                            width={550}
                            height={366}
                        />
                    </VideoBox>

                    <VideoBox
                        videoID="1013552861"
                        videoTitle="I Never Thought My Confidence Was Ever Going To Be Restored"
                    >
                        <StaticImage
                            src="../../assets/images/patient-stories/2.jpg"
                            alt="patient standing in a dental office"
                            width={550}
                            height={366}
                        />
                    </VideoBox>

                    <VideoBox
                        videoID="1013552534"
                        videoTitle="I Was Worried I Would Be In Pain Indefinitely"
                    >
                        <StaticImage
                            src="../../assets/images/patient-stories/3.jpg"
                            alt="patient standing in a dental office"
                            width={550}
                            height={366}
                        />
                    </VideoBox>
                </VideoBoxGrid>
            </SingleArticle>
        </Fragment>
    );
}
