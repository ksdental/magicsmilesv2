import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';
import { PlayBtn } from './buttons';
import { VideoModal } from './VideoModal';
import { flexCenter } from './layout/styles/classes';

const Container = styled.div`
    max-width: max-content;
    position: relative;
    display: grid;

    > .gatsby-image-wrapper {
        grid-area: 1/1;
        ::after {
            content: '';
            background: linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6));
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
    }
`;

const Box = styled.div`
    ${flexCenter};
    justify-content: flex-start;
    gap: 15px;
    padding: 0 20px 20px;
    grid-area: 1/1;
    z-index: 2;
    align-self: end;

    > h5 {
        margin: 0;
        color: ${({ theme }) => theme.colors.white};
    }
`;

type Props = { children: ReactNode; videoID: string; videoTitle: string; videoSrc?: string };

export const VideoBox = ({ children, videoID, videoTitle, videoSrc }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            {children}

            <Box>
                <PlayBtn onClick={() => setOpen(true)} />
                <h5>{videoTitle}</h5>
            </Box>
            <VideoModal
                open={open}
                setOpen={setOpen}
                videoID={videoID}
                videoTitle={videoTitle}
                videoSrc={videoSrc}
            />
        </Container>
    );
};
