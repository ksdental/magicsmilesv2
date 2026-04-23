import VideoHero from '@/VideoHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import video from '@a/video/maria.mp4';
import poster from '@a/images/dental-implants/poster.jpg';
import { SingleArticle } from '@/SingleArticle';
import { BigArrowBtn } from '@/buttons';
import { CLink } from '@/CLink';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { CenterIcon } from '@/CenterIcon';
import styled from '@emotion/styled';
import { titleLine } from '@/layout/styles/classes';
import { CircledDigit } from '@/CircledDigit';
import { getNavLink } from '@/layout/NavLinks';
import { Cta } from '@/Cta';
import { Accordion } from '@radix-ui/react-accordion';
import { AccordionItem } from '@/AccordionItem';
import { Stories } from '@/Stories';
import { AppointmentSection } from '@/AppointmentSection';
import { BottomBannerImplants } from '@/BottomBannerImplants';
import { scrollToSection } from '@/layout/Nav';
export { Head } from '..';

const Options = styled.section`
    padding: 60px 25px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    text-align: center;

    > h2 {
        ${titleLine};
        color: ${({ theme }) => theme.colors.darkerBlue};
        margin: 0 auto 30px;
    }

    > div {
        display: grid;
        gap: 40px 30px;
        grid-template-columns: 1fr;

        > div {
            > h3 {
                margin: 20px 0 10px;
                text-transform: capitalize;
                font-weight: 700;
                font-size: 1rem;
            }

            > p {
                :not(:first-of-type) {
                    margin: 0;
                }

                > a {
                    font-weight: 700;
                }

                & + p {
                    margin-top: 1em !important;
                }
            }
        }
    }

    @media (min-width: 768px) {
        padding: 60px 50px;

        > div {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 1024px) {
        padding: 75px 70px;

        > h2 {
            margin-bottom: 50px;

            > strong {
                display: block;
            }
        }
    }

    @media (min-width: 1200px) {
        > div {
            gap: 40px;
            max-width: 1300px;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`;

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="Dental Implants - Linden, NJ"
                title={
                    <h2>
                        <strong>The Permanent Solution</strong>To Tooth Loss
                    </h2>
                }
                bottomText="I Never Thought My Confidence Was Ever Going To Be Restored"
                videoID="1013552861"
                videoTitle="I Never Thought My Confidence Was Ever Going To Be Restored"
                videoImage={
                    <StaticImage
                        src="../../../assets/images/dental-implants/video-thumbnail.jpg"
                        alt="Smiling patient"
                        width={380}
                        height={272}
                    />
                }
                centerVideo={video}
                centerVideoPoster={poster}
            />
            <SingleArticle>
                <h2>
                    <strong>Dental Implants</strong> Solution
                </h2>
                <p>
                    Missing teeth can make it difficult to live your life to the fullest. Loose,
                    damaged, missing, and unsalvageable teeth can make it hard to speak clearly, eat
                    your favorite foods, or smile confidently.
                </p>

                <p>
                    You can give your smile a fresh start with dental implants. A dental implant
                    consists of three parts: a titanium post that acts as the root of a missing
                    tooth, an abutment that connects the post to a restoration or prosthesis, and
                    the restoration, which is the visible part of the tooth. Magic Smile Dental is
                    proud to offer affordable dental implants in Linden, NJ, so you can restore your
                    quality of life with a beautiful smile that works.
                </p>
                <BigArrowBtn onClick={() => scrollToSection('#footer-cta')}>
                    get pricing
                </BigArrowBtn>
            </SingleArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle darkBg alignBottom singleBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/article-1.jpg"
                            alt="Dental implant illustration"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                What Are <strong>Dental Implants?</strong>
                            </h2>
                            <p>
                                <strong>A dental implant</strong> is a small titanium screw placed
                                in the jawbone to replace a missing tooth root. Once it heals, a
                                strong and natural-looking zirconia crown is attached, creating a
                                secure, long-lasting tooth that looks and feels just like a real
                                one.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/article-2.jpg"
                            alt="Happy patient"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                What Can Dental Implants <strong>Do for Your Smile?</strong>
                            </h2>
                            <ul>
                                <li>Reestablishes ability to chew properly</li>
                                <li>Restores cosmetic appearance</li>
                                <li>Preserves health of bone and gums</li>
                                <li>Helps keep adjacent teeth stable</li>
                                <li>Prevents facial changes caused by bone loss</li>
                                <li>Improves quality of life</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <SingleArticle firstImg noBg>
                <StaticImage
                    src="../../../assets/images/dental-implants/single-article.jpg"
                    alt="Dental implants illustration"
                    width={1060}
                    height={597}
                />
                <h2>
                    <strong>Permanent Full Arch Dental Implants </strong>vs. Removable Options
                </h2>
                <p>
                    Although dentures are a common choice for restoring smiles, they have several
                    disadvantages. They often rely on adhesives and suction for stability, which can
                    be messy and unreliable. Over time, dentures may contribute to jawbone
                    deterioration, leading to ill-fitting prosthetics and changes in facial
                    structure, such as a sunken appearance.
                </p>
                <p>
                    Full mouth dental implants offer a superior solution by integrating directly
                    with the jawbone, providing a stable, long-lasting alternative that prevents
                    bone loss and maintains the natural shape of your face without the worry of
                    shifting or falling out.
                </p>
            </SingleArticle>

            <Options>
                <h2>
                    <strong>Dental Implant Options </strong>Tailored to Your Needs{' '}
                </h2>
                <div>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/option-1.jpg"
                            alt="Dental implant illustration"
                            width={800}
                        />
                        <CircledDigit>1</CircledDigit>
                        <h3>Single Implants</h3>
                        <p>
                            Compared to other options, dental implants in Linden, NJ, offer a
                            structure that most closely mimics natural teeth. The implant post
                            replaces the missing tooth root, while the dental crown replaces the
                            part of your tooth visible above the gum line. Implants restore the look
                            and function of your smile and bite while enhancing oral health.
                        </p>
                    </div>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/option-2.jpg"
                            alt="dental bridges"
                            width={800}
                        />
                        <CircledDigit>2</CircledDigit>
                        <h3>Dental bridges</h3>
                        <p>
                            With{' '}
                            <CLink to={getNavLink('Dental Crowns & Bridges')}>
                                traditional bridges
                            </CLink>
                            , two healthy teeth must be modified and crowned to support the false
                            tooth. This can place stress on neighboring teeth and compromise
                            existing bone structure. Implant-supported bridges look and function
                            like natural teeth, reduce the risk of gum and bone recession, and
                            lessen the risk of bacteria growth and decay around the bridge.
                        </p>
                    </div>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/option-3.jpg"
                            alt="implant supported dentures"
                            width={800}
                        />
                        <CircledDigit>3</CircledDigit>
                        <h3>implant supported dentures</h3>
                        <p>
                            An implant-supported denture attaches directly to your jawbone with
                            dental implants instead of resting on your gums. The prosthesis can be
                            designed as removable or fixed. The latter offers the most stability and
                            function while eliminating the common daily issues associated with
                            traditional dentures, bone loss, and undesirable facial changes down the
                            road.
                        </p>
                    </div>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/option-4.jpg"
                            alt="all on x implants"
                            width={800}
                        />
                        <CircledDigit>4</CircledDigit>
                        <h3>All-on-X</h3>
                        <p>
                            <CLink to={getNavLink('All-On-X Full Mouth Implants')}>
                                All-On-X dental implants
                            </CLink>{' '}
                            are an excellent solution for patients who need to replace an entire row
                            of teeth. The procedure involves placing four to six implants in the
                            jawbone to support a full arch of prosthetic teeth, offering a stable
                            and long-lasting alternative to dentures.
                        </p>
                        <p>
                            Unlike traditional dentures, full arch implants are fixed in place,
                            providing improved function, comfort, and a more natural appearance.
                            This treatment restores the aesthetics and function of your smile,
                            allowing patients to eat, speak, and smile confidently.
                        </p>
                    </div>
                </div>
            </Options>

            <Cta />

            <SingleArticle lightBg titleNextLine>
                <h2>
                    Our Personalized<strong> Dental Implant Process</strong>
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Consultation and Planning">
                        <p>
                            Your journey to a new smile begins with a comprehensive consultation.
                            During this visit, we will discuss your dental health history and any
                            concerns you may have, evaluate your oral health, and discuss your goals
                            for renewed oral health. From there, we’ll use state-of-the-art
                            diagnostic scans to create a personalized treatment plan that outlines
                            the steps to achieving your new smile.
                        </p>
                        <p>
                            If you need a single implant or implant bridge, we’ll design your
                            restoration to perfectly blend in with the rest of your natural teeth.
                            If full-mouth dental implants are right for you, we’ll target strategic
                            sites for your implant posts to hold your new prosthesis firmly in
                            place. We’ll work with you to coordinate a convenient plan and find{' '}
                            <CLink to={getNavLink('Insurance & Financing')}>
                                financing solutions
                            </CLink>{' '}
                            to create an affordable payment plan for your budget.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="The Procedure & Same-Day Teeth">
                        <p>
                            On the day of your surgery, we’ll make small incisions in the gums to
                            access the underlying bone and place your implant posts. If you need
                            other procedures like tooth extractions, we may be able to place your
                            implant posts in the same appointment to streamline your treatment
                            process.
                        </p>
                        <p>
                            Whenever possible, we’ll attach a temporary restoration the same day as
                            your surgery so you can immediately experience the benefits of a
                            complete smile!
                        </p>
                    </AccordionItem>
                    <AccordionItem value="3" text="Follow-Up Appointment">
                        <p>
                            We will conduct a follow-up appointment during your healing process.
                            During this appointment, we will check the surgery site and ensure
                            everything is healing well and there aren’t any complications. This
                            appointment also allows you to talk to us about any questions or
                            concerns.
                        </p>
                        <p>
                            We’ll also be able to make any necessary adjustments to your temporary
                            restoration. This is especially important for people who need full mouth
                            dental implants, so we can ensure your temporary bridge meets the
                            opposite arch correctly.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Healing and Final Restorations">
                        <p>
                            Over the next several months, your dental implant posts will fuse with
                            the supporting bone in osseointegration. As you heal, it’s important
                            that you follow our instructions for caring for your implants to avoid
                            complications that could compromise your outcome.
                        </p>
                        <p>
                            Once your implants have had enough time to heal, you’ll return to our
                            office so that we can test their strength and create updated scans.
                            We’ll then use these to craft your customized final restorations. When
                            your final prosthesis is ready, we’ll test it for fit and aesthetics
                            before permanently placing your beautiful new smile!
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <Stories />
            <AppointmentSection image />

            <BottomBannerImplants />
        </Fragment>
    );
}
