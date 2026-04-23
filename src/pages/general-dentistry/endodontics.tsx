import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CircledDigit } from '@/CircledDigit';
import { CircleImgSection } from '@/CircleImgSection';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Endodontics - Linden, NJ"
                title={
                    <h2>
                        Stop Severe Toothaches with <strong>Advanced Endodontic Care</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/general-dentistry/endodontics/hero.jpg"
                        alt="doctor pointing something on a screen"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />

            <SingleArticle titleNextLine>
                <h2>
                    Restore Comfort and
                    <strong> Preserve Your Natural Teeth</strong>
                </h2>
                <p>
                    The pulp is the innermost layer of a tooth, where the nerve and blood vessels
                    are located. When the pulp inside your tooth is damaged, you may experience
                    sharp tooth sensitivity or pain when chewing and biting. These problems can
                    develop due to deep decay, cracks, or injuries such as impacts to the jaw,
                    sometimes months or years later.
                </p>
                <p>
                    Ignoring these symptoms can lead to more severe issues, such as infections or
                    tooth loss. At Magic Smile Dental, we understand how uncomfortable and
                    overwhelming this can be, so we offer comfortable and effective endodontic
                    treatments in Linden, NJ, to address the problem and relieve your pain.
                </p>
            </SingleArticle>

            <BgArticle darkBg imgRight big>
                <div>
                    <StaticImage
                        src="../../../assets/images/general-dentistry/endodontics/1.jpg"
                        alt="Tooth anatomy diagram"
                        width={860}
                        height={575}
                    />
                    <BgArticleBox>
                        <h2>
                            What Is <strong>Endodontics?</strong>
                        </h2>
                        <p>
                            Endodontics is a specialized branch of dentistry that focuses on
                            treating the inside of the tooth, particularly the pulp and nerves
                            inside the tooth. If the pulp becomes inflamed or infected, endodontic
                            treatment can save the tooth by removing and sealing the damaged tissue
                            to prevent further issues.
                        </p>
                        <p>
                            Endodontic treatment can also treat infections at the tip of a tooth’s
                            root, where it could cause a severe abscess and serious damage to the
                            bone tissue, surrounding teeth, or even your overall health. These
                            treatments can preserve your natural tooth, alleviate pain, and restore
                            normal function.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <CircleImgSection
                title={
                    <h2>
                        Our <strong>Endodontic Treatment Options</strong>
                    </h2>
                }
                css={theme => css`
                    background-color: ${theme.colors.lightGray};
                `}
            >
                <div>
                    <StaticImage
                        src="../../../assets/images/general-dentistry/endodontics/option-1.png"
                        alt="file in a tooth"
                        width={415}
                        height={432}
                    />
                    <CircledDigit>1</CircledDigit>
                    <h3>Root Canal Treatment</h3>
                    <p>
                        Root canal therapy is a common endodontic procedure involving removing
                        infected or damaged pulp inside the tooth. The tooth is then cleaned,
                        filled, and sealed to prevent future infections. This treatment can save
                        your natural tooth and eliminate the pain caused by an infected or inflamed
                        pulp. After root canal treatment, we frequently recommend protecting the
                        tooth with a{' '}
                        <CLink to={getNavLink('dental crowns & bridges')}>dental crown</CLink>.
                    </p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/general-dentistry/endodontics/option-2.png"
                        alt="Tooth anatomy diagram"
                        width={415}
                        height={432}
                    />
                    <CircledDigit>2</CircledDigit>
                    <h3>Apicoectomy</h3>
                    <p>
                        An apicoectomy is a surgical procedure that removes the tip of the tooth’s
                        root and surrounding infected tissue when a root canal alone isn’t enough to
                        resolve the issue. This treatment helps to eliminate the infection and save
                        the tooth, especially when other options have been exhausted.
                    </p>
                    <p>
                        This is also a critical option to eliminate infected tissue to prevent it
                        from spreading and causing more damage. Untreated dental infections can
                        become medical emergencies, so it’s crucial to get timely treatments for
                        infected teeth.
                    </p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/general-dentistry/endodontics/option-3.png"
                        alt="Tooth showing root canal treatment"
                        width={415}
                        height={432}
                    />
                    <CircledDigit>3</CircledDigit>
                    <h3>Endodontic Retreatment</h3>
                    <p>
                        Endodontic retreatment is necessary when a tooth previously undergone a root
                        canal treatment becomes re-infected. This procedure involves opening the
                        tooth, removing the old filling material, and thoroughly cleaning and
                        resealing the tooth. While root canal therapy is a predictable procedure,
                        retreatment may be necessary if the filling material does not reach the tip
                        of the root and the tooth’s anatomy is unusual. There were extra canals that
                        weren’t addressed the first time. Our{' '}
                        <CLink to={getNavLink('about us')}>3D CBCT scanner</CLink> significantly
                        reduces the risk of these types of issues.
                    </p>
                </div>
            </CircleImgSection>

            <BgArticle imgRight big noBg>
                <div>
                    <StaticImage
                        src="../../../assets/images/general-dentistry/endodontics/2.jpg"
                        alt="patient looking into the mirror while two doctors look upon"
                        width={860}
                        height={575}
                    />
                    <BgArticleBox>
                        <h2>
                            How Can Endodontics <strong> Improve Your Oral Health?</strong>
                        </h2>
                        <ul>
                            <li>Saves your natural teeth, preventing the need for extraction</li>
                            <li>
                                Relieves pain and discomfort associated with infected or damaged
                                pulp
                            </li>
                            <li>Prevents further infection and more extensive dental problems</li>
                            <li>
                                Prevents abscesses and infections from becoming serious medical
                                risks
                            </li>
                            <li>
                                Restores normal function, allowing you to chew and bite comfortably
                            </li>
                            <li>Helps maintain your natural smile and oral health</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Relieve Your Tooth Pain and <strong>Save Your Smile.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/general-dentistry/endodontics/banner.jpg"
                    alt="Patient smiling"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
