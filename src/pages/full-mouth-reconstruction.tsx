import VideoHero from '@/VideoHero';
import { Fragment } from 'react';
import video from '@a/video/alex.mp4';
import poster from '@a/images/video-posters/alex-poster.jpg';
import { SingleArticle } from '@/SingleArticle';
import { BigArrowBtn } from '@/buttons';
import { scrollToSection } from '@/layout/Nav';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { StaticImage } from 'gatsby-plugin-image';
import { Cta } from '@/Cta';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { Accordion } from '@/AccordionPrimitive';
import { AccordionItem } from '@/AccordionItem';
import { CenterIcon } from '@/CenterIcon';
import { BottomBannerVeneers } from '@/BottomBannerVeneers';
export { Head } from '.';
export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="Full Mouth Reconstruction - Linden, NJ"
                title={
                    <h2>
                        Rebuild Your Oral Health with
                        <strong>Complete Dental Reconstruction</strong>
                    </h2>
                }
                centerVideo={video}
                centerVideoPoster={poster}
            />

            <SingleArticle>
                <h2>
                    What Is
                    <strong> Full Mouth Reconstruction? </strong>
                </h2>
                <p>
                    Living with decayed, failing, or missing teeth can make everyday activities like
                    eating, speaking, and smiling challenging. It can also damage one’s
                    self-confidence and overall quality of life. If you’re experiencing pain,
                    discomfort, or embarrassment due to the state of your teeth, it might be time to
                    consider full mouth reconstruction in Linden, NJ. A full mouth reconstruction is
                    a comprehensive dental procedure that involves rebuilding or replacing all the
                    teeth in your mouth. This process combines various restorative and cosmetic
                    treatments to address decay, damage, and tooth loss.
                </p>
                <p>
                    Full mouth reconstruction not only improves the aesthetics of your smile but
                    also restores functionality, allowing you to eat, speak, and smile confidently.
                    By giving each tooth individual attention, we can craft a comprehensive plan to
                    address every oral health problem you’re facing. The result? A spectacular smile
                    that allows you to eat what you want comfortably so you can get back to living
                    life to the fullest!
                </p>
                <BigArrowBtn onClick={() => scrollToSection('#footer-cta')}>
                    get pricing
                </BigArrowBtn>
            </SingleArticle>

            <BgArticle darkBg imgRight centerImage>
                <div>
                    <StaticImage
                        src="../../assets/images/reconstruction/1.png"
                        alt="Doctor meeting a patient"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            Does Your Smile Need <strong>Full Mouth Reconstruction?</strong>
                        </h2>
                        <ul>
                            <li>Multiple decayed, damaged, or missing teeth</li>
                            <li>Worn down teeth from grinding (bruxism) or acid erosion</li>
                            <li>Many damaged teeth from trauma or sports injuries</li>
                            <li>
                                Persistent pain in the jaw, muscles, or teeth due to bite issues
                            </li>
                            <li>Previous dental work that needs replacement or improvement</li>
                            <li>Failing dental health from severe gum disease</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <Cta />

            <SingleArticle lightBg>
                <h2>
                    Our Comprehensive <strong>Dental Reconstruction Options</strong>
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Dental Crowns & Bridges">
                        <p>
                            <CLink to={getNavLink('dental crowns & bridges')}>
                                Dental crowns and bridges
                            </CLink>{' '}
                            restore damaged or missing teeth, providing strength and stability.
                            Crowns also cover and protect weakened teeth, replacing enamel lost to
                            decay, injury, or wear.
                        </p>
                        <p>
                            Bridges fill in gaps left by missing teeth, restoring your smile and
                            protecting the neighboring teeth from strain and shifting. Bridges are
                            anchored with crowns placed on stable natural teeth or dental implants.
                        </p>
                    </AccordionItem>

                    <AccordionItem value="2" text="Invisalign®">
                        <p>
                            It’s important to start with a solid foundation to ensure the best
                            results from your full mouth restoration process. When your teeth are
                            properly aligned, restorations and replacements can be designed based on
                            each tooth’s ideal position and proportions.
                        </p>
                        <p>
                            <CLink to={getNavLink('Invisalign® Clear Aligners')}>
                                Invisalign clear aligners
                            </CLink>{' '}
                            are a discreet way to straighten teeth and correct bite issues as part
                            of a full mouth reconstruction plan. This treatment is ideal for those
                            looking to improve their teeth’s alignment without traditional braces.
                        </p>
                    </AccordionItem>

                    <AccordionItem value="3" text="Dental Implants">
                        <p>
                            <CLink to={getNavLink('dental implants')}>Dental implants</CLink> are a
                            permanent solution for replacing missing teeth. They provide a
                            natural-looking and durable result. The process begins with placing a
                            titanium post into the jawbone, which acts as an artificial tooth root.
                        </p>
                        <p>
                            Over time, the implant fuses with the bone in osseointegration, ensuring
                            a strong foundation for the replacement tooth. Once healed, a
                            custom-made crown is attached to the implant, restoring function and
                            aesthetics to the patient’s smile.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Full & Partial Dentures">
                        <p>
                            If you’re not a candidate for dental implants, we can create attractive
                            removable prostheses to replace your missing teeth. A partial denture
                            replaces several missing teeth, frequently using your natural teeth for
                            stability.
                        </p>
                        <p>
                            Complete dentures replace all the teeth in an arch with lightweight
                            acrylic materials held in place with suction. While these are
                            cost-effective options, they are not considered permanent solutions like{' '}
                            <CLink to={getNavLink('all-on-x full mouth implants')}></CLink>full
                            mouth dental implants.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="5" text="Oral Surgery">
                        <p>
                            <CLink to={getNavLink('oral surgery')}>Oral surgery</CLink> may be
                            necessary for some instances, such as removing damaged teeth, rebuilding
                            healthy bone volume with bone grafts, or placing dental implants. Our
                            skilled team at Magic Smile Dental ensures that each procedure is cared
                            for and precise.
                        </p>
                        <p>
                            Our safe and effective pain control methods, minimally invasive
                            approach, and soothing atmosphere will ensure a seamless, comfortable
                            process.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BgArticle alignBottom noBg>
                <div>
                    <StaticImage
                        src="../../assets/images/reconstruction/2.jpg"
                        alt="Doctor showing information on a screen"
                        layout="fullWidth"
                    />
                    <BgArticleBox>
                        <h2>
                            What to Expect from the{' '}
                            <strong>Full Mouth Reconstruction Process</strong>
                        </h2>
                        <p>
                            At Magic Smile Dental, our full mouth reconstruction process begins with
                            a comprehensive evaluation of your oral health. We take the time to
                            understand your concerns, goals, and the condition of your teeth and
                            gums. From there, we will create a customized treatment plan that’s
                            tailored to your unique needs.
                        </p>
                        <p>
                            Your plan may include a combination of dental crowns, bridges, implants,
                            or other restorative procedures. Throughout the process, we work closely
                            with you to ensure that your full mouth restoration meets your
                            expectations and delivers a beautiful, functional smile you can be proud
                            to share with the world.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>
            <CenterIcon />

            <BgArticle alignTop imgRight noBg>
                <div>
                    <StaticImage
                        src="../../assets/images/reconstruction/3.jpg"
                        alt="A man smiling"
                        layout="fullWidth"
                    />
                    <BgArticleBox>
                        <h2>
                            How Can Dental Reconstruction{' '}
                            <strong>Improve Your Quality of Life?</strong>
                        </h2>
                        <ul>
                            <li>Restores the function and appearance of your teeth</li>
                            <li>Customizable treatment plans tailored to individual needs</li>
                            <li>
                                Allows you to eat a complete variety of your favorite foods in total
                                comfort
                            </li>
                            <li>Improves overall oral health and prevents further dental issues</li>
                            <li>Enhances self-confidence with a complete, beautiful smile</li>
                            <li>
                                Long-lasting results that improve your comfort and confidence for
                                years to come
                            </li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerVeneers />
        </Fragment>
    );
}
