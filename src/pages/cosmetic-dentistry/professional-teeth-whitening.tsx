import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { SingleArticle } from '@/SingleArticle';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { css } from '@emotion/react';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Professional Teeth Whitening - Linden, NJ"
                title={
                    <h2>
                        Your Smile Deserves <strong> Clinically-Proven Teeth Whitening </strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/whitening/hero.jpg"
                        alt="Person getting a teeth whitening treatment"
                        width={800}
                        loading="eager"
                    />
                }
            />
            <SingleArticle titleNextLine>
                <h2>
                    <strong>Brighten Your Smile</strong> and Boost Your Confidence
                </h2>
                <p>
                    Some of our favorite things come at a cost. A nice cup of tea, that steaming mug
                    of coffee in the morning, a glass of red wine, delicious tomato sauce, a healthy
                    serving of berries; all these things can stain our teeth! Beyond our favorite
                    foods, some medications, the natural aging process, tobacco, and even our
                    genetics can cause our teeth to appear dark and discolored. No matter the cause,
                    tooth stains can make us feel self-conscious about our smiles.
                </p>

                <p>
                    If you’re unhappy with the shade of your teeth, you can find the best teeth
                    whitening near you in Linden, NJ right here at Magic Smile Dental! We have
                    professional teeth whitening services that can immediately brighten your smile
                    without struggling with over-the-counter products that don’t deliver the
                    dazzling smile you want. Professional teeth whitening from our team will give
                    you a whiter and brighter smile that lasts a long time. Professional tooth
                    whitening can safely brighten your teeth by several shades in just one visit, so
                    you can start enjoying your dream smile without waiting!
                </p>
            </SingleArticle>

            <BgArticle darkBg big>
                <div>
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/whitening//1.jpg"
                        alt="Person smiling with bright, healthy teeth"
                        width={860}
                        height={575}
                    />
                    <BgArticleBox>
                        <h2>
                            Why <strong>Professional Teeth Whitening</strong>
                        </h2>

                        <p>
                            Experience the unparalleled results of our professional teeth whitening
                            services in Linden, NJ, which deliver instant and remarkable
                            transformations in just a few hours. Utilizing professional-grade
                            bleaching agents, our treatments penetrate deep into tooth enamel to
                            eliminate internal and surface stains.
                        </p>
                        <p>
                            With minimal to no reported tooth or gum sensitivity, our sessions
                            ensure a comfortable experience from start to finish. Under the guidance
                            of our skilled cosmetic dentists, you’ll select the perfect shade and
                            receive personalized monitoring for optimal outcomes. With proper oral
                            hygiene maintenance and avoidance of teeth-staining substances, enjoy
                            the long-lasting brilliance of noticeably white teeth.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle
                noBg
                firstImg
                css={css`
                    background-color: rgb(245, 245, 245);
                `}
            >
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/whitening/2.jpg"
                    alt="Doctor holding a mirror in front of a patient in the dental clinic"
                    width={1060}
                    height={597}
                />
                <h2>
                    Comparing <strong> Teeth Whitening Solutions</strong>
                </h2>
                <p>
                    Professional teeth whitening is a top choice among patients seeking cosmetic
                    oral procedures, boasting unmatched benefits. Professional whitening ensures
                    safer and more effective results than over-the-counter options, which can lead
                    to tooth and gum sensitivity and enamel erosion with prolonged use.
                </p>
                <p>
                    Home remedies like baking soda and activated charcoal may offer minimal changes
                    but risk abrasive effects and tooth sensitivity. Typically, these methods yield
                    gradual results over weeks or months. With professional whitening, immediate and
                    noticeable improvements in tooth color are achieved without compromising oral
                    health, making it the superior choice for a brighter, more confident smile.
                </p>
            </SingleArticle>

            <BgArticle centerImage noBg imgRight>
                <div>
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/whitening/3.png"
                        alt="Patient with a doctor"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>The Better Way </strong>to a Brighter Smile
                        </h2>
                        <ul>
                            <li>Quick, reliable, and safe treatment</li>
                            <li>Immediate and dramatic results</li>
                            <li>Little to tooth or gum sensitivity</li>
                            <li>No messy or abrasive products</li>
                            <li>Fully customized instead of a one-size-fits-all approach</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        <strong>Boost Your Confidence </strong> with a Dazzling White Smile!
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/whitening/4.jpg"
                    alt="Patient in the dental clinic"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
