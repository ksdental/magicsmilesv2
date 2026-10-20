import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBanner } from '@/BottomBanner';
import { CenterIcon } from '@/CenterIcon';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import VideoHero from '@/VideoHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                heading="LANAP Laser Gum Treatment in Linden, NJ"
                tagline="Laser Gum Disease Treatment - Linden, NJ"
                title={
                    <h2>
                        <strong>Gum Disease Treatment</strong>with LANAP Laser Therapy
                    </h2>
                }
                bottomText="The Benefits Of Laser Dentistry!"
                videoID="1013550813"
                videoTitle="The Benefits Of Laser Dentistry!"
                videoImage={
                    <StaticImage
                        src="../../../assets/images/periodontics/lanap-laser-periodontics/video-thumbnail.jpg"
                        alt="Doctor treating a patient"
                        width={380}
                        height={272}
                    />
                }
                backgroundImage={
                    <StaticImage
                        src="../../../assets/images/periodontics/lanap-laser-periodontics/hero.jpg"
                        alt="Close-up of healthy teeth"
                        layout="fullWidth"
                        loading="eager"
                        className="backgroundImage"
                    />
                }
            />
            <SingleArticle titleNextLine>
                <h2>
                    Laser Gum Treatment <strong>Offers Gentle Solutions</strong>
                </h2>
                <p>
                    If you’re struggling with gum disease, you’re not alone—the CDC estimates about
                    half of the adults in the US have some form of gum disease. Symptoms like
                    bleeding gums, bad breath, and tooth sensitivity can significantly impact your
                    quality of life. Without treatment, gum disease can progress and cause permanent
                    damage to the ligaments and bone sockets that support your teeth.
                </p>
                <p>
                    At Magic Smile Dental, we help with early{' '}
                    <CLink to={getNavLink('general dentistry')}>gingivitis treatment options</CLink>{' '}
                    and LANAP laser gum disease treatment in Linden, NJ. Ask our doctors about your
                    treatment options.
                </p>
            </SingleArticle>

            {/* singleBg makes the background stick to the parent div to display behind both articles */}
            <div style={{ position: 'relative' }}>
                <BgArticle darkBg alignBottom singleBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/periodontics/lanap-laser-periodontics/article-1.jpg"
                            alt="LANAP laser periodontics treatment"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>Questions to Ask</strong> About LANAP Gum Disease Treatment
                            </h2>
                            <ul>
                                <li>Is LANAP suitable for my gum disease?</li>
                                <li>What will the procedure involve?</li>
                                <li>How will comfort be managed?</li>
                                <li>How much downtime should I plan for?</li>
                                <li>What should I expect during recovery?</li>
                                <li>What outcomes are realistic for my condition?</li>
                                <li>What alternatives should I consider?</li>
                                <li>What ongoing periodontal care will I need?</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/periodontics/lanap-laser-periodontics/article-2.jpg"
                            alt="Close-up view of teeth and gums"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                Traditional Surgery<strong> Vs. Laser Gum Surgery</strong>
                            </h2>
                            <p>
                                Our practice is equipped with the latest technology to provide you
                                with the highest standard of care right here in-house.Gum disease
                                surgery often requires cutting and stitching, which can lead to a
                                longer and more uncomfortable recovery. While it’s an effective
                                periodontitis treatment, many patients are hesitant due to how
                                invasive it is and how much time recovery takes.
                            </p>

                            <p>
                                LANAP laser gum disease treatment offers a modern alternative, using laser technology to treat diseased gum tissue. Recovery and treatment outcomes vary from
                                person to person. The cost of LANAP can sometimes be slightly higher
                                than osseous surgery, but we offer{' '}
                                <CLink to={getNavLink('Insurance & Financing')}>
                                    flexible financing options
                                </CLink>{' '}
                                to make it affordable.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <SingleArticle firstImg noBg>
                <StaticImage
                    src="../../../assets/images/periodontics/lanap-laser-periodontics/single-article.jpg"
                    alt="Doctor treating a patient"
                    width={1060}
                    height={597}
                />
                <h2>
                    What Is <strong>the LANAP Process?</strong>
                </h2>
                <p>
                    LANAP is a periodontal disease treatment that aims to restore your oral health and protect your smile. It can be done in the comfort of a practice
                    you already know and love. The LANAP process at Magic Smile Dental begins with a
                    thorough evaluation to determine the extent of your gum disease. We will use a
                    specialized laser to remove bacteria and infected tissue while keeping healthy
                    tissue intact during the procedure. We will remove any debris left behind using
                    ultrasonic scalers that break up hardened tartar and flush out the gum pocket.
                </p>
                <p>
                    After the procedure, our team will provide you with personalized care
                    instructions. If you’ve already lost some teeth to periodontal disease, we can
                    also rebuild your smile with{' '}
                    <CLink to={getNavLink('dental implants')}>dental implants</CLink> once your gum
                    health has stabilized.
                </p>
            </SingleArticle>

            <BottomBanner
                title={
                    <h2>
                        <strong>Explore Gum Disease Treatment</strong> with Modern Technology
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/periodontics/lanap-laser-periodontics/banner.jpg"
                    alt="Woman smiling inside the Magic Smile Dental office"
                    width={405}
                    height={271}
                />
                <iframe
                    src="https://api.leadconnectorhq.com/widget/survey/39fxd7Y47XhKUkhjDmv9"
                    title="V1 Periodontal Eval - General Survey"
                ></iframe>
            </BottomBanner>
        </Fragment>
    );
}
