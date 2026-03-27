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
                tagline="Laser Gum Disease Treatment - Linden, NJ"
                title={
                    <h2>
                        <strong>Reverse Gum Disease Damage</strong>with LANAP Laser Therapy
                    </h2>
                }
                bottomText="The Benefits Of Laser Dentistry!"
                videoID="1013550813"
                videoTitle="The Benefits Of Laser Dentistry!"
                videoImage={
                    <StaticImage
                        src="../../../assets/images/periodontics/lanap-laser-periodontics/video-thumbnail.jpg"
                        alt="doctor treating a patient"
                        width={380}
                        height={272}
                    />
                }
                backgroundImage={
                    <StaticImage
                        src="../../../assets/images/periodontics/lanap-laser-periodontics/hero.jpg"
                        alt="teeth"
                        layout="fullWidth"
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
                    and LANAP laser gum disease treatment in Linden, NJ! This innovative procedure
                    targets and removes diseased tissue while promoting the regeneration of healthy
                    gum tissue, reversing the damage of periodontal disease and potentially saving
                    your smile.
                </p>
            </SingleArticle>

            {/* singleBg makes the background stick to the parent div to display behind both articles */}
            <div style={{ position: 'relative' }}>
                <BgArticle darkBg alignBottom singleBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/periodontics/lanap-laser-periodontics/article-1.jpg"
                            alt="lanap laser periodontics"
                            width={649}
                            height={675}
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>The Benefits</strong> of LANAP Gum Disease Treatment
                            </h2>
                            <ul>
                                <li>Minimally invasive; no need for scalpels or sutures</li>
                                <li>Less than 24 hours of downtime needed in most cases</li>
                                <li>
                                    Far more comfortable than surgical periodontal disease
                                    treatments
                                </li>
                                <li>
                                    Convenient care without coordinating with a periodontist in a
                                    specialty practice
                                </li>
                                <li>Faster recovery time compared to osseous surgery</li>
                                <li>
                                    Promotes regeneration of healthy gum and bone tissue naturally
                                </li>
                                <li>
                                    Proven effective treatment for even advanced periodontal disease
                                </li>
                                <li>More predictable than surgical options</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/periodontics/lanap-laser-periodontics/article-2.jpg"
                            alt="closeup teeth look"
                            width={649}
                            height={675}
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
                                LANAP laser gum disease treatment offers a modern alternative, using
                                laser technology to precisely target diseased tissue while
                                preserving healthy gums. This means less pain, quicker healing, and
                                a more predictable approach. The cost of LANAP can sometimes be
                                slightly higher than osseous surgery, but we offer{' '}
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
                    alt="doctor treating a patient"
                    width={1060}
                    height={597}
                />
                <h2>
                    What Is <strong>the LANAP Process?</strong>
                </h2>
                <p>
                    LANAP is a highly effective periodontal disease treatment that can restore your
                    oral health and protect your smile. It can be done in the comfort of a practice
                    you already know and love. The LANAP process at Magic Smile Dental begins with a
                    thorough evaluation to determine the extent of your gum disease. We will use a
                    specialized laser to remove bacteria and infected tissue while keeping healthy
                    tissue intact during the procedure. We will remove any debris left behind using
                    ultrasonic scalers that break up hardened tartar and flush out the gum pocket.
                    We’ll also adjust the bone to create the most favorable conditions for bone
                    regeneration.
                </p>
                <p>
                    Finally, we’ll apply the laser again at a setting that stimulates healthy cells
                    and creates a seal in the gums, reducing bleeding and speeding up the healing
                    process. After the procedure, our team will provide you with personalized care
                    instructions to ensure the best possible outcome. If you’ve already lost some
                    teeth to periodontal disease, we can also rebuild your smile with{' '}
                    <CLink to={getNavLink('dental implants')}>dental implants</CLink> once your gum
                    health has stabilized.
                </p>
            </SingleArticle>

            <BottomBanner
                title={
                    <h2>
                        <strong>Reverse Your Gum Disease</strong> with the Power of Modern
                        Technology!
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/periodontics/lanap-laser-periodontics/banner.jpg"
                    alt="woman smiling standing in magic smile dental office"
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
