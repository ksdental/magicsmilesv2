import { BasicHero } from '@/BasicHero';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CenterIcon } from '@/CenterIcon';
import { CLink } from '@/CLink';
import { getNavLink } from '@/layout/NavLinks';
import { SingleArticle } from '@/SingleArticle';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '.';
export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Sedation Dentistry - Linden, NJ"
                title={
                    <h2>
                        Transforming Fearful Visits
                        <strong>Into Stress-Free Smiles</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/sedation-dentistry/hero.jpg"
                        alt="patient shaking hands with doctor in a dental office"
                        layout="fullWidth"
                    />
                }
            />

            <SingleArticle titleNextLine>
                <h2>
                    Exceptional Care. <strong>Exceptional Comfort.</strong>
                </h2>
                <p>
                    For many, visiting the dentist can create feelings of apprehension and
                    nervousness. The sights and sounds of dental procedures, coupled with potential
                    discomfort, can contribute to this anxiety. Recognizing this common concern, our
                    team at Magic Smile Dental in Linden, NJ, prioritizes the comfort and relaxation
                    of you and your family with sedation dentistry techniques.
                </p>
                <p>
                    By offering sedation dentistry options, we aim to alleviate anxiety and create a
                    serene environment for dental care. Dental anesthesia allows you to undergo
                    necessary procedures with reduced stress, ensuring a positive and comfortable
                    dental experience. Our commitment to calming and stress-free visits underscores
                    our dedication to your well-being and satisfaction.
                </p>
            </SingleArticle>

            <div style={{ position: 'relative' }}>
                <BgArticle alignBottom singleBg darkBg>
                    <div>
                        <StaticImage
                            src="../../assets/images/sedation-dentistry/1.jpg"
                            alt="doctor treating a patient"
                            width={649}
                            height={675}
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>Am I a Candidate </strong> for Sedation Dentistry?
                            </h2>
                            <ul>
                                <li>Minimization of pain and discomfort</li>
                                <li>Relaxed and comfortable during treatment</li>
                                <li>Dental anxiety and fear decrease</li>
                                <li>Reduction of your gag reflex</li>
                                <li>Combine appointments and require fewer visits</li>
                                <li>Advantages of receiving the necessary care</li>
                            </ul>
                        </BgArticleBox>
                    </div>
                </BgArticle>
                <CenterIcon />

                <BgArticle darkBg alignTop imgRight noBg>
                    <div>
                        <StaticImage
                            src="../../assets/images/sedation-dentistry/2.jpg"
                            alt="sedated patient sitting in a dental office"
                            width={649}
                            height={675}
                        />
                        <BgArticleBox>
                            <h2>
                                <strong>Nitrous Oxide</strong> for a More Comfortable Dental
                                Experience
                            </h2>
                            <p>
                                We offer nitrous oxide, commonly known as “laughing gas,” to help
                                our patients have a more relaxed and stress-free dental visit.
                                Nitrous oxide is a safe and effective sedative that allows patients
                                to feel calm and comfortable while remaining fully awake during
                                treatment.
                            </p>
                            <p>
                                It is inhaled through a small mask placed over the nose and takes
                                effect within minutes, easing anxiety and reducing discomfort. Once
                                the procedure is complete, the effects wear off quickly, allowing
                                patients to resume normal activities without lingering drowsiness.
                                With nitrous oxide, we strive to make dental care more accessible
                                and pleasant, especially for those who experience dental anxiety.
                            </p>
                        </BgArticleBox>
                    </div>
                </BgArticle>
            </div>

            <SingleArticle firstImg noBg titleNextLine>
                <StaticImage
                    src="../../assets/images/sedation-dentistry/3.jpg"
                    alt="woman sitting on a sofa"
                    width={1060}
                    height={597}
                />
                <h2>
                    Don’t Let Dental Anxiety <strong>Take a Toll On Your Oral Health</strong>
                </h2>
                <p>
                    Suppose dental fear, anxiety, or the complexity of treatments, including{' '}
                    <CLink to={getNavLink('dental implants')}>dental implant surgery</CLink>, have
                    deterred you from seeking care. In that case, our dedicated team is here to
                    offer support. Timely dental interventions can restore oral health and boost
                    confidence, facilitating a pain-free and fulfilling life! Delaying necessary
                    treatment may have significant health consequences, impacting your overall
                    well-being.
                </p>
                <p>
                    Neglected oral issues can lead to nutritional deficiencies, digestive problems,
                    and an increased risk of systemic health issues. With our comprehensive sedation
                    dentistry and dental anesthesia options, we strive to provide minimally invasive
                    yet highly effective treatment solutions, empowering you to prioritize your oral
                    health for a healthier and more fulfilling life.
                </p>
            </SingleArticle>
            <BottomBannerConsult
                title={
                    <h2>
                        Enjoy Your Next Visit
                        <strong> In Total Comfort</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/sedation-dentistry/banner.jpg"
                    alt="patient shaking hands with a doctor in a dental office"
                    width={560}
                    height={380}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
