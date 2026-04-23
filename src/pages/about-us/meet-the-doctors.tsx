import VideoHero from '@/VideoHero';
import { Fragment } from 'react';
import video from '@a/video/home-hero.mp4';
import poster from '@a/images/video-posters/home-hero-poster.jpg';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import styled from '@emotion/styled';
import video1 from '@a/video/meet-the-doctors/anatoly.mp4';
import video2 from '@a/video/meet-the-doctors/sviatlana.mp4';
import poster1 from '@a/images/about-us/meet-the-doctors/1-poster.jpg';
import poster2 from '@a/images/about-us/meet-the-doctors/2-poster.jpg';
import video3 from '@a/video/alex-2.mp4';
import poster3 from '@a/images/video-posters/alex-2-poster.jpg';
import { StaticImage } from 'gatsby-plugin-image';
import { BottomBannerConsult } from '@/BottomBannerConsult';
export { Head } from '..';

const Video = styled.video`
    width: 100%;
    max-width: 700px;
    max-height: 728px;
    object-fit: cover;
    aspect-ratio: 700 / 728;

    @supports not (aspect-ratio: 1/1) {
        height: 94.75555555555556vw;

        @media (min-width: 768px) {
            height: 90.45833333333334vw;
        }
    }
`;

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="Meet Our Doctors - Linden, NJ"
                title={
                    <h2>
                        Meet <strong style={{ display: 'inline' }}>Our Doctors</strong>
                    </h2>
                }
                centerVideo={video}
                centerVideoPoster={poster}
            />
            <BgArticle whiteBg big imgRight centerImage>
                <div>
                    <Video
                        muted
                        playsInline
                        autoPlay
                        preload=""
                        loop
                        poster={poster1}
                        controls={false}
                    >
                        <source src={video1} type="video/mp4" />
                    </Video>
                    <BgArticleBox>
                        <h2>
                            Meet <strong>Anatoly Bensianoff, DDS</strong>
                        </h2>

                        <p>
                            Dr. Anatoly Bensianoff earned his Doctor of Dental Surgery Degree from
                            the NYU College of Dentistry in 2001 and completed his residency at
                            Staten Island Hospital in 2001. Drawn to dentistry after volunteering as
                            a resident’s assistant in a dental clinic, Dr. Bensianoff loves to help
                            patients alleviate pain and educate them, giving them the tools they
                            need to maintain a healthy mouth for their lifetime.
                        </p>
                        <p>
                            Dr. Bensianoff is an active member of the International Congress of
                            Implantologists and takes many advanced continuing education courses
                            each year to provide his patients with the highest quality dentistry
                            available.
                        </p>
                        <p>
                            Dr. Bensianoff enjoys reaching out to the local community and has hosted
                            several free emergency dental treatment events which provides care to
                            underprivileged and uninsured residents of the community.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BgArticle darkBg big centerImage>
                <div>
                    <Video
                        muted
                        playsInline
                        autoPlay
                        preload=""
                        loop
                        poster={poster2}
                        controls={false}
                    >
                        <source src={video2} type="video/mp4" />
                    </Video>
                    <BgArticleBox>
                        <h2>
                            Meet <strong>Sviatlana Stsiatsevich, DDS</strong>
                        </h2>

                        <p>
                            Dr. Sviatlana (Dr. Lana) was born and raised in Belarus, small, but
                            beautiful country located in the central part of the Europe. Her first
                            dental degree she received in 2007 from Belarusian State Medical
                            University. She practiced general dentistry at her home country for 4
                            years, focusing mostly on general dentistry.
                        </p>
                        <p>
                            In the USA she graduated from Virginia Commonwealth University School of
                            Dentistry. Since then she is practicing general dentistry in NJ.
                        </p>
                        <p>
                            Dr. Lana joined our office in 2021, and her main focus is comprehensive
                            approach to a dental care with great and long lasting results. She
                            strives to help patients meet their oral health needs and make them
                            confident with their smiles. As a member of Magic Smile Dental team she
                            shares the same values with the rest of the team: compassion, kindness,
                            empathy and professionalism. In her free time, Dr. Lana enjoys traveling
                            and exploring NY and local restaurants as well as spending time with
                            family and friends.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BgArticle noBg big imgRight centerImage>
                <div>
                    <Video
                        muted
                        playsInline
                        autoPlay
                        preload=""
                        loop
                        poster={poster3}
                        controls={false}
                    >
                        <source src={video3} type="video/mp4" />
                    </Video>
                    <BgArticleBox>
                        <h2>
                            Meet <strong>Alexandra Burgos, DMD</strong>
                        </h2>

                        <p>
                            Dr. Burgos is a New Jersey native who obtained her bachelor’s Degree
                            from Rutgers University-New Brunswick and continued her education at
                            Rutgers School of Dental Medicine (formerly UMDNJ). While at Rutgers
                            Dental School, Dr. Burgos was selected for the Community Oriented Dental
                            Education (CODE) program, where she provided dental care to the
                            underserved population in South New Jersey. To further develop her
                            dental skills and knowledge, she pursued further training by completing
                            a one-year residency at Hackensack University Medical Center.
                        </p>
                        <p>
                            She has demonstrated a genuine commitment to patient care and well-being
                            throughout her education and training. She actively engages in
                            continuing education to ensure her patients receive the most advanced
                            and personalized treatment. With her warm and compassionate approach,
                            she strives to create a comfortable and welcoming environment for her
                            patients. Dr. Burgos is a certified Invisalign provider and a current
                            American Academy of Clear Aligners member. She believes in building
                            strong relationships with her patients, taking the time to understand
                            their unique dental concerns, and providing personalized treatment
                            plans. Her gentle and compassionate approach puts her patients at ease,
                            ensuring a comfortable dental experience. Dr. Burgos enjoys spending
                            time with family and friends and traveling in her free time.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BgArticle darkBg big centerImage>
                <div>
                    <StaticImage
                        src="../../../assets/images/about-us/meet-the-doctors/dr.png"
                        width={700}
                        height={728}
                        alt="Dr. Yakov Yakubov"
                    />
                    <BgArticleBox>
                        <h2>
                            Meet <strong>Yakov Yakubov – Oral Surgeon</strong>
                        </h2>

                        <p>
                            Dr. Yakov Yakubov is a board certified Oral and Maxillofacial Surgeon.
                            He earned his dental and medical degrees at Columbia University, where
                            he was awarded prizes in Oral Surgery and Oral Pathology. Following his
                            dental and medical training, he pursued specialty training in Oral and
                            Maxillofacial Surgery at the NewYork-Presbyterian Hospital, Columbia
                            University Medical Center, where he completed a year of general surgery
                            training. He served as a chief resident in his final year of training.
                            At Columbia, Dr. Yakubov gained training in corrective (orthognathic)
                            jaw surgery, pathology, trauma, and facial cosmetics, as well as complex
                            bone and soft tissue grafting and complex implant reconstruction.
                        </p>
                        <p>
                            Dr. Yakubov has published in the Journal of Oral and Maxillofacial
                            Surgery and the Journal of Oral Surgery, Oral Medicine, Oral Pathology,
                            and Oral Radiology. He is certified in BLS, ACLS, PALS, and ATLS and is
                            a member of the American Association of Oral and Maxillofacial Surgeons.
                        </p>
                        <p>
                            Dr. Yakubov grew up in Queens, NY, and completed his undergraduate
                            studies in neuroscience. He lives in New Jersey with his wonderful wife
                            and two children.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BgArticle noBg big imgRight centerImage>
                <div>
                    <StaticImage
                        src="../../../assets/images/about-us/meet-the-doctors/valeriia.png"
                        alt="Dr. Valeriia Ivanova"
                        width={700}
                        height={728}
                    />
                    <BgArticleBox>
                        <h2>
                            Meet <strong>Valeriia Ivanova, DMD</strong>
                        </h2>

                        <p>
                            Dr. Valeriia Ivanova has been helping people smile with confidence since
                            1999. After graduating with honors from Kharkiv Medical University in
                            Ukraine, she dedicated her career to restorative dentistry—bringing back
                            not only healthy teeth, but also the joy and confidence that comes with
                            a great smile. For over 15 years, Dr. Ivanova ran her own dental clinic
                            in Kharkiv, where patients knew her for her gentle touch, attention to
                            detail, and genuine care. In 2025, she completed her training at Rutgers
                            School of Dental Medicine and earned her license to practice in New
                            Jersey, bringing her decades of experience to our community. Whether
                            you’re coming in for a check-up, a restoration, or a complete smile
                            makeover, she’s here to help you feel welcome, understood, and cared for
                            every step of the way.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Get On The Path To <strong> Better Dental Health!</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/about-us/meet-the-doctors/banner.jpg"
                    alt="Happy couple sitting and smiling"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
