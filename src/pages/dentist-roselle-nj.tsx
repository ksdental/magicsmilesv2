import { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { BasicHero } from '@/BasicHero';
import { BgArticleBox } from '@/BgArticle';
import { SingleArticle } from '@/SingleArticle';
import { Accordion } from '@/AccordionPrimitive';
import { AccordionItem } from '@/AccordionItem';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { BigArrowBtn } from '@/buttons';
import { CLink } from '@/CLink';
import { siteInfo } from '@/layout/NavLinks';
import { Seo } from '@/Seo';
import { NearbyCare, Cards } from '@/service-area/Sections';

export default function RosellePage() {
    return (
        <Fragment>
            <BasicHero
                heading="Dentist Serving Roselle, NJ"
                text="Roselle, NJ — Care in Linden"
                title={
                    <h2>
                        Comprehensive Dental Care<strong>Close to Roselle</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/contact-hero.jpg"
                        alt="Magic Smile Dental reception wall at the Linden office"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <SingleArticle>
                <h2>{'Dentist Serving Roselle, NJ for Comprehensive Dental Care'}</h2>
                <p>
                    {
                        "If you're searching for a dentist in Roselle, NJ, Magic Smile Dental welcomes patients at our nearby office in Linden. We provide preventive care, cosmetic dentistry, dental implants, restorative treatments, and emergency dental services to help you care for your smile at every stage of life."
                    }
                </p>
                <p>
                    {
                        'Our office is located at 515 North Wood Avenue, Suite 102, in Linden. Patients traveling from Roselle can reach the North Wood Avenue area via local roads, including St. Georges Avenue.'
                    }
                </p>
                <p>
                    {'Ready to discuss your dental needs? '}
                    <CLink to="https://www.zocdoc.com/booking-link/practice/magic-smile-dental-187658">
                        {'Schedule an appointment with Magic Smile Dental'}
                    </CLink>
                    {' or call '}
                    <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                    {'.'}
                </p>
                <BigArrowBtn as={CLink} to={siteInfo.appointmentLink} dark>
                    Schedule an Appointment
                </BigArrowBtn>
            </SingleArticle>
            <NearbyCare>
                <div>
                    <StaticImage
                        src="../../assets/images/general-dentistry/1.png"
                        alt="Patient meeting a doctor"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>{'Looking for a Dentist in Roselle, NJ? Explore Care Nearby'}</h2>
                        <p>
                            {
                                'Finding the right dental practice means choosing a team that understands your concerns, explains your options, and offers services that fit your needs.'
                            }
                        </p>
                        <p>
                            {
                                'At Magic Smile Dental, we welcome individuals and families from Roselle, including the 07203 ZIP code, to our Linden location. Whether you need a routine examination, want to improve your smile, or have concerns about missing teeth, our dental team can evaluate your oral health and discuss appropriate treatment options.'
                            }
                        </p>
                        <p>
                            {'Our practice combines '}
                            <CLink to="/general-dentistry/">{'general dentistry'}</CLink>
                            {
                                ' with advanced restorative, implant, periodontal, and surgical services. This range of care gives patients access to multiple treatment options within one dental practice.'
                            }
                        </p>
                        <p>
                            {'For patients interested in learning more, explore '}
                            <CLink to="/about-us/">
                                {'our approach to comprehensive dental care'}
                            </CLink>
                            {'.'}
                        </p>
                    </BgArticleBox>
                </div>
            </NearbyCare>
            <SingleArticle lightBg>
                <h2>{'Dental Services Available to Roselle Patients'}</h2>
                <p>
                    {
                        'From preventive appointments to more complex treatments, Magic Smile Dental offers services intended to protect oral health, address dental concerns, and restore comfortable function.'
                    }
                </p>
                <Cards>
                    <div>
                        <h3>{'Preventive Dentistry and Routine Dental Care'}</h3>
                        <p>
                            {
                                'Regular dental examinations and professional cleanings help identify potential problems and support healthier teeth and gums.'
                            }
                        </p>
                        <p>
                            {'Our '}
                            <CLink to="/general-dentistry/">{'general dentistry'}</CLink>
                            {
                                ' services include preventive examinations, dental cleanings, tooth-colored fillings, and other treatments for common oral health concerns.'
                            }
                        </p>
                        <p>
                            {
                                'If you have noticed sensitivity, discomfort while chewing, or changes in your gums, a dental examination can help determine the cause and identify appropriate next steps.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Restorative Dentistry for Damaged or Missing Teeth'}</h3>
                        <p>
                            {
                                'Damaged or missing teeth can make everyday activities, such as eating and speaking, uncomfortable.'
                            }
                        </p>
                        <p>
                            {'Magic Smile Dental provides '}
                            <CLink to="/cosmetic-dentistry/dental-crowns-bridges/">
                                {'dental crowns and bridges'}
                            </CLink>
                            {
                                ' to restore damaged teeth or replace certain missing teeth. Our team also offers '
                            }
                            <CLink to="/general-dentistry/endodontics/">
                                {'root canal treatment'}
                            </CLink>
                            {
                                ' when appropriate to address problems affecting the inside of a tooth.'
                            }
                        </p>
                        <p>
                            {
                                'Treatment recommendations depend on the condition of your teeth, gums, and supporting structures.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Dental Implants and Oral Surgery'}</h3>
                        <p>
                            {
                                'Missing one or more teeth? Dental implants may provide an option for restoring your ability to chew and smile comfortably.'
                            }
                        </p>
                        <p>
                            {'Magic Smile Dental offers '}
                            <CLink to="/dental-implants/">{'dental implant treatments'}</CLink>
                            {
                                ', including single-tooth implants, implant-supported dentures, and full-arch restoration options.'
                            }
                        </p>
                        <p>
                            {'Our practice also provides '}
                            <CLink to="/oral-dentistry/">{'oral surgery services'}</CLink>
                            {
                                ', including tooth extractions, wisdom tooth removal, and bone grafting.'
                            }
                        </p>
                        <p>
                            {
                                'During a consultation, our dental team can evaluate your oral health, review available treatments, and explain whether a surgical or nonsurgical option may be appropriate.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Cosmetic Dentistry and Clear Aligner Treatment'}</h3>
                        <p>
                            {
                                'If you are interested in improving the appearance of your smile, Magic Smile Dental provides cosmetic treatments tailored to different dental concerns.'
                            }
                        </p>
                        <p>
                            {'Our services include '}
                            <CLink to="/cosmetic-dentistry/porcelain-veneers/">
                                {'porcelain veneers'}
                            </CLink>
                            {', '}
                            <CLink to="/cosmetic-dentistry/professional-teeth-whitening/">
                                {'teeth whitening'}
                            </CLink>
                            {', and '}
                            <CLink to="/cosmetic-dentistry/invisalign/">
                                {'Invisalign clear aligners'}
                            </CLink>
                            {'.'}
                        </p>
                        <p>
                            {
                                'Veneers may help improve the appearance of certain chips, gaps, or discoloration. Clear aligners can gradually move teeth to address eligible alignment concerns.'
                            }
                        </p>
                        <p>
                            {
                                'A consultation helps determine which treatment, if any, is suitable for your dental health and smile goals.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Gum Disease Treatment and Emergency Dental Care'}</h3>
                        <p>
                            {
                                'Bleeding gums, persistent bad breath, or changes in gum health deserve professional attention.'
                            }
                        </p>
                        <p>
                            {'Magic Smile Dental provides periodontal evaluations and '}
                            <CLink to="/periodontics/lanap-laser-periodontics/">
                                {'LANAP laser gum disease treatment'}
                            </CLink>
                            {' for eligible patients.'}
                        </p>
                        <p>
                            {'We also offer '}
                            <CLink to="/emergency-dentistry/">{'emergency dentistry'}</CLink>
                            {
                                ' for concerns such as severe toothaches, cracked teeth, dental abscesses, and damaged restorations.'
                            }
                        </p>
                        <p>
                            {
                                'If you are experiencing a dental problem that cannot wait for a routine visit, contact our Linden office at '
                            }
                            <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                            {' to discuss your symptoms and appointment options.'}
                        </p>
                    </div>
                </Cards>
            </SingleArticle>
            <SingleArticle noBg>
                <h2>{'What Sets Magic Smile Dental Apart for Roselle Patients?'}</h2>
                <p>
                    {
                        'Choosing a dental practice involves more than finding a convenient location. The experience of the team, treatment options, and ability to communicate openly all matter.'
                    }
                </p>
                <p>{'At Magic Smile Dental, patients have access to:'}</p>
                <Cards>
                    <div>
                        <h3>{'Experienced Dental Professionals'}</h3>
                        <p>
                            {
                                'Our team includes Anatoly Bensianoff, DDS, who earned his dental degree from New York University College of Dentistry. The practice also has an oral surgeon on staff, supporting access to surgical and restorative treatment options.'
                            }
                        </p>
                        <p>
                            <CLink to="/about-us/meet-the-doctors/">{'Meet our dentists'}</CLink>
                            {' and learn about their backgrounds.'}
                        </p>
                    </div>
                    <div>
                        <h3>{'Modern Diagnostic Technology'}</h3>
                        <p>
                            {
                                'Our practice uses technology such as CBCT three-dimensional imaging, digital X-rays, and intraoral scanners to help evaluate dental conditions and plan treatments.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Multilingual Patient Communication'}</h3>
                        <p>
                            {
                                'Our team can communicate with patients in English, Spanish, Russian, Ukrainian, and Polish, helping patients better understand their dental concerns and available treatment options.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Comprehensive Treatment Options'}</h3>
                        <p>
                            {
                                'From preventive dentistry to implants, Invisalign, and periodontal therapy, we provide several types of dental care within the same Linden practice.'
                            }
                        </p>
                    </div>
                </Cards>
            </SingleArticle>
            <SingleArticle lightBg>
                <h2>{'Visiting Magic Smile Dental from Roselle, NJ'}</h2>
                <p>
                    {
                        'Magic Smile Dental is located in Linden, New Jersey, rather than within Roselle itself. Both communities are in Union County, with St. Georges Avenue running along part of their shared municipal boundary.'
                    }
                </p>
                <p>{'Our office address is:'}</p>
                <p>{'Magic Smile Dental, 515 North Wood Avenue, Suite 102, Linden, NJ 07036'}</p>
                <p>
                    {
                        'Patients traveling from Roselle can use St. Georges Avenue and North Wood Avenue as reference roads when planning their visit. Your exact route will depend on where you are starting in Roselle.'
                    }
                </p>
                <p>
                    {'For personalized directions, open '}
                    <CLink to="https://www.google.com/maps/dir/?api=1&destination=515+North+Wood+Avenue+Suite+102+Linden+NJ+07036">
                        {'driving directions to Magic Smile Dental on Google Maps'}
                    </CLink>
                    {'.'}
                </p>
                <p>
                    {'If you have questions about reaching our office, call '}
                    <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                    {' before your appointment.'}
                </p>
            </SingleArticle>
            <SingleArticle noBg>
                <h2>{'Planning Your First Dental Visit from Roselle'}</h2>
                <p>
                    {
                        'Your first appointment is an opportunity to discuss your dental concerns, review your oral health history, and understand your treatment options.'
                    }
                </p>
                <p>
                    {
                        'Depending on the type of visit, our dental team may recommend an examination or diagnostic imaging to better understand your needs. We encourage you to ask questions about treatment recommendations, expected appointments, and related costs.'
                    }
                </p>
                <p>
                    {'Before visiting, you can access our '}
                    <CLink to="/patient-center/">{'new patient information and forms'}</CLink>
                    {'.'}
                </p>
                <p>
                    {
                        'Magic Smile Dental also provides information about dental insurance and financing options, including CareCredit, Sunbit, and Alphaeon Credit. Financing is subject to eligibility and approval.'
                    }
                </p>
                <p>
                    {'Review our '}
                    <CLink to="/insurance-and-financing/">
                        {'insurance and financing information'}
                    </CLink>
                    {
                        ' or contact our team to discuss payment arrangements before scheduling treatment.'
                    }
                </p>
            </SingleArticle>
            <SingleArticle lightBg>
                <h2>{'Frequently Asked Questions About Dental Care Near Roselle, NJ'}</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="faq-0"
                        text={'Is Magic Smile Dental located in Roselle, NJ?'}
                    >
                        <p>
                            {
                                'No. Magic Smile Dental is physically located at 515 North Wood Avenue, Suite 102, in Linden, NJ 07036. The practice welcomes patients traveling from nearby Roselle for general, cosmetic, restorative, and other dental services. If you are planning your first visit, use Google Maps to find directions from your specific Roselle address.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-1"
                        text={'Can Roselle residents schedule routine dental exams and cleanings?'}
                    >
                        <p>
                            {'Yes. Roselle residents can '}
                            <CLink to="/contact-us/">{'contact Magic Smile Dental'}</CLink>
                            {
                                ' to schedule routine dental examinations and professional cleanings at our Linden office. Preventive appointments can help identify cavities, gum problems, and other oral health concerns before they progress. Our team can also discuss how frequently you may need dental visits based on your individual oral health.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-2"
                        text={'What should I do if I have a severe toothache in Roselle?'}
                    >
                        <p>
                            {'Contact Magic Smile Dental at '}
                            <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                            {
                                ' to explain your symptoms and ask about emergency appointment availability. The practice treats dental problems such as severe toothaches, cracked teeth, and dental abscesses. Treatment depends on the cause and severity of your condition. If you experience difficulty breathing, uncontrolled bleeding, or rapidly spreading facial swelling, seek emergency medical care immediately.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-3"
                        text={
                            'Does Magic Smile Dental offer dental implants for patients from Roselle?'
                        }
                    >
                        <p>
                            {
                                'Yes. Magic Smile Dental offers dental implant evaluations and treatment at its Linden office. Available options include single-tooth implants, implant-supported dentures, and full-arch restorations. During a consultation, the dental team can assess your oral health, jawbone condition, and treatment goals to determine whether implants are appropriate or whether other tooth replacement options should be considered.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-4"
                        text={'How can I check dental insurance and financing before my visit?'}
                    >
                        <p>
                            {'You can call Magic Smile Dental at '}
                            <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                            {
                                ' to discuss your insurance coverage and available payment arrangements. The practice provides information about dental insurance and third-party financing through CareCredit, Sunbit, and Alphaeon Credit. Before proceeding with treatment, ask about estimated out-of-pocket expenses, insurance benefits, financing eligibility, and any applicable repayment terms.'
                            }
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>
            <SingleArticle noBg>
                <h2>{'Schedule Your Dental Appointment Near Roselle, NJ'}</h2>
                <p>
                    {
                        'Whether you need a routine cleaning, restorative treatment, or a consultation about your smile, Magic Smile Dental welcomes patients from Roselle at our Linden office.'
                    }
                </p>
                <p>
                    {
                        'Take the next step toward addressing your dental needs with a team that can explain your options and help you plan your care.'
                    }
                </p>
                <p>
                    {'Call '}
                    <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                    {' or '}
                    <CLink to="/contact-us/">{'contact Magic Smile Dental'}</CLink>
                    {' to schedule your consultation.'}
                </p>
            </SingleArticle>
            <BottomBannerConsult
                title={
                    <h2>
                        Care for Your Smile.<strong>Plan Your Visit from Roselle.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/general-dentistry/banner.jpg"
                    alt="Smiling patient"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}

export const Head = () => (
    <Seo
        pathname="dentist-roselle-nj"
        title="Dentist in Roselle, NJ | Magic Smile Dental"
        description="Looking for a dentist near Roselle, NJ? Visit Magic Smile Dental in Linden for general, cosmetic, implant, and emergency care. Call to schedule."
        preserveDescription
    />
);
