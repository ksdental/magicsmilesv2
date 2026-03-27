import { ArrowBtn, PlainBtn } from '@/buttons';
import { CLink } from '@/CLink';
import { flexCenter, titleWhiteLine } from '@/layout/styles/classes';
import { Slider } from '@/Slider';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { VideoSlide } from '@/VideoSlide';
import video1 from '@a/video/edme.mp4';
import poster1 from '@a/images/video-posters/edme-poster.jpg';
import video2 from '@a/video/maria.mp4';
import poster2 from '@a/images/video-posters/maria-poster.jpg';
import video3 from '@a/video/alex.mp4';
import poster3 from '@a/images/video-posters/alex-poster.jpg';
import { getNavLink } from '@/layout/NavLinks';

const Section = styled.section`
    position: relative;
    isolation: isolate;

    > .gatsby-image-wrapper:first-of-type {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    @media (min-width: 1024px) {
        ${flexCenter};
        gap: 40px;
        padding: 100px 70px 60px;

        > div {
            :nth-of-type(2) {
                order: 1;
                max-width: min(66%, 1200px);
            }
        }
    }
`;

const SliderNav = styled.div`
    ${flexCenter};
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.white};

    > button {
        > svg {
            width: 16px;

            path {
                fill: ${({ theme }) => theme.colors.white};
            }
        }

        :first-of-type {
            > svg {
                transform: rotate(90deg) translateX(-1px);
            }
        }

        :last-of-type {
            > svg {
                transform: rotate(-90deg) translateX(1px);
            }
        }
    }

    > div {
        margin: 0 10px;
        > span {
            line-height: 1;
            font-size: 15px;
        }
    }
`;

const Box = styled.div`
    text-align: center;
    padding: 0 20px 50px;

    > h2 {
        color: ${({ theme }) => theme.colors.white};
        ${titleWhiteLine};
        margin: 40px 0;
    }

    @media (min-width: 1024px) {
        text-align: left;
        padding: 0;
        max-width: 650px;

        > h2 {
            margin-top: 0;
            ::after {
                margin-left: 0;
            }
        }
    }
`;

export const Stories = () => {
    const sliderSettings: SwiperOptions = {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 80,
        pagination: {
            type: 'fraction',
            el: '.stories-slider-pagination',
            formatFractionCurrent: (number: number) => ('0' + number).slice(-2),
            formatFractionTotal: (number: number) => ('0' + number).slice(-2),
        },
        navigation: {
            nextEl: '.stories-slider-next',
            prevEl: '.stories-slider-prev',
        },
    };

    return (
        <Section>
            <StaticImage
                src="../../assets/images/carousel-bg.jpg"
                alt="background"
                layout="fullWidth"
            />
            <div>
                <Slider sliderSettings={sliderSettings}>
                    <SwiperSlide>
                        <VideoSlide
                            videoID="1013552534"
                            videoTitle="I Was Worried I Would Be In Pain Indefinitely"
                            video={video1}
                            poster={poster1}
                            text="EDME - Upper All on X"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VideoSlide
                            text="Maria - Implants and Crowns"
                            videoID="1013552861"
                            videoTitle="I Never Thought My Confidence Was Ever Going To Be Restored"
                            video={video2}
                            poster={poster2}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VideoSlide
                            text="Alex"
                            videoID="1013553199"
                            videoTitle="After So Many Negative Experiences With Dentists, I Gave Up Going To One"
                            video={video3}
                            poster={poster3}
                        />
                    </SwiperSlide>
                </Slider>
                <SliderNav>
                    <PlainBtn className="stories-slider-prev">
                        <ChevronIcon />
                    </PlainBtn>{' '}
                    <div className="stories-slider-pagination"></div>
                    <PlainBtn className="stories-slider-next">
                        <ChevronIcon />
                    </PlainBtn>
                </SliderNav>
            </div>

            <Box>
                <h2>
                    From Dental Challenges to <strong>Complete, Healthy Smiles</strong>
                </h2>
                <ArrowBtn lightBlue as={CLink} to={getNavLink('patient stories')}>
                    view more stories
                </ArrowBtn>
            </Box>
        </Section>
    );
};
