import { AccordionItem } from '@/AccordionItem';
import { Accordion } from '@/AccordionPrimitive';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import VideoHero from '@/VideoHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '.';

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="Oral Surgery - Linden, NJ"
                title={
                    <h2>
                        Comprehensive Treatment for <strong>All Aspects of Your Care</strong>
                    </h2>
                }
                bottomText="Why You Should Consider A Multi Specialist Practice"
                videoID="1013551392"
                videoTitle="Why You Should Consider A Multi Specialist Practice"
                videoImage={
                    <StaticImage
                        src="../../assets/images/oral-dentistry/thumbnail.jpg"
                        alt="Three doctors having a discussion"
                        width={380}
                        height={272}
                    />
                }
                backgroundImage={
                    <StaticImage
                        src="../../assets/images/oral-dentistry/hero.jpg"
                        alt="Teeth anatomy displayed on a screen"
                        layout="fullWidth"
                        loading="eager"
                        className="backgroundImage"
                    />
                }
            />

            <BgArticle centerImage whiteBg imgRight>
                <div>
                    <StaticImage
                        src="../../assets/images/oral-dentistry/1.png"
                        alt="Doctor holding a mirror in front of a patient"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            Rebuild Your Smile with <strong>Compassionate Oral Surgery</strong>
                        </h2>
                        <p>
                            Oral surgery may not be something most people look forward to, but it
                            can be an essential part of rebuilding your comfort and confidence after
                            dental health problems. Whether you’re experiencing pain, difficulty
                            chewing, or dissatisfaction with the appearance of your smile, oral
                            surgery may be the solution you need.
                        </p>
                        <p>
                            At Magic Smile Dental, we offer a range of solutions designed to correct
                            these issues, alleviate pain, and restore your oral health. Our team
                            provides compassionate care and effective oral surgery in Linden, NJ, to
                            help you regain your smile and confidence!
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle dark>
                <h2>
                    Our Customized
                    <strong> Oral Surgery Procedures </strong>
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Wisdom Tooth Extractions" dark>
                        <p>
                            Wisdom teeth can create serious oral health problems, even for people
                            who have had perfect teeth their whole lives. They frequently develop
                            incorrectly, meaning they can get stuck in the jawbone and cause cysts,
                            damage the roots of the neighboring teeth, and even lead to severe
                            infections.
                        </p>
                        <p>
                            Even when wisdom teeth can erupt properly, they add significant pressure
                            that can cause your other teeth to shift, leading to{' '}
                            <CLink to={getNavLink('invisalign')}>bite problems and crowding</CLink>.
                            Timely wisdom teeth extractions can prevent these problems and improve
                            oral health over the long term.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="Tooth Extractions" dark>
                        <p>
                            We always work to save teeth whenever possible. However, there are
                            situations when teeth become unsalvageable, such as cracks that have
                            damaged the root of a tooth or decay that has caused too much damage.
                        </p>
                        <p>
                            In these cases, tooth extractions can prevent serious infections,{' '}
                            <CLink to={getNavLink('endodontics')}>abscesses</CLink>, pain, and
                            further damage to the surrounding teeth. After your tooth extraction, we
                            can rebuild your entire smile with a range of effective and attractive
                            tooth replacement options.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="3" text="Bone Grafting" dark>
                        <p>
                            Bone grafting is a procedure that helps rebuild and strengthen the
                            jawbone, especially in preparation for dental implants. This treatment
                            is essential if you’ve experienced bone loss due to missing teeth or
                            periodontal disease.
                        </p>
                        <p>
                            Bone grafting is also a great way to stabilize a bone socket after a
                            tooth extraction. Restoring the bone ensures a solid foundation for{' '}
                            <CLink to={getNavLink('full mouth reconsutrction')}>
                                future dental work
                            </CLink>
                            .
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Sinus Lift" dark>
                        <p>
                            The maxillary sinus sits close to the roots of the upper teeth,
                            sometimes leaving very little bone between and making it impossible to
                            place dental implants.
                        </p>
                        <p>
                            A sinus lift is a specialized procedure that increases bone height in
                            the upper jaw, making it possible to place dental implants. This oral
                            surgery option is particularly beneficial for those who have experienced
                            bone loss in the molar area.
                        </p>
                    </AccordionItem>

                    <AccordionItem value="5" text="Ridge Augmentation" dark>
                        <p>
                            Ridge augmentation can restore the natural contour of the gums and
                            jawline after tooth loss or trauma. This procedure can improve your
                            smile’s appearance and function, making it an important step in the
                            dental implant process. Ridge augmentation helps create a more natural
                            and aesthetically pleasing result.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="6" text="Dental Implant Surgery" dark>
                        <p>
                            <CLink to={getNavLink('dental implants')}>Dental implant surgery</CLink>{' '}
                            involves placing a titanium post into the jawbone to provide a stable
                            foundation for a replacement tooth or bridge. Over time, the implant
                            integrates with the bone through osseointegration, providing a secure
                            base for the final restoration.
                        </p>
                        <p>
                            This procedure is commonly used to replace missing teeth, improve
                            function, and restore aesthetics while preserving surrounding natural
                            teeth.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BgArticle noBg imgRight big>
                <div>
                    <StaticImage
                        src="../../assets/images/oral-dentistry/2.jpg"
                        alt="Doctor treating a patient"
                        width={860}
                        height={430}
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>Advanced Technology</strong> for Superior Oral Surgeries
                        </h2>
                        <p>
                            At Magic Smile Dental, we are dedicated to delivering comprehensive
                            patient care, ensuring everyone receives personalized treatment tailored
                            to their unique needs. We are committed to staying at the forefront of
                            dental advancements, utilizing the most state-of-the-art technology for
                            oral surgery treatments.
                        </p>
                        <p>
                            We aim to provide precise, efficient, and comfortable patient care using
                            advanced imaging systems and cutting-edge surgical techniques. By
                            continually refining our skills and integrating innovative solutions, we
                            ensure that qualifying patients receive the highest standard of oral
                            surgery, promoting optimal outcomes and long-term oral health!
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Trust Your Smile to a Team <strong>with Comprehensive Expertise.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/oral-dentistry/banner.jpg"
                    alt="Smiling patient"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
