import styled from '@emotion/styled';
import { BigArrowBtn, PlainBtn } from './buttons';
import { flexCenter, titleLine } from './layout/styles/classes';
import { Dialog, DialogClose, DialogContent } from './DialogPrimitive';
import { ReactNode, useState } from 'react';
import { ReactComponent as CloseIcon } from '@a/icons/close.svg';
import { css } from '@emotion/react';

const Section = styled.section`
    padding: 75px 25px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.lighterBlue};

    @media (min-width: 768px) {
        padding: 75px 50px;
    }

    @media (min-width: 1024px) {
        ${flexCenter};
        gap: 60px;
        padding: 75px 70px;
    }
`;

const Box = styled.div`
    text-align: center;
    max-width: 620px;
    margin: 50px auto 0;

    > h2 {
        ${titleLine};
        color: ${({ theme }) => theme.colors.darkerBlue};
        margin: 0;
    }

    > p {
        margin: 30px 0 40px;
        color: ${({ theme }) => theme.colors.darkerBlue};
    }

    @media (min-width: 1024px) {
        text-align: left;
        margin: 0;

        > h2::after {
            margin-left: 0;
        }
    }
`;

const CloseBtn = styled(PlainBtn)`
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 10;

    > svg {
        width: 24px;
        height: 24px;

        path {
            fill: ${({ theme }) => theme.colors.black};
        }
    }
`;

const overlayStyles = css`
    background-color: rgba(0, 0, 0, 0.6);
`;

const contentStyles = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 750px;
    width: calc(100% - 40px);
    background: white;
    padding: 50px 25px;
    overflow-y: auto;
    max-height: calc(100vh - 40px);

    > form {
        max-width: unset;
    }

    @media (min-width: 768px) {
        padding: 50px;
    }

    @media (min-width: 1024px) {
        padding: 50px 70px;
    }
`;

type Props = {
    children: ReactNode;
    dialogContent: ReactNode;
    image: ReactNode;
    btnText: string;
};

export const DialogArticle = ({ dialogContent, children, image, btnText }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <Section>
            {image}

            <Box>
                {children}
                <BigArrowBtn dark onClick={() => setOpen(true)}>
                    {btnText}
                </BigArrowBtn>
            </Box>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    contentStyles={contentStyles}
                    overlayStyles={overlayStyles}
                    title="form dialog"
                >
                    <DialogClose>
                        <CloseBtn aria-label="close the form dialog">
                            <CloseIcon />
                        </CloseBtn>
                    </DialogClose>
                    {dialogContent}
                </DialogContent>
            </Dialog>
        </Section>
    );
};
