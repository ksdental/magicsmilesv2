import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { SingleArticle } from '@/SingleArticle';
import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { CenterIcon } from '@/CenterIcon';
import { getNavLink } from '@/layout/NavLinks';
import { CLink } from '@/CLink';
import { BottomBannerConsult } from '@/BottomBannerConsult';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Dental Crowns & Bridges - Linden, NJ"
                title={
                    <h2>
                        <strong>Recapture a Natural-Looking</strong> and Functioning Smile
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/crowns-bridges/hero.jpg"
                        alt="patient with a doctor"
                        layout="fullWidth"
                    />
                }
            />
            <SingleArticle titleNextLine>
                <h2>
                    Get a Dental Crown or Bridge <strong>to Restore Your Bite</strong>
                </h2>
                <p>
                    If you have a severely decayed, weak, or damaged tooth, you’ve found the right
                    practice to make your smile whole again. When you visit Magic Smile Dental for a
                    dental crown or bridge, you’ll benefit from our extensive expertise, caring
                    touch, and advanced technologies. As long as the roots and interior of your
                    damaged or broken tooth are healthy, we can restore it with a dental crown in
                    Linden, NJ.
                </p>

                <p>
                    And if you have a missing tooth, a dental bridge is a cost-effective alternative
                    to a dental implant. Whether you’re struggling with a broken tooth or need to
                    fill a smile gap, crowns and bridges provide excellent functional and{' '}
                    <CLink to={getNavLink('cosmetic dentistry')}>cosmetic benefits</CLink>.
                </p>
            </SingleArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle alignBottom singleBg darkBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/crowns-bridges/1.jpg"
                            alt="doctor showing information on the screen"
                            width={649}
                            height={675}
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>Dental Crowns</strong> Restore Damaged Teeth
                            </h2>
                            <p>
                                A dental crown in Linden, NJ is a tooth cap crafted from porcelain
                                or zirconia that restores a compromised tooth’s function, shape, and
                                strength. If a{' '}
                                <CLink to={getNavLink('general dentistry')}>cavity</CLink> goes
                                unchecked, oral bacteria continues to impact the tooth enamel and
                                dentin. There may not be adequate tooth structure after removing
                                decay to support a filling, in which case a dental crown is
                                required.
                            </p>
                            <p>
                                When a tooth is too discolored or misshapen to restore with a{' '}
                                <CLink to={getNavLink('porcelain veneers')}>porcelain veneer</CLink>
                                , a tooth crown is often the best option. Last, a root canal weakens
                                the interior tooth structure, and a crown is necessary to protect it
                                from future fracture and extraction.
                            </p>
                            <p>
                                The process starts by trimming and reshaping your tooth to create an
                                ideal base for the crown. Digital impressions of your bite are taken
                                to craft a temporary crown on-site and sent to the dental lab to
                                fabricate your final tooth crown.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/cosmetic-dentistry/crowns-bridges/2.jpg"
                            alt="dental bridge"
                            width={649}
                            height={675}
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>Dental Bridges</strong> Fill Gaps Left by Tooth Loss
                            </h2>
                            <p>
                                A dental bridge in Linden, NJ is a fixed prosthetic that bridges the
                                gap left by one or more missing teeth. A dental bridge involves
                                placing crowns on adjacent teeth to anchor the false (pontic) tooth.
                                The process for placing traditional bridges at Magic Smile Dental is
                                similar to that of dental crowns.
                            </p>
                            <p>
                                Dental bridges improve your chewing ability and speech and eliminate
                                sensitivity and issues that can impact adjacent teeth. But unless
                                you receive an{' '}
                                <CLink to={getNavLink('dental implants')}>
                                    implant-supported bridge
                                </CLink>
                                , bone loss continues under the false tooth without a tooth root to
                                stimulate your jaw bone.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <BgArticle centerImage>
                <div>
                    <StaticImage
                        src="../../../assets/images/cosmetic-dentistry/crowns-bridges/3.png"
                        alt="patient meeting a doctor"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>The Benefits</strong> of Crowns and Bridges
                        </h2>
                        <ul>
                            <li>Improves functionality and aesthetics</li>
                            <li>Prevents additional dental problems</li>
                            <li>Distributes bite forces evenly</li>
                            <li>Prevents shifting of adjacent teeth</li>
                            <li>Maintains overall oral health</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle firstImg noBg titleNextLine>
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/crowns-bridges/4.jpg"
                    alt="patient in a dental clinic"
                    width={1060}
                    height={597}
                />
                <h2>
                    <strong>The Varied Cost</strong> of Crowns and Bridges
                </h2>
                <p>
                    The cost of these procedures varies based on the materials used, the number of
                    teeth being restored, and outside dental lab charges. In addition to expertise
                    in restoring dental function and beauty with crowns and bridges, we offer
                    competitive pricing, accept dental insurance, and partner with leading
                    third-party{' '}
                    <CLink to={getNavLink('insurance and financing')}>
                        dental financing companies
                    </CLink>{' '}
                    to deliver affordable restorative dentistry.
                </p>
            </SingleArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Is a Dental Crown or Bridge <strong>Right for You?</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/cosmetic-dentistry/crowns-bridges/5.jpg"
                    alt="patient in a dental clinic"
                    width={560}
                    height={380}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
