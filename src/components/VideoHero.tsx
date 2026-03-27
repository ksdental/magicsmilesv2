import { Fragment, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { PlayBtn } from './buttons';
import { VideoModal } from './VideoModal';
import {
    HeroBigPlayBtn,
    HeroBigTitleBox,
    HeroBottomBar,
    HeroSocialBar,
    HeroTitleBox,
    HeroVideo,
    HeroVideoImageBox,
} from './HeroComponents';

const Section = styled.section`
    padding-top: 135px;

    > div#hero-grid {
        display: grid;
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
    backgroundImage,
    centerVideo,
    centerVideoPoster,
    videoID,
    videoTitle,
    videoSrc,
    videoImage,
    title,
    tagline,
    bottomText,
}: Props) {
    const [open, setOpen] = useState(false);

    const handlePlay = () => {
        setOpen(true);
    };
    return (
        <Fragment>
            <Section>
                {title ? <HeroTitleBox title={title} tagline={tagline} /> : ''}

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

                    {title || tagline ? (
                        <HeroBigTitleBox videoExist={!!videoID || !!videoSrc}>
                            <p>{tagline}</p>
                            {title}
                        </HeroBigTitleBox>
                    ) : (
                        ''
                    )}

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

                {title ? <HeroTitleBox title={title} tagline={tagline} smMobile /> : ''}
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
