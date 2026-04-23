import { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { PlayBtn } from './buttons';
import { VideoModal } from './VideoModal';
import poster from '@a/images/video-posters/home-hero-poster.jpg';
import posterMobile from '@a/images/video-posters/home-hero-poster-small.jpg';
import video from '@a/video/home-hero.mp4';
import {
    HeroBigPlayBtn,
    HeroBottomBar,
    HeroSocialBar,
    HeroVideo,
    HeroVideoImageBox,
} from './HeroComponents';
import useWindowSize from '@s/hooks/useWindowSize';

const Section = styled.section`
    display: grid;
    position: relative;
    padding-top: 135px;
    min-height: max(366px, 69vh);

    ::before {
        content: '';
        grid-area: 1/1;
        background-color: rgba(0, 0, 0, 0.09);
        z-index: 2;
        position: relative;
    }

    > * {
        grid-area: 1/1;
    }

    > .backgroundImage {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        ::before {
            background-color: rgba(0, 0, 0, 0.21);
        }
        min-height: 100svh;
        min-height: 100vh;
    }

    @media (min-width: 1024px) {
        padding-top: 146px;
    }

    @media (min-width: 1100px) {
        padding-top: 176px;
    }

    @media (min-width: 1680px) {
        padding-top: 151px;
    }
`;

const homeCenterImageStyles = css`
    align-self: center;
    justify-self: center;
    z-index: 2;
    display: none;

    @media (min-width: 768px) {
        display: inline-block;
        margin-bottom: 270px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 230px;
    }

    @media (min-width: 1200px) {
        margin: 0 0 80px;
    }
`;

export default function HomeHero() {
    const [open, setOpen] = useState(false);

    const { width } = useWindowSize();
    const currentPoster = width >= 768 ? poster : posterMobile;

    const handlePlay = () => {
        setOpen(true);
    };
    return (
        <Fragment>
            <Section>
                <HeroVideo
                    muted
                    playsInline
                    autoPlay
                    preload="metadata"
                    loop
                    controls={false}
                    poster={currentPoster}
                >
                    <source src={video} type="video/mp4" />
                </HeroVideo>
                <StaticImage
                    src="../../assets/images/home/hero/center.png"
                    alt="creating excellence one service at a time"
                    width={420}
                    height={438}
                    loading="eager"
                    css={homeCenterImageStyles}
                />

                <HeroBottomBar
                    text="We Put Our Patients First No Matter The Condition!"
                    handlePlay={handlePlay}
                    videoExist
                />

                <HeroVideoImageBox>
                    <StaticImage
                        src="../../assets/images/home/hero/video-pic.jpg"
                        alt="Inside the Magic Smile Dental office"
                        width={380}
                        height={272}
                        loading="eager"
                    />
                    <PlayBtn onClick={handlePlay} />
                </HeroVideoImageBox>

                <HeroSocialBar />

                <HeroBigPlayBtn handlePlay={handlePlay} />
            </Section>

            <VideoModal
                open={open}
                setOpen={setOpen}
                videoID="1013550343"
                videoTitle="We Put Our Patients First, No Matter The Condition!"
            />
        </Fragment>
    );
}
