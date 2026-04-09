import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { SingleArticle } from '@/SingleArticle';
import { BigArrowBtn } from '@/buttons';
import { CLink } from '@/CLink';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { DialogArticle } from '@/DialogArticle';
import { SmilePreviewForm } from '@/SmilePreviewForm';
import { BottomBannerVeneers } from '@/BottomBannerVeneers';
import { ImgArticle, ImgArticleSection } from '@/ImgArticle';
import { getNavLink } from '@/layout/NavLinks';
import { scrollToSection } from '@/layout/Nav';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Cosmetic Dentistry - Linden, NJ"
                title={
                    <h2>
                        <strong>Enhance Your Smile.</strong>Elevate Your Confidence.
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/hero.jpg"
                        alt="doctor holding a mirror infront of a patient"
                        layout="fullWidth"
                    />
                }
            />
            <SingleArticle>
                <h2>
                    <strong>Discover Your Best Smile</strong> with Cosmetic Dentistry
                </h2>
                <p>
                    Your smile powerfully reflects your unique personality, making a lasting
                    impression in personal and professional interactions. At Magic Smile Dental, we
                    understand the impact of an imperfect smile on your appearance, self-esteem, and
                    social confidence. Whether you’re dealing with stains, chips, gaps, or missing
                    teeth, our skilled restoration dentist, our doctors are committed to restoring
                    and enhancing your smile.
                </p>

                <p>
                    Using advanced techniques, cutting-edge technology, and an artistic approach, we
                    tailor our cosmetic dentistry services to revive your smile’s natural beauty or
                    create the flawless smile you’ve always desired. We aim to improve your oral
                    health and boost your self-assurance and overall confidence. Experience the
                    transformative power of a revitalized smile at Magic Smile Dental in Linden, NJ.
                </p>
                <BigArrowBtn onClick={() => scrollToSection('#footer-cta')}>
                    get pricing
                </BigArrowBtn>
            </SingleArticle>

            <BgArticle darkBg imgRight centerImage big>
                <div>
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/1.png"
                        alt="happy patient"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            Issues Cosmetic Dentistry <strong>Can Correct</strong>
                        </h2>
                        <ul>
                            <li>Tooth stains or discoloration</li>
                            <li>Irregularly shaped or uneven teeth</li>
                            <li>Cracked, chipped, or broken teeth</li>
                            <li>Crooked or gapped teeth</li>
                            <li>Asymmetrical smile</li>
                            <li>Gummy smile</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <DialogArticle
                dialogContent={<SmilePreviewForm />}
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/2.jpg"
                        width={620}
                        height={437}
                        alt="happy patient maria"
                    />
                }
                btnText="upload your picture"
            >
                <h2>
                    <strong>Smile Design </strong>Preview
                </h2>
                <p>
                    Upload a recent photo of yourself and we’ll show you how you can look after
                    dental implants. Be sure the photo shows your current smile!
                </p>
            </DialogArticle>

            <ImgArticleSection>
                <h2>
                    Our Top-Rated <strong>Cosmetic Dentistry Treatments</strong>
                </h2>
                <ImgArticle
                    number="1"
                    image={
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/3.jpg"
                            alt="porcelain veneers"
                            width={630}
                            height={550}
                        />
                    }
                >
                    <div>
                        <h3>Porcelain Veneers</h3>
                        <p>
                            <CLink to={getNavLink('porcelain veneers')}>Porcelain Veneers</CLink>{' '}
                            are thin shells made from high-quality dental porcelain that are
                            custom-designed to fit over the front surface of teeth. They offer a
                            versatile solution for enhancing the appearance of teeth by masking
                            imperfections such as chips, cracks, stains, and gaps. Porcelain veneers
                            are known for their durability and resistance to staining, providing
                            long-lasting results that maintain their natural-looking appearance.
                        </p>
                        <p>
                            The veneers are meticulously crafted to match the surrounding teeth’
                            color, shape, and size, ensuring a seamless and harmonious smile. With
                            proper care and maintenance, porcelain veneers can significantly improve
                            a smile’s overall aesthetics, boosting confidence and self-esteem.
                        </p>
                    </div>
                </ImgArticle>
                <ImgArticle
                    imgRight
                    number="2"
                    image={
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/4.jpg"
                            alt="patient getting teeth whitening treatment"
                            width={630}
                            height={550}
                        />
                    }
                >
                    <div>
                        <h3>Teeth Whitening</h3>
                        <p>
                            Various factors, including age, genetics, tobacco, coffee, tea, and red
                            wine consumption, can lead to tooth stains. Combatting this common
                            cosmetic dentistry issue, our{' '}
                            <CLink to={getNavLink('teeth whitening')}></CLink>professional teeth
                            whitening presents an ideal solution for restoring the natural
                            brightness of your smile.
                        </p>
                        <p>
                            In Linden, NJ, our in-office teeth whitening delivers multi-shade
                            improvements in a single session, while personalized at-home whitening
                            trays are also available for your convenience.
                        </p>
                    </div>
                </ImgArticle>

                <ImgArticle
                    number="3"
                    image={
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/5.jpg"
                            alt="teeth"
                            width={630}
                            height={550}
                        />
                    }
                >
                    <div>
                        <h3>Composite Bonding</h3>
                        <p>
                            Bonding is a cost-effective cosmetic dentistry procedure for repairing
                            tooth decay, chipped or cracked teeth, and worn-down edges. During this
                            procedure, our expert team first drills out the tooth decay or
                            imperfections, then roughens the surface to ensure a good bond. The
                            tooth-colored composite material is then applied to the tooth surface,
                            “sculpted” into the right shape, and cured with a high-intensity light.
                        </p>
                    </div>
                </ImgArticle>
                <ImgArticle
                    imgRight
                    number="4"
                    image={
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/6.jpg"
                            alt="dental crown"
                            width={630}
                            height={550}
                        />
                    }
                >
                    <div>
                        <h3>Dental Crowns and Bridges</h3>
                        <p>
                            A crown or cap is a porcelain or ceramic restoration that covers a
                            tooth’s exposed surface to strengthen or improve its appearance.{' '}
                            <CLink to={getNavLink('Dental Crowns & Bridges')}>Crowns</CLink> are an
                            excellent option for teeth with large fillings or damage and to protect
                            weakened tooth structures after a root canal.
                        </p>
                        <p>
                            A bridge replaces one or more missing teeth with an artificial tooth or
                            teeth fused to natural teeth with crowns on either side for support.
                            Although bridges don’t preserve bone in the empty socket like dental
                            implants, they do prevent adjacent teeth from shifting.
                        </p>
                    </div>
                </ImgArticle>

                <ImgArticle
                    number="5"
                    image={
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/7.jpg"
                            alt="clear aligners"
                            width={630}
                            height={550}
                        />
                    }
                >
                    <div>
                        <h3>Clear Aligners</h3>
                        <p>
                            Clear aligners are a popular orthodontic treatment option for discreetly
                            straightening teeth. Made from transparent plastic, they offer a nearly
                            invisible way to gradually shift teeth into alignment. Clear aligners
                            are custom-made for each patient, ensuring a comfortable fit and
                            effective treatment.
                        </p>
                        <p>
                            They are removable for eating, drinking, brushing, and flossing,
                            providing convenience and flexibility throughout treatment.
                        </p>
                    </div>
                </ImgArticle>
                <ImgArticle
                    imgRight
                    number="6"
                    image={
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/8.jpg"
                            alt="dental implant"
                            width={630}
                            height={550}
                        />
                    }
                >
                    <div>
                        <h3>Dental Implant Surgery</h3>
                        <p>
                            <CLink to={getNavLink('Dental implants')}>Dental implants</CLink> are
                            durable and natural-looking replacements for missing teeth that
                            integrate seamlessly with the jawbone. Made of biocompatible materials
                            such as titanium, implants provide a stable foundation for crowns,
                            bridges, or dentures.
                        </p>
                        <p>
                            They offer long-term benefits by preventing bone loss and maintaining
                            the integrity of the surrounding teeth. Dental implants can restore
                            functionality and aesthetics with proper care, allowing patients to
                            enjoy a confident smile and improved oral health for years.
                        </p>
                    </div>
                </ImgArticle>
            </ImgArticleSection>

            <BottomBannerVeneers />
        </Fragment>
    );
}
