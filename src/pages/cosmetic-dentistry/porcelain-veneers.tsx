import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { SingleArticle } from '@/SingleArticle';
import { BigArrowBtn } from '@/buttons';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { CenterIcon } from '@/CenterIcon';
import { Cta } from '@/Cta';
import { BottomBannerVeneers } from '@/BottomBannerVeneers';
import { scrollToSection } from '@/layout/Nav';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Porcelain Veneers - Linden, NJ"
                title={
                    <h2>
                        <strong>Elevate Your Smile’s Aesthetics</strong> with Porcelain Veneers
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/veneers/hero-veneers.jpg"
                        alt="Patient smiling"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <SingleArticle titleNextLine>
                <h2>
                    <strong>Transforming Smiles</strong> and Boosting Confidence
                </h2>
                <p>
                    Your smile plays a pivotal role in your self-confidence. If you find yourself
                    dissatisfied with how your smile looks, there’s no need to continue wishing for
                    a change. Among the array of cosmetic dentistry options available, veneers offer
                    an effective solution to enhance the appearance of your teeth in terms of shape
                    and color. Porcelain veneers are ultra-thin yet resilient shells that our
                    skilled cosmetic dentist can expertly apply to the front surface of your natural
                    teeth.
                </p>

                <p>
                    Each veneer is meticulously customized to harmonize seamlessly with your smile,
                    ensuring a cohesive look even when some of your teeth remain untouched. With
                    veneers, you can attain the radiant, uniform, and stunning smile you’ve always
                    envisioned. By choosing Magic Smile Dental in Linden, NJ for your dental veneer
                    treatment, you can access a competent dental team, top-quality materials,
                    cutting-edge equipment, and commitment to your comfort and satisfaction.
                </p>
                <BigArrowBtn onClick={() => scrollToSection('#footer-cta')}>
                    get pricing
                </BigArrowBtn>
            </SingleArticle>

            <BgArticle darkBg imgRight centerImage big>
                <div>
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/veneers/1.png"
                        alt="Patient meeting with a doctor"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>Who Is a Candidate</strong> for Porcelain Veneers?
                        </h2>
                        <ul>
                            <li>Minor crookedness or chips</li>
                            <li>Slightly misshapen teeth</li>
                            <li>Severe discoloration or stains</li>
                            <li>Teeth that are too small or large</li>
                            <li>Unwanted or uneven space</li>
                            <li>Worn-down enamel</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle alignBottom singleBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/veneers/2.jpg"
                            alt="Happy patient"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                Our Streamlined <strong>Veneer Process</strong>
                            </h2>
                            <p>
                                We will begin your dental veneer treatment with an in-depth
                                consultation. During this session, our team will meticulously assess
                                your teeth to determine whether veneers are your ideal solution.
                                Should you opt to move forward with veneers, the next phase begins.
                                We will delicately remove a thin layer of enamel from the front
                                surface of your teeth. Then, we will take impressions for the
                                tailored customization of your veneers to harmonize with your unique
                                smile.
                            </p>
                            <p>
                                Sometimes, temporary veneers may be placed while the permanent
                                versions are prepared. The final stage brings you to our office in
                                Linden, NJ to place your permanent porcelain veneers. Our top
                                priority is to ensure your veneers provide comfort, a natural
                                appearance, and alignment with your smile goals. We conduct a dry
                                run to ensure the precise positioning and then securely cement the
                                porcelain veneers to your teeth, culminating in a beautifully
                                enhanced smile.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/veneers/3.jpg"
                            alt="Doctor holding a mirror in front of a patient"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>The Benefits </strong> of Porcelain Veneers
                            </h2>
                            <ul>
                                <li>Enhanced smile aesthetics with natural-looking results</li>
                                <li>
                                    Correction of teeth imperfections such as stains, chips, or gaps
                                </li>
                                <li>Durable and long-lasting porcelain material</li>
                                <li>Minimal alteration of natural teeth structure</li>
                                <li>Stain-resistant properties for enduring brightness</li>
                                <li>Customized to blend seamlessly with your natural teeth</li>
                                <li>Boosted self-confidence and improved overall appearance</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <Cta />

            <SingleArticle firstImg noBg titleNextLine>
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/veneers/4.jpg"
                    alt="Patient in the dental clinic"
                    width={1060}
                    height={597}
                />
                <h2>
                    Enjoy Your Custom-Made Smile<strong> Without Breaking the Bank</strong>
                </h2>
                <p>
                    Affording porcelain veneers at Magic Smile Dental is easier than ever with our
                    flexible financing options. We understand that investing in your smile is
                    important, so we offer various financing plans to help spread the cost of veneer
                    treatment over manageable installments.
                </p>
                <p>
                    We work with various third-party financing companies to maximize your coverage
                    for cosmetic procedures like veneers. Our team is dedicated to assisting you in
                    finding a solution that fits your budget while ensuring you receive the smile
                    transformation you deserve!
                </p>
            </SingleArticle>

            <BottomBannerVeneers />
        </Fragment>
    );
}
