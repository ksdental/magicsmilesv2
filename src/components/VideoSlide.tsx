import styled from '@emotion/styled';
import { useState } from 'react';
import { PlainBtn, PlayBtn } from './buttons';
import { VideoModal } from './VideoModal';
import { flexStart } from './layout/styles/classes';

const Box = styled(PlainBtn)`
    display: grid;
    position: relative;

    ::before {
        content: '';
        background: linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.5));
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    > video {
        grid-area: 1/1;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
    }

    > div {
        z-index: 3;
        ${flexStart};
        align-items: center;
        grid-area: 1/1;
        align-self: end;
        gap: 15px;
        margin-left: 20px;
        margin-bottom: 20px;

        > p {
            font-size: 1.375rem;
            line-height: 1;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.white};
            margin: 0;
        }
    }

    :hover,
    :focus {
        > div > div {
            ::before {
                transform: scale(0);
            }

            ::after {
                transform: scale(1);
                opacity: 1;
            }

            > svg {
                transform: scale(1.25) translateX(1px);
                > path {
                    fill: ${({ theme }) => theme.colors.white};
                }
            }
        }
    }
`;

type Props = {
    video: string;
    poster: string;
    text: string;
    videoTitle: string;
    videoID: string;
};

export const VideoSlide = ({ video, poster, text, videoTitle, videoID }: Props) => {
    const [open, setOpen] = useState(false);

    const handlePlay = () => {
        setOpen(true);
    };
    return (
        <Box onClick={handlePlay}>
            <video muted playsInline autoPlay preload="" loop poster={poster} controls={false}>
                <source src={video} type="video/mp4" />
            </video>
            <div>
                <PlayBtn as="div" />
                <p>{text}</p>
            </div>
            <VideoModal open={open} setOpen={setOpen} videoID={videoID} videoTitle={videoTitle} />
        </Box>
    );
};
