import styled from '@emotion/styled';
import { Dialog, DialogContent } from '@/DialogPrimitive';
import { ReactComponent as CloseIcon } from '@a/icons/close.svg';
import { DialogClose } from '@radix-ui/react-dialog';
import { PlainBtn } from './buttons';
import { theme } from './layout/styles/GlobalStyles';
import { css } from '@emotion/react';

const overlayStyles = css`
    background-color: rgba(0, 0, 0, 0.6);
`;

const contentStyles = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1360px;
    width: calc(100% - 40px);
    max-height: 765px;
    height: calc((100vw - 40px) * 0.5625);
    overflow: unset;
    background: ${theme.colors.gray};

    > iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

const CloseBtn = styled(PlainBtn)`
    position: absolute;
    top: -15px;
    right: -15px;
    z-index: 10;
`;

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    videoID?: string;
    videoTitle: string;
    videoSrc?: string;
};

export const VideoModal = ({ open, setOpen, videoID, videoTitle, videoSrc }: Props) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                contentStyles={contentStyles}
                overlayStyles={overlayStyles}
                title="video dialog"
            >
                <DialogClose asChild>
                    <CloseBtn aria-label="close the video dialog">
                        <CloseIcon />
                    </CloseBtn>
                </DialogClose>
                <iframe
                    src={
                        videoSrc ||
                        `https://player.vimeo.com/video/${videoID}?speed=0&amp;autoplay=1&amp;pip=0&amp;quality=undefined&amp;app_id=122963&amp;texttrack=undefined`
                    }
                    width="426"
                    height="240"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title={videoTitle}
                ></iframe>
            </DialogContent>
        </Dialog>
    );
};
