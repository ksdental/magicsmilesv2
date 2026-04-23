import VideoHero from '@/VideoHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import video from '@a/video/alex-2.mp4';
import poster from '@a/images/video-posters/alex-2-poster.jpg';
import BgArticle, { BgArticleBox } from '@/BgArticle';
import { SingleArticle } from '@/SingleArticle';
import { Accordion } from '@/AccordionPrimitive';
import { AccordionItem } from '@/AccordionItem';
import { getNavLink } from '@/layout/NavLinks';
import { CLink } from '@/CLink';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { css } from '@emotion/react';
export { Head } from '..';

export default function Page() {
    return (
        <Fragment>
            <VideoHero
                tagline="General Dentistry - Linden, NJ"
                title={
                    <h2>
                        Comprehensive Care <strong>for the Entire Family</strong>
                    </h2>
                }
                bottomText="We Put Our Patients First, No Matter The Condition!"
                videoID="1013550343"
                videoTitle="We Put Our Patients First, No Matter The Condition!"
                videoImage={
                    <StaticImage
                        src="../../../assets/images/general-dentistry/thumbnail.jpg"
                        alt="Doctor shaking hands with a patient"
                        width={380}
                        height={272}
                    />
                }
                centerVideo={video}
                centerVideoPoster={poster}
            />

            <BgArticle
                centerImage
                noBg
                imgRight
                css={theme => css`
                    background-color: ${theme.colors.lightGray};
                `}
            >
                <div>
                    <StaticImage
                        src="../../../assets/images/general-dentistry/1.png"
                        alt="Patient meeting a doctor"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            Personalized Care <strong>for Lifelong Smiles</strong>
                        </h2>
                        <p>
                            At Magic Smile Dental, we understand that visiting the dentist can be
                            daunting, especially for little ones. From the moment you enter our
                            doors, our warm and professional staff prioritize you and your family’s
                            comfort. We take pride in being your trusted family dentist, dedicated
                            to ensuring lasting oral health for all ages.
                        </p>
                        <p>
                            Our patient-focused approach means you’ll receive comprehensive care all
                            under one roof. Our highly skilled dentists provide a variety of
                            services tailored to improving and maintaining your family’s oral
                            health, from dental exams to fluoride treatments. Let us be your partner
                            in creating bright, healthy smiles for your entire family in Linden, NJ.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle noBg>
                <h2>
                    Our <strong> Exceptional Services</strong>
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Exams & Dental Cleanings">
                        <p>
                            Regular dental exams and cleanings are essential for maintaining optimal
                            oral health. Our team can identify potential issues early during these
                            visits, such as cavities or gum disease, before they become more
                            serious.
                        </p>
                        <p>
                            Professional cleanings remove plaque and tartar buildup that regular
                            brushing and flossing may miss, helping to prevent decay and improve gum
                            health. These appointments are crucial in ensuring a healthy smile and
                            can contribute to overall well-being. If you are looking for
                            preventative dentistry near Linden, NJ, look no further!
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="Emergency Dentistry">
                        <p>
                            Our dentists acknowledge that{' '}
                            <CLink to={getNavLink('emergency dentistry')}>dental emergencies</CLink>
                            , including situations like a fractured tooth, can occur unexpectedly.
                            That is precisely why we provide emergency dentistry services. Our team
                            of dentists is dedicated to delivering prompt and effective dental
                            treatments when you require them the most, guaranteeing that you receive
                            the necessary care promptly.
                        </p>
                        <p>
                            Dental emergencies encompass a range of situations, from tooth loss to
                            sudden toothaches. If you are searching for emergency dentistry near
                            Linden, NJ, then Magic Smile Dental is the right fit!
                        </p>
                    </AccordionItem>
                    <AccordionItem value="3" text="Crowns & Bridges">
                        <p>
                            We provide two restorative dentistry procedures:{' '}
                            <CLink to={getNavLink('dental crowns & bridges')}>
                                crowns and bridges
                            </CLink>
                            . A crown is a custom-made artificial tooth that fits precisely over a
                            natural tooth, restoring its shape, appearance, and functionality.
                        </p>
                        <p>
                            On the other hand, bridges consist of artificial teeth supported by
                            dental crowns on both sides, replacing one or more missing teeth. Magic
                            Smile Dental is an excellent solution if you are searching for crowns
                            and bridges near Linden, NJ.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Tooth-Colored Fillings">
                        <p>
                            Due to their natural appearance, tooth-colored or composite resin
                            fillings are popular for restoring decayed or damaged teeth. Made from
                            plastic and glass materials, these fillings can be color-matched to
                            blend seamlessly with the surrounding tooth enamel, providing a more
                            aesthetic result than traditional metal fillings.
                        </p>
                        <p>
                            They bond directly to the tooth structure, helping to support the
                            remaining tooth and reduce the risk of further fracture. Tooth-colored
                            fillings require less removal of healthy tooth structure than amalgam
                            fillings, making them a conservative option for dental restoration.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="5" text="Full & Partial Dental Implants">
                        <p>
                            <CLink to={getNavLink('dental implants')}>Dental implants</CLink> are
                            artificial tooth roots that our dentists place in your jawbone to hold a
                            replacement tooth or bridge in place.
                        </p>
                        <p>
                            Full dental implants replace a whole set of missing or damaged teeth,
                            while partial dental implants replace only a few. Looking for full and
                            partial dental implants near Linden, NJ? Contact us today to learn more!
                        </p>
                    </AccordionItem>
                    <AccordionItem value="6" text="Root Canals">
                        <p>
                            A <CLink to={getNavLink('endodontics')}>root canal</CLink> is a dental
                            procedure designed to treat infected or damaged tooth pulp, which can
                            cause severe pain and compromise oral health. During the procedure, we
                            remove the infected tissue, clean and disinfect the root canal, and seal
                            it to prevent further infection.
                        </p>
                        <p>
                            Despite their reputation, modern root canal treatments are typically
                            comfortable and effective. They offer a way to save a tooth that might
                            otherwise require extraction. Following a root canal, patients often
                            experience relief from pain and can preserve their natural teeth for
                            many years with proper care.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="7" text="TMD Oral Appliances">
                        <p>
                            Temporomandibular joint disorder (TMD) can cause discomfort and pain in
                            the jaw, face, and neck, making it essential to find effective treatment
                            options. Oral appliances, such as splints or night guards, are commonly
                            used to alleviate symptoms by repositioning the jaw and reducing strain
                            on the temporomandibular joint.
                        </p>
                        <p>
                            These devices help to minimize grinding and clenching, which can worsen
                            TMD symptoms. With consistent use, TMD oral appliances can improve jaw
                            function, reduce pain, and enhance the overall quality of life for those
                            affected.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Want a Family-Friendly, Comprehensive Dentist <strong>Near You?</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/general-dentistry/banner.jpg"
                    alt="Smiling patient"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
