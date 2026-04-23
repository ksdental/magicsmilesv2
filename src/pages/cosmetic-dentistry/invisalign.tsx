import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { SingleArticle } from '@/SingleArticle';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { CenterIcon } from '@/CenterIcon';
import { getNavLink } from '@/layout/NavLinks';
import { CLink } from '@/CLink';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { Accordion } from '@/AccordionPrimitive';
import { AccordionItem } from '@/AccordionItem';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Invisalign® Clear Aligners - Linden, NJ"
                title={
                    <h2>
                        <strong>Teeth Straightening </strong> for a Healthier, More Beautiful Smile
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/invisalign/hero.jpg"
                        alt="Person holding Invisalign clear aligners"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <SingleArticle titleNextLine>
                <h2>
                    <strong>Comfortable, Convenient,</strong> and Nearly Invisible Treatment
                </h2>
                <p>
                    Crooked teeth can affect your self-confidence but are more than a nuisance.
                    Misalignments can cause uneven pressure in your bite, damaging your teeth and
                    even causing problems with your jaw joints.
                </p>

                <p>
                    Invisalign® clear aligners offer a discreet and effective solution to help you
                    achieve a straight smile without the need for traditional braces. These clear
                    aligners are custom-made to fit your teeth and gradually shift them into the
                    correct position. With invisible aligners from Magic Smile Dental, you can enjoy
                    discreet orthodontics in Linden, NJ, seamlessly fitting into your lifestyle!
                </p>
            </SingleArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle alignBottom singleBg darkBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/invisalign//1.jpg"
                            alt="Person wearing Invisalign clear aligners"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>What Are the Benefits</strong> of Invisalign?
                            </h2>
                            <ul>
                                <li>The system uses clear aligners most people won’t notice</li>
                                <li>
                                    You’ll be able to remove your trays to eat, drink, brush, and
                                    floss
                                </li>
                                <li>Custom-made for a comfortable fit and effective results</li>
                                <li>Fewer office visits compared to traditional braces</li>
                                <li>Faster results than braces in many cases</li>
                                <li>
                                    Effective for a wide range of issues like crowding, gaps, and
                                    bite issues
                                </li>
                                <li>
                                    Ongoing monitoring with our team to ensure the best possible
                                    result
                                </li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/invisalign/2.jpg"
                            alt="Invisalign clear aligners with packaging"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                How Does the <strong>Invisalign Process Work?</strong>
                            </h2>
                            <p>
                                Your Invisalign treatment begins with a consultation at Magic Smile
                                Dental, where we’ll take digital scans of your teeth to create a
                                personalized treatment plan for your unique smile. Once your custom
                                Invisalign trays are ready, you’ll wear them for 20-22 hours a day,
                                only removing them to eat, drink, brush, and floss.
                            </p>
                            <p>
                                Every 1-2 weeks, you’ll switch to a new set of clear aligners as
                                your teeth gradually shift into place. Regular check-ins with our
                                team will ensure your treatment progresses smoothly and adjust your
                                plan if needed. By staying consistent with your aligners, you’ll
                                enjoy a straighter, more beautiful smile before you know it!
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <SingleArticle lightBg titleNextLine>
                <h2>
                    <strong> A Versatile Approach</strong> for All the Smiles in Your Family
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Invisalign for Kids">
                        <p>
                            Invisalign is an excellent option for children who need early
                            orthodontic intervention. These clear aligners are designed to guide
                            growing teeth into the correct position, helping to prevent more complex
                            orthodontic issues later on.
                        </p>
                        <p>
                            Invisalign for kids is comfortable and easy to wear, allowing them to
                            maintain regular oral hygiene routines. The nearly invisible aligners
                            also help kids feel confident during treatment.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="Invisalign for Teens">
                        <p>
                            Invisalign for teens offers a modern alternative to metal braces,
                            providing a discreet way to achieve a straight smile. These clear
                            aligners are perfect for busy teens who want to enjoy their favorite
                            activities without the hassle of traditional braces.
                        </p>
                        <p>
                            With Invisalign, teens can eat their favorite foods, play sports, and
                            smile confidently, knowing their treatment is barely noticeable. Magic
                            Smile Dental ensures a customized treatment plan that fits seamlessly
                            into your teen’s life.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="3" text="Invisalign for Adults">
                        <p>
                            Invisalign for adults offers a discreet and convenient way to straighten
                            teeth without traditional braces. These clear aligners are perfect for
                            busy professionals, parents, and anyone seeking a more subtle
                            orthodontic solution.
                        </p>
                        <p>
                            At Magic Smile Dental, we create personalized Invisalign treatment plans
                            tailored to each adult patient’s unique needs. With this comfortable and
                            effective option, it’s never too late to achieve the smile you’ve always
                            wanted.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BgArticle centerImage noBg imgRight>
                <div>
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/invisalign/3.png"
                        alt="Patient with two doctors"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            We’re an <strong> Invisalign Gold Provider</strong>
                        </h2>
                        <p>
                            As part of <CLink to={getNavLink('about us')}>our mission</CLink> to
                            give all the smiles in your family the best possible care, we’re proud
                            to be an Invisalign Gold Provider. This recognition reflects our
                            commitment to delivering exceptional orthodontic care.
                        </p>
                        <p>
                            Our team has successfully treated numerous patients with Invisalign,
                            helping them achieve the smiles they deserve. We also offer{' '}
                            <CLink to={getNavLink('insurance & financing')}>
                                flexible financing options
                            </CLink>{' '}
                            to make affordable orthodontics affordable. As with every treatment, you
                            can ask us to guide you through every step of your Invisalign journey
                            with professionalism and care.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Straighten Your Teeth <strong>Without Disrupting Your Lifestyle.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/invisalign/4.jpg"
                    alt="Patient in the dental clinic"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
