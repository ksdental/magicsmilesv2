import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerImplants } from '@/BottomBannerImplants';
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
                text="Failing Dental Implants - Linden, NJ"
                title={
                    <h2>
                        <strong>Innovative LAPIP Treatment</strong> for Failing Dental Implants
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/dental-implants/failure/hero.jpg"
                        alt="Magic Smile Dental office"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />

            <SingleArticle titleNextLine firstImg>
                <StaticImage
                    src="../../../assets/images/dental-implants/failure/article-1.jpg"
                    alt="laser treatment"
                    width={1060}
                    height={597}
                />
                <h2>
                    <strong>State-of-the-Art Laser Treatments</strong> to Protect Your Dental
                    Implants
                </h2>
                <p>
                    <CLink to={getNavLink('dental implants')}>Dental implants</CLink> are a
                    predictable way to replace missing teeth with very high success rates, but
                    complications can happen in rare cases. Peri-implantitis is the most common
                    cause of failing dental implants. It happens when the surrounding gum and bone
                    are infected, leading to implant instability.
                </p>
                <p>
                    Other causes of implant failures include poor oral hygiene, smoking, improperly
                    placed implant posts, bite problems, or systemic health issues. At Magic Smile
                    Dental, we offer treatments for peri-implantitis and failing dental implants in
                    Linden, NJ, to protect your smile and investment!
                </p>
            </SingleArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle darkBg alignBottom singleBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/failure/article-2.jpg"
                            alt="lapip laser treatment"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>What Is LAPIP</strong> and How Can It Reverse
                                Peri-Implantitis?
                            </h2>
                            <p>
                                LAPIP, or Laser-Assisted Peri-Implantitis Procedure, is a
                                cutting-edge treatment designed to save failing dental implants
                                using the same laser technology we use to{' '}
                                <CLink to={getNavLink('lanap procedure')}>treat gum disease</CLink>.
                                This laser-based therapy targets the infected tissue around the
                                implant without damaging the surrounding healthy bone and gum. It
                                can stimulate healthy cells and even regenerate bone tissue where
                                needed without needing{' '}
                                <CLink to={getNavLink('oral dentistry')}>bone grafts</CLink>.
                            </p>
                            <p>
                                LAPIP can help stabilize your implant and prevent further
                                complications by eliminating the bacteria and promoting healing.
                                This procedure offers a less invasive alternative to traditional
                                surgery, making it an effective, minimally invasive option for
                                addressing peri-implantitis.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../../assets/images/dental-implants/failure/article-3.jpg"
                            alt="doctor diagnosing a patient with a tool"
                            layout="fullWidth"
                        />
                        <BgArticleBox>
                            <h2>
                                The Benefits of Using Laser Therapy
                                <strong> to Save Your Implants</strong>
                            </h2>

                            <ul>
                                <li>No scalpels or stitches</li>
                                <li>Protects healthy tissue</li>
                                <li>Promotes natural healing</li>
                                <li>Effectively eradicates bacteria that cause peri-implantitis</li>
                                <li>
                                    Much faster recovery compared to traditional surgical methods
                                </li>
                                <li>Prevents more damage from removing a failing implant</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <SingleArticle firstImg>
                <StaticImage
                    src="../../../assets/images/dental-implants/failure/article-4.jpg"
                    alt="lapip laser"
                    width={1060}
                    height={597}
                />
                <h2>
                    What Is the <strong>LAPIP Process?</strong>
                </h2>
                <p>
                    The LAPIP process begins with a thorough examination to assess the extent of
                    your peri-implantitis and determine the best course of action. We’ll use a
                    specialized laser to remove infected tissue and bacteria from around the implant
                    during the procedure. We’ll also thoroughly remove any debris from the area,
                    adjust the bone tissue if needed, and apply the laser a second time at a setting
                    that promotes the reattachment of healthy gum tissue to the implant, stabilizing
                    it in place and sealing the site to keep it clean as it heals.
                </p>
                <p>
                    This second exposure also stimulates bone regeneration, reversing the damage and
                    permanently improving the health of your implant. Because LAPIP is a minimally
                    invasive treatment, most patients experience minimal discomfort and a faster
                    recovery compared to traditional surgery. Follow-up appointments are essential
                    to monitor the healing process and ensure the success of the treatment.
                </p>
            </SingleArticle>

            <BottomBannerImplants />
        </Fragment>
    );
}
