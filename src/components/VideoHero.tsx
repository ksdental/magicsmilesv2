import { Fragment, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { PlayBtn } from './buttons';
import { VideoModal } from './VideoModal';
import {
    HeroBigPlayBtn,
    ResponsiveHeroTitle,
    HeroBottomBar,
    HeroSocialBar,
    HeroVideo,
    HeroVideoImageBox,
} from './HeroComponents';

const Section = styled.section`
    padding-top: 135px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);

    > div#hero-grid {
        display: grid;
        grid-area: 1 / 1;
        position: relative;
        min-height: 300px;

        ::before {
            content: '';
            grid-area: 1/1;
            background-color: rgba(0, 0, 0, 0.09);
            z-index: 2;
        }

        > .backgroundImage {
            z-index: 1;
            grid-area: 1/1;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        > * {
            grid-area: 1/1;
        }
    }

    @media (min-width: 568px) and (max-width: 767px) {
        > div#hero-grid {
            grid-area: 2 / 1;
        }
    }

    @media (min-width: 568px) {
        > div#hero-grid {
            min-height: 400px;
        }
    }

    @media (min-width: 768px) {
        > div#hero-grid {
            min-height: 520px;
            height: calc(100svh - 135px);
            height: calc(100svh - 135px);

            ::before {
                background-color: rgba(0, 0, 0, 0.21);
            }
        }
    }

    @media (min-width: 1024px) {
        padding-top: 146px;

        > div#hero-grid {
            height: calc(100svh - 146px);
            height: calc(100svh - 146px);
        }
    }

    @media (min-width: 1100px) {
        padding-top: 176px;

        > div#hero-grid {
            height: calc(100svh - 176px);
            height: calc(100svh - 176px);
        }
    }

    @media (min-width: 1680px) {
        padding-top: 151px;

        > div#hero-grid {
            height: calc(100svh - 151px);
            height: calc(100svh - 151px);
        }
    }
`;
type Props = {
    heading: string;
    backgroundImage?: ReactNode;
    centerVideo?: string;
    centerVideoPoster?: string;
    videoID?: string;
    videoTitle?: string;
    videoImage?: ReactNode;
    title: ReactNode;
    tagline: string;
    bottomText?: string;
    videoSrc?: string;
};
export default function VideoHero({
    heading,
    backgroundImage,
    centerVideo,
    centerVideoPoster,
    videoID,
    videoTitle,
    videoSrc,
    videoImage,
    title,
    bottomText,
}: Props) {
    const [open, setOpen] = useState(false);

    const handlePlay = () => {
        setOpen(true);
    };
    return (
        <Fragment>
            <Section>
                <ResponsiveHeroTitle videoExist={!!videoID || !!videoSrc}>
                    <h1>{heading}</h1>
                    {title}
                </ResponsiveHeroTitle>

                <div id="hero-grid">
                    {centerVideoPoster && centerVideo ? (
                        <HeroVideo
                            muted
                            playsInline
                            autoPlay
                            preload=""
                            loop
                            poster={centerVideoPoster}
                            controls={false}
                        >
                            <source src={centerVideo} type="video/mp4" />
                        </HeroVideo>
                    ) : (
                        ''
                    )}

                    {backgroundImage || ''}

                    {videoID || videoSrc ? <HeroBigPlayBtn handlePlay={handlePlay} /> : ''}

                    <HeroBottomBar
                        text={bottomText}
                        handlePlay={handlePlay}
                        videoExist={!!videoID || !!videoSrc}
                    />

                    {videoImage ? (
                        <HeroVideoImageBox>
                            {videoImage}
                            <PlayBtn onClick={handlePlay} />
                        </HeroVideoImageBox>
                    ) : (
                        ''
                    )}

                    <HeroSocialBar />
                </div>

            </Section>

            {(videoID || videoSrc) && videoTitle ? (
                <VideoModal
                    open={open}
                    setOpen={setOpen}
                    videoID={videoID}
                    videoTitle={videoTitle}
                    videoSrc={videoSrc}
                />
            ) : (
                ''
            )}
        </Fragment>
    );
}
