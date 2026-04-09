import { BottomBanner } from './BottomBanner';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactComponent as CheckmarkIcon } from '@a/icons/checkmark.svg';
import { css } from '@emotion/react';
import { flexCenter } from './layout/styles/classes';

const Box = styled.div`
    > h3 {
        margin: 0 0 24px;
        color: ${({ theme }) => theme.colors.darkerBlue};
        letter-spacing: 0;
        text-transform: capitalize;
        font-size: 2rem;
        letter-spacing: -1px;

        > strong {
            color: ${({ theme }) => theme.colors.blue};
            text-decoration: underline;
        }
    }

    @media (min-width: 1024px) {
        max-width: 44%;
    }
`;

const List = styled.ul`
    margin: 24px 0;

    > li {
        ${flexCenter};
        flex-direction: column;
        margin: 0 0 24px;
        list-style-type: none;
        font-weight: 300;
        font-family: 'Raleway', sans-serif;
        line-height: 1.5;
        letter-spacing: 0;

        strong {
            font-weight: 700;
            text-decoration: underline;
        }

        :last-of-type {
            margin-bottom: 0;
        }

        > svg {
            width: 22px;
            height: 22px;
        }
    }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px 20px;

        > li {
            flex-direction: row;
            align-items: flex-start;
            margin: 0;
            gap: 10px;
            text-align: left;

            > svg {
                flex-shrink: 0;
            }
        }
    }
`;

const Iframe = styled.iframe`
    border: none;
    width: 100%;
    overflow: hidden;
    height: 411px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 18px;
`;

const imageStyles = css`
    max-width: 360px;
    margin: 0 auto;

    & + .gatsby-image-wrapper {
        max-width: 360px;
        display: block;
        margin: 0 auto 24px;
    }

    @media (min-width: 1024px) {
        max-width: unset;
        & + .gatsby-image-wrapper {
            max-width: 590px;
            margin-bottom: 0;
        }
    }
`;

export const BottomBannerVeneers = () => {
    return (
        <BottomBanner>
            <div>
                <StaticImage
                    src="../../assets/images/veneers-info.png"
                    alt="everything about veneers"
                    width={590}
                    height={848}
                    css={imageStyles}
                />
                <StaticImage
                    src="../../assets/images/brush-underline.png"
                    alt="underline"
                    width={590}
                    height={10}
                />
            </div>
            <Box>
                <h3>
                    Complete This Short
                    <br />
                    <strong>Smile Evaluation</strong>
                    <br />
                    And Receive The Following:
                </h3>
                <StaticImage
                    src="../../assets/images/brush-underline.png"
                    alt="underline"
                    width={512}
                    height={8}
                />
                <List>
                    <li>
                        <CheckmarkIcon />
                        <span>Pricing and options for treatment</span>
                    </li>
                    <li>
                        <CheckmarkIcon />
                        <span>If you’re a good candidate for veneers</span>
                    </li>
                    <li>
                        <CheckmarkIcon />
                        <span>
                            A <strong>Digital Smile Design</strong> to show you what you will look
                            like with your new veneers!
                        </span>
                    </li>
                    <li>
                        <CheckmarkIcon />
                        <span>
                            And best of all… a time to speak directly with our doctors. Top Cosmetic
                            Dentists in New Jersey!
                        </span>
                    </li>
                </List>
                <Iframe
                    src="https://api.leadconnectorhq.com/widget/survey/pOHmknnJaTiMtYkNZx6l"
                    id="pOHmknnJaTiMtYkNZx6l"
                    title="Veneers"
                ></Iframe>
            </Box>
        </BottomBanner>
    );
};
