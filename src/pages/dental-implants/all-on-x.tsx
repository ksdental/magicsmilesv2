import VideoHero from '@/VideoHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import poster from '@a/images/video-posters/edme-poster.jpg';
import video from '@a/video/edme.mp4';
import { SingleArticle } from '@/SingleArticle';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { AppointmentSection } from '@/AppointmentSection';
import { BottomBannerImplants } from '@/BottomBannerImplants';
import { PlainBtn } from '@/buttons';
import { scrollToSection } from '@/layout/Nav';
import { DialogArticle } from '@/DialogArticle';
import { DownloadForm } from '@/DownloadForm';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="Full Mouth Dental Implants - Linden, NJ"
                title={
                    <h2>
                        Achieve Dental Stability and Confidence
                        <strong> with Modern Solutions</strong>
                    </h2>
                }
                bottomText="I Was Worried I Would Be In Pain Indefinitely"
                videoID="1013552534"
                videoTitle="I Was Worried I Would Be In Pain Indefinitely"
                videoImage={
                    <StaticImage
                        src="../../../assets/images/dental-implants/all-on-x/video-thumbnail.jpg"
                        alt="Smiling patient"
                        width={380}
                        height={272}
                    />
                }
                centerVideo={video}
                centerVideoPoster={poster}
            />

            <SingleArticle firstImg noBg>
                <StaticImage
                    src="../../../assets/images/dental-implants/all-on-x/article-1.jpg"
                    alt="Dental implants illustration"
                    width={1060}
                    height={597}
                />
                <h2>
                    What is<strong> All-On-X?</strong>
                </h2>
                <p>
                    Living with missing teeth can create numerous challenges, affecting both the
                    appearance of your smile and its functionality. A complete smile is essential
                    for effective chewing and clear speech, and missing teeth can lead to a loss of
                    confidence in social situations. Fortunately, full mouth dental implants offer a
                    modern and comprehensive solution to the problems associated with missing teeth.
                </p>
                <p>
                    All-on-X full mouth dental implants are designed to replace an entire arch of
                    teeth using four or more strategically placed implants. This treatment offers a
                    permanent solution for patients who have lost most or all their teeth, providing
                    a secure and stable foundation for complete prosthetic teeth. Unlike traditional
                    dentures, all-on-X implants are fixed in place, allowing for greater comfort,
                    improved function, and a natural-looking smile.
                </p>
            </SingleArticle>

            <BgArticle noBg>
                <div>
                    <StaticImage
                        src="../../../assets/images/dental-implants/all-on-x/article-2.jpg"
                        alt="Doctor meeting a patient"
                        layout="fullWidth"
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>Do I Qualify</strong> for Full Mouth Dental Implants?
                        </h2>
                        <p>
                            With the advanced surgical techniques and state-of-the-art technology at
                            Magic Smile Dental, virtually all patients with missing or failing teeth
                            can benefit from full mouth dental implants. However, some factors could
                            compromise your outcome.
                        </p>
                        <p>
                            Ideal candidates have sufficient bone density to support the implant
                            posts, and overall, good oral health is essential. Whether you’ve lost
                            teeth due to injury, decay, or gum disease, full arch dental implants
                            could be the solution to restore your smile. A thorough dental health
                            evaluation is the best way to determine your eligibility and create a
                            personalized treatment plan.
                        </p>
                        <PlainBtn
                            onClick={() => scrollToSection('#footer-cta')}
                            className="bg-article-cta"
                        >
                            am i a candidate?
                        </PlainBtn>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle firstImg noBg>
                <StaticImage
                    src="../../../assets/images/dental-implants/all-on-x/article-3.jpg"
                    alt="patient at a dental clinic"
                    width={1060}
                    height={597}
                />
                <h2>
                    Putting Gold Standard Tooth Replacements<strong> Within Your Budget</strong>
                </h2>
                <p>
                    You deserve a complete set of teeth to keep up with your lifestyle. However, we
                    understand that cost is a significant consideration for full mouth dental
                    implants.
                </p>
                <p>
                    To put a better quality of life within reach for as many people as possible, we
                    offer flexible{' '}
                    <CLink to={getNavLink('insurance & financing')}>financing options</CLink> to
                    make full arch dental implants more affordable. Additionally, some insurance
                    plans may cover a portion of the procedure. To help you navigate the financial
                    aspect, we’ll work with you to explore all available options and create a plan
                    that fits your budget.
                </p>
            </SingleArticle>

            <DialogArticle
                dialogContent={
                    <DownloadForm downloadLink="https://lindennjdentist.com/5-mistakes-to-avoid.pdf" />
                }
                image={
                    <StaticImage
                        src="../../../assets/images/pdf.png"
                        layout="fullWidth"
                        alt="pdf"
                    />
                }
                btnText="download pdf"
            >
                <h2>
                    <strong>Top 5 Mistakes </strong>People Make With Dental Implants
                </h2>
                <p>
                    Do you have all the information you need to make the right decisions about
                    dental implants? Don’t make any of these five common mistakes. Our exclusive
                    checklist will steer you in the right direction.
                </p>
            </DialogArticle>

            <AppointmentSection image />

            <BottomBannerImplants />
        </Fragment>
    );
}
