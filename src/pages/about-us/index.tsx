import { AccordionItem } from '@/AccordionItem';
import { Accordion } from '@/AccordionPrimitive';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CenterIcon } from '@/CenterIcon';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '..';
export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="About Our Practice - Linden, NJ"
                title={
                    <h2>
                        <strong> We’re Changing </strong> the Way You Think About the Dentist
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/about-us/hero.jpg"
                        alt="Magic Smile Dental staff"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />

            <SingleArticle titleNextLine>
                <h2>
                    From Routine Checkups <strong> to Complex Procedures</strong>
                </h2>
                <p>
                    <i>Getting exceptional care from a dentist you trust shouldn’t be difficult.</i>{' '}
                    At Magic Smile Dental, our mission is to provide comprehensive treatment options
                    in a comfortable, inviting dental office. We offer comprehensive care under one
                    roof, ensuring we create the perfect solution no matter what your smile needs.
                </p>
                <p>
                    Whether you’re looking for{' '}
                    <CLink to={getNavLink('general dentistry')}>routine cleanings</CLink>,{' '}
                    <CLink to={getNavLink('cosmetic dentistry')}>cosmetic enhancements</CLink>,{' '}
                    <CLink to={getNavLink('full mouth reconstruction')}>
                        restorative treatments
                    </CLink>
                    , or <CLink to={getNavLink('oral surgery')}>advanced oral surgery</CLink>, our
                    experienced team is here to provide personalized care tailored to you. Our goal
                    is to provide seamless, efficient, high-quality dental solutions in a
                    comfortable, welcoming environment.
                </p>
                <p style={{ color: '#017fee', fontStyle: 'italic', fontWeight: 700 }}>
                    If you’re looking for a dentist near you in Linden, NJ, who can provide
                    everything your smile needs under one roof, you’ve come to the right place!
                </p>
            </SingleArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle alignBottom singleBg darkBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/about-us/1.jpg"
                            alt="Magic Smile Dental sign on the office wall"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                Why Choose <strong>Magic Smile Dental?</strong>
                            </h2>
                            <ul>
                                <li>State-of-the-art dental office with high-quality care</li>
                                <li>Comprehensive dentistry under one roof</li>
                                <li>Board-specialized oral surgeon on staff</li>
                                <li>We perform complex oral surgery cases</li>
                                <li>We are Invisalign® gold providers</li>
                                <li>Advanced technology</li>
                                <li>LANAP® laser treatment specialist</li>
                                <li>Long-term doctor-patient relationships</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/about-us/2.jpg"
                            alt="Three Magic Smile Dental doctors"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                Experienced Dentists, <strong>Dedicated to Your Comfort</strong>
                                Experience
                            </h2>
                            <p>
                                When it comes to choosing a dentist, experience matters. Magic Smile
                                Dental has served the Linden, NJ, community since 2007. Our team
                                includes a skilled and experienced oral surgeon and talented
                                practitioners with advanced training in various treatment options.
                            </p>
                            <p>
                                We also believe in helping everyone feel as confident as possible in
                                making informed decisions about their oral healthcare. We’ll always
                                take the time to explain your treatment needs and answer any
                                questions you may have in the language that is most comfortable for
                                you, including English, Spanish, Russian, Ukrainian, and Polish!
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <SingleArticle noBg>
                <h2>
                    Receive Better Results, Faster Procedures,{' '}
                    <strong>and More Affordable Treatment</strong>
                </h2>
                <p style={{ marginBottom: '40px' }}>
                    An exceptional dental office should offer the most advanced dental technology.
                    Our state-of-the-art equipment allows our dentists to perform procedures more
                    efficiently, reduce your time in the dental chair, and ensure precise, accurate
                    results every time. From diagnostics to minimally invasive laser therapies, our
                    cutting-edge dental office delivers a more comfortable experience for you and a
                    healthier, more beautiful smile.
                </p>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="iTero scanner">
                        <p>
                            The iTero scanner is a cutting-edge tool that creates 3D digital models
                            of your teeth, even replicating the color of your teeth and gums. This
                            technology eliminates the need for messy traditional molds, making the
                            process faster and more comfortable. With iTero, your dentist can design
                            custom treatments with incredible accuracy, ensuring the best possible
                            outcome for your dental care.
                        </p>
                    </AccordionItem>

                    <AccordionItem value="2" text="CBCT scanner">
                        <p>
                            Our CBCT scanner provides detailed, 3D images of your teeth, jaws, and
                            surrounding structures. This advanced imaging technology lets us
                            precisely diagnose and plan treatments, particularly for complex cases
                            like{' '}
                            <CLink to={getNavLink('all-on-x full mouth implants')}>
                                full mouth dental implants
                            </CLink>{' '}
                            and oral surgery. It ensures we can see every angle of your dental
                            anatomy, leading to more effective and tailored treatments.
                        </p>
                    </AccordionItem>

                    <AccordionItem value="3" text="LANAP laser">
                        <p>
                            The <CLink to={getNavLink('lanap laser periodontics')}>LANAP</CLink>{' '}
                            laser is an innovative tool for treating gum disease with minimal
                            discomfort. This technology uses laser light to target and remove
                            infected tissue while promoting healthy tissue regeneration. LANAP is
                            significantly less invasive than traditional gum surgery, resulting in
                            quicker healing times and a more comfortable and predictable process.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Digital X-rays">
                        <p>
                            Digital X-rays are a safer, faster way to get detailed images of your
                            teeth and bones. They use significantly less radiation than traditional
                            X-rays, making them safer for you and our staff. Digital X-rays provide
                            instant images to diagnose issues and begin treatment more quickly.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="5" text="3Shape Trios Intraoral Scanner">
                        <p>
                            The 3Shape Trios Intraoral Scanner is another advanced tool that allows
                            us to capture highly detailed images of your teeth and gums. It’s
                            perfect for designing{' '}
                            <CLink to={getNavLink('dental crowns & bridges')}>
                                crowns, bridges
                            </CLink>
                            , and other restorations with the highest level of accuracy. The result
                            is a more comfortable fit and a natural-looking appearance, enhancing
                            the quality of your dental work.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Experience<strong> Better Dentistry.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/about-us/banner.jpg"
                    alt="Three doctors discussing in the dental office"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
