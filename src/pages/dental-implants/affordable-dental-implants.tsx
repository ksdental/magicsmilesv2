import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerImplants } from '@/BottomBannerImplants';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import { VideoBox } from '@/VideoBox';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Cost Of Dental Implants - Linden, NJ"
                title={
                    <h2>
                        Are Dental Implants <strong>Affordable?</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/dental-implants/cost/hero.jpg"
                        alt="Magic Smile Dental office"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />

            <BgArticle whiteBg imgRight big>
                <div>
                    <VideoBox
                        videoID="1013552050"
                        videoTitle="Several Ways To Go About Financing Your Dream Smile"
                    >
                        <StaticImage
                            src="../../../assets/images/dental-implants/cost/video-thumbnail.jpg"
                            alt="Patient in the dental office"
                            width={860}
                            height={576}
                        />
                    </VideoBox>
                    <BgArticleBox>
                        <h2>
                            Your Smile Is Worth <strong>a Long-Term Investment</strong>
                        </h2>
                        <p>
                            The decision to rebuild your smile with{' '}
                            <CLink to={getNavLink('dental implants')}>dental implants</CLink> can be
                            life-changing. Imagine the boost to your mental and emotional health
                            when you can speak and smile confidently again.
                        </p>
                        <p>
                            However, we also know that the cost of dental implants can be a barrier
                            for many, so we strive to make the process as easy and accessible as
                            possible. At Magic Smile Dental, we’re committed to helping you achieve
                            the smile you deserve with affordable dental implants in Linden, NJ!
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BgArticle darkBg centerImage>
                <div>
                    <StaticImage
                        src="../../../assets/images/dental-implants/cost/article-1.png"
                        alt="Dental implants illustration"
                        layout="fullWidth"
                    />
                    <BgArticleBox>
                        <h2>
                            Why Dental Implants Are <strong>the Number One Choice</strong>
                        </h2>
                        <p>
                            Dental implants are the top choice for smile restoration because they
                            offer a permanent solution to missing teeth. Whether you need to replace
                            one tooth or are looking for a{' '}
                            <CLink to={getNavLink('all-on-x full mouth implants')}>
                                better alternative to dentures
                            </CLink>
                            , options are available to suit your needs.;
                        </p>
                        <p>
                            The average cost of dental implants might seem high initially, but their
                            durability and longevity make them a smart investment in your long-term
                            oral health. For example, dentures rely on messy adhesives and suction
                            to stay in place, limit your food choices, and require routine
                            maintenance that can add up to additional costs you didn’t consider.
                            Since dental implants are a one-time investment, they save you money in
                            the long run.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BgArticle
                imgRight
                big
                noBg
                css={css`
                    background-color: #f5f5f5;
                `}
            >
                <div>
                    <StaticImage
                        src="../../../assets/images/dental-implants/cost/article-2.jpg"
                        alt="Doctor standing with a patient"
                        width={860}
                        height={575}
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>The Long-Term Financial Benefits </strong> of Dental Implants
                        </h2>
                        <ul>
                            <li>
                                Rebuild a healthy bite, protecting your remaining teeth from damage
                                and expensive treatment needs
                            </li>
                            <li>No need for costly cleansers or adhesives</li>
                            <li>
                                Can last a lifetime with proper care, eliminating the need for
                                expensive replacements
                            </li>
                            <li>
                                Restore your ability to enjoy a wide variety of healthy foods,
                                protecting your overall health and decreasing medical costs
                                associated with nutrition issues
                            </li>
                            <li>
                                Improve your quality of life and self-confidence, which are
                                priceless
                            </li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle firstImg noBg>
                <StaticImage
                    src="../../../assets/images/dental-implants/cost/article-3.jpg"
                    alt="Patient meeting a staff member in the dental office"
                    width={1060}
                    height={597}
                />
                <h2>
                    How We Make <strong>Dental Implants Affordable</strong>
                </h2>
                <p>
                    At Magic Smile Dental, we believe everyone deserves a beautiful, healthy smile,
                    so we offer various financing options to make dental implants more affordable.
                    From assistance with insurance claims to{' '}
                    <CLink to={getNavLink('insurance & financing')}>
                        third-party financing options
                    </CLink>
                    , we’re here to help you navigate the cost of dental implants.
                </p>
                <p>
                    With us, you can expect transparency about how much a tooth implant costs. We
                    will also help you protect your investment with ongoing maintenance and
                    treatments for{' '}
                    <CLink to={getNavLink('failing dental implants')}>
                        failing dental implants
                    </CLink>
                    . Affordable dental implants are within reach, and we’re committed to making
                    your journey to a new smile as smooth as possible!
                </p>
            </SingleArticle>

            <BottomBannerImplants />
        </Fragment>
    );
}
