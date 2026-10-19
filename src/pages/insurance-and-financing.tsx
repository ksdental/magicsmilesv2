import { AccordionItem } from '@/AccordionItem';
import { Accordion } from '@/AccordionPrimitive';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CLink } from '@/CLink';
import { ImgArticle, ImgArticleSection } from '@/ImgArticle';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import { VideoBox } from '@/VideoBox';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '.';
export default function Page() {
    return (
        <Fragment>
            <BasicHero
                heading="Dental Insurance and Financing"
                text="Implant Insurance & Financing - Linden, NJ"
                title={
                    <h2>
                        <strong>Affordable Dentistry,</strong>Exceptional Care
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/insurance/hero.jpg"
                        alt="Patient sitting in the dental office"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <BgArticle imgRight whiteBg big>
                <div>
                    <VideoBox
                        videoID="1013552050"
                        videoTitle="Several Ways To Go About Financing Your Dream Smile"
                    >
                        <StaticImage
                            src="../../assets/images/insurance/thumbnail.jpg"
                            alt="Doctor shaking hands with a patient"
                            width={860}
                            height={575}
                        />
                    </VideoBox>
                    <BgArticleBox>
                        <h2>
                            We’re committed to High-Quality Treatment{' '}
                            <strong>without the Heavy Cost</strong>
                        </h2>

                        <p>
                            Quality dental care is essential for your overall well-being. However,
                            we understand that finances can be a significant obstacle to giving your
                            smile the attention it deserves. At Magic Smile Dental, we’re committed
                            to improving access to affordable dentistry in Linden, NJ,{' '}
                            <i>
                                without compromising the quality of your experience or your outcome.
                            </i>
                        </p>
                        <p>
                            To achieve that goal, we’ve equipped our practice with{' '}
                            <CLink to={getNavLink('about us')}>
                                state-of-the-art diagnostic and design technology
                            </CLink>{' '}
                            to provide precision treatments and eliminate the guesswork. Our team
                            continuously pursues advanced training in treatments most dentists can’t
                            offer, such as{' '}
                            <CLink to={getNavLink('dental implants')}>dental implant surgery</CLink>
                            and <CLink to={getNavLink('endodontics')}>endodontics</CLink>, so you
                            can get comprehensive care without the added expense of finding a
                            specialist.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle darkBg dark>
                <h2>
                    Our <strong>Flexible Payment Options</strong>
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Cash, Checks, and Credit Cards" dark>
                        <p>
                            We want your payment process to be as comfortable as the rest of your
                            care with us. We offer several flexible payment options for
                            out-of-pocket expenses that aren’t covered by other dental financing
                            options. We accept cash, checks, and most major credit cards. In many
                            cases, we can split your fee between payment methods.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="Dental Insurance" dark>
                        <p>
                            Our financial coordinator will work with your provider to submit claims
                            on your behalf and provide any documentation that will help maximize
                            your benefits. Even if we’re not in-network with your provider, we’re
                            happy to do what we can to help you access any out-of-network benefits
                            you’re entitled to. We are in-network with the following providers:
                        </p>
                        <p style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                            Aetna
                            <br />
                            Delta Dental
                            <br />
                            MetLife
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <ImgArticleSection>
                <h2>
                    Third-Party <strong>Dental Financing Solutions</strong>
                </h2>
                <ImgArticle
                    number="1"
                    image={
                        <StaticImage
                            src="../../assets/images/insurance/sunbit.webp"
                            alt="Sunbit financing logo"
                            layout="fullWidth"
                        />
                    }
                >
                    <div>
                        <h3>Sunbit</h3>
                        <p>
                            We accept Sunbit as a financing option at Magic Smile Dental. If
                            you’re considering financing for your dental care, ask our team about
                            using Sunbit for your treatment. We can help you find out where to
                            begin and what information to review before you apply. Visit{' '}
                            <CLink to="https://sunbit.com/">sunbit.com</CLink>{' '}
                            for more information. Financing is subject to approval; review the
                            terms offered to you before making a decision.
                        </p>
                    </div>
                </ImgArticle>
                <ImgArticle
                    imgRight
                    number="2"
                    image={
                        <StaticImage
                            src="../../assets/images/insurance/2.jpg"
                            alt="CareCredit logo"
                            layout="fullWidth"
                        />
                    }
                >
                    <div>
                        <h3>CareCredit</h3>
                        <p>
                            CareCredit dental financing covers almost any treatment, including{' '}
                            <CLink to={getNavLink('cosmetic dentistry')}>cosmetic dentistry</CLink>{' '}
                            and <CLink to={getNavLink('dental implants')}>dental implants</CLink>.
                            You can get an instant credit decision without impacting your credit
                            score with applications online or by phone.
                        </p>
                        <p>
                            Interest-free short-term and affordable long-term plans make it easy to
                            secure affordable dental financing. Visit{' '}
                            <CLink to="https://www.carecredit.com/go/QRM669/">carecredit.com</CLink>{' '}
                            or call <CLink to="tel:+1-800-677-0718">(800) 677-0718</CLink> for more
                            information.
                        </p>
                    </div>
                </ImgArticle>
                <ImgArticle
                    number="3"
                    image={
                        <StaticImage
                            src="../../assets/images/insurance/alphaeon-credit.webp"
                            alt="Alphaeon Credit logo"
                            layout="fullWidth"
                            objectPosition="center"
                        />
                    }
                >
                    <div>
                        <h3>Alphaeon Credit</h3>
                        <p>
                            Alphaeon Credit is another financing option we accept at Magic Smile
                            Dental. Talk with our team if you’d like to explore using Alphaeon
                            Credit for your planned dental treatment. We’ll help you locate the
                            application information so you can review your options. Visit{' '}
                            <CLink to="https://www.alphaeoncredit.com/">alphaeoncredit.com</CLink>{' '}
                            for more information.
                        </p>
                        <p>
                            <strong>
                                Financing is subject to credit approval. Review all rates, fees,
                                and repayment terms before applying.
                            </strong>
                        </p>
                    </div>
                </ImgArticle>
            </ImgArticleSection>

            <BottomBannerConsult
                title={
                    <h2>
                        Give Your Smile the Best Possible Care
                        <strong> Without Breaking the Bank.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/insurance/banner.jpg"
                    alt="Patient standing in the dental office"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
