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

export default function ElizabethPage() {
    return (
        <Fragment>
            <BasicHero
                heading="Dentist Serving Elizabeth, NJ"
                text="Elizabeth, NJ — Care in Linden"
                title={
                    <h2>
                        Comprehensive Dental Care<strong>Close to Elizabeth</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/cosmetic-dentistry/hero.jpg"
                        alt="Dr. Bensianoff showing a patient a handheld mirror in a treatment room"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <SingleArticle>
                <h2>{'Dentist Serving Elizabeth, NJ for Comprehensive Dental Care'}</h2>
                <p>
                    {
                        'Looking for a dentist in Elizabeth, NJ? Magic Smile Dental welcomes patients from Elizabeth to our dental office in neighboring Linden. Our team provides preventive, restorative, cosmetic, and implant dentistry to help patients maintain healthy teeth, address dental problems, and explore treatment options for their smiles.'
                    }
                </p>
                <p>
                    {
                        'Whether you need a routine checkup, treatment for a painful tooth, or a consultation about missing teeth, we’re here to help you make informed decisions about your oral health.'
                    }
                </p>
                <p>
                    {'Schedule a dental consultation or call '}
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
                        src="../../assets/images/about-us/2.jpg"
                        alt="Dentists at Magic Smile Dental in Linden"
                        width={800}
                    />
                    <BgArticleBox>
                        <h2>
                            {'Looking for a Dentist in Elizabeth, NJ? Explore Our Care in Linden'}
                        </h2>
                        <p>
                            {
                                'Finding a dental practice that offers the services you need can make managing your oral health more convenient. Magic Smile Dental serves patients from Elizabeth at our Linden office, providing access to '
                            }
                            <CLink to="/general-dentistry/">{'general dentistry'}</CLink>
                            {' alongside advanced restorative and specialty treatments.'}
                        </p>
                        <p>
                            {
                                'Our team can help with preventive visits, damaged or missing teeth, gum disease, and cosmetic concerns. Patients considering more extensive treatment can also discuss options such as '
                            }
                            <CLink to="/dental-implants/">{'dental implants'}</CLink>
                            {' and '}
                            <CLink to="/oral-dentistry/">{'oral surgery'}</CLink>
                            {'.'}
                        </p>
                        <p>
                            {
                                'With multiple dental professionals, modern diagnostic technology, and communication available in several languages, we aim to make appointments informative and comfortable.'
                            }
                        </p>
                        <p>
                            {'Explore '}
                            <CLink to="/about-us/">
                                {'our approach to comprehensive dental care'}
                            </CLink>
                            {'.'}
                        </p>
                    </BgArticleBox>
                </div>
            </NearbyCare>
            <SingleArticle lightBg>
                <h2>{'Dental Treatments Available to Elizabeth-Area Patients'}</h2>
                <p>
                    {
                        'At Magic Smile Dental, patients can receive care for everyday dental concerns as well as more complex oral health needs. Treatment recommendations are based on individual examinations, dental history, and clinical findings.'
                    }
                </p>
                <Cards>
                    <div>
                        <h3>{'Preventive and General Dentistry for Families'}</h3>
                        <p>
                            {
                                'Regular dental care can help identify cavities, gum problems, and other oral health changes before they become more complicated.'
                            }
                        </p>
                        <p>
                            {'Our '}
                            <CLink to="/general-dentistry/">{'general dentistry services'}</CLink>
                            {
                                ' include dental examinations, professional cleanings, tooth-colored fillings, and other treatments for maintaining oral health. We provide family-focused care and help patients understand the next steps for keeping their teeth and gums healthy.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Dental Implants, Crowns, and Bridges'}</h3>
                        <p>
                            {
                                'Damaged or missing teeth can make chewing uncomfortable and affect how you feel about your smile. We provide restorative treatment options based on the number of affected teeth, remaining tooth structure, and overall oral health.'
                            }
                        </p>
                        <p>
                            {'Our services include '}
                            <CLink to="/dental-implants/">{'dental implants'}</CLink>
                            {' for replacing missing teeth and '}
                            <CLink to="/cosmetic-dentistry/dental-crowns-bridges/">
                                {'dental crowns and bridges'}
                            </CLink>
                            {
                                ' for restoring damaged teeth or filling gaps. Our team can explain which approach may be appropriate following an evaluation.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Cosmetic Dentistry and Invisalign Clear Aligners'}</h3>
                        <p>
                            {
                                'If you would like to address tooth discoloration, chipped teeth, gaps, or alignment concerns, our '
                            }
                            <CLink to="/cosmetic-dentistry/">{'cosmetic dentistry services'}</CLink>
                            {' offer several treatment options.'}
                        </p>
                        <p>
                            {'Patients can explore '}
                            <CLink to="/cosmetic-dentistry/professional-teeth-whitening/">
                                {'professional teeth whitening'}
                            </CLink>
                            {', '}
                            <CLink to="/cosmetic-dentistry/porcelain-veneers/">
                                {'porcelain veneers'}
                            </CLink>
                            {', and cosmetic restorations. We also provide '}
                            <CLink to="/cosmetic-dentistry/invisalign/">
                                {'Invisalign clear aligners'}
                            </CLink>
                            {
                                ' for eligible patients who want to straighten their teeth without traditional braces.'
                            }
                        </p>
                        <p>
                            {
                                'Our dentists will assess your smile and discuss realistic treatment goals before recommending an approach.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Emergency Dentistry for Tooth Pain and Dental Injuries'}</h3>
                        <p>
                            {
                                'A severe toothache, broken tooth, or dental infection can interfere with eating, sleeping, and daily activities. These symptoms deserve timely professional attention.'
                            }
                        </p>
                        <p>
                            {
                                'Magic Smile Dental provides emergency dental evaluations and treatment for conditions such as toothaches, dental abscesses, cracked teeth, and lost restorations.'
                            }
                        </p>
                        <p>
                            {'If you’re experiencing a dental problem in Elizabeth, call '}
                            <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                            {
                                ' to explain your symptoms and ask about appointment availability. Uncontrolled bleeding, significant facial swelling affecting breathing, or serious facial trauma requires immediate emergency medical care.'
                            }
                        </p>
                    </div>
                    <div>
                        <h3>{'Gum Disease Treatment and Oral Surgery'}</h3>
                        <p>
                            {
                                'Bleeding gums, persistent bad breath, or gum recession may indicate periodontal problems that require professional evaluation.'
                            }
                        </p>
                        <p>
                            {'Our practice provides '}
                            <CLink to="/periodontics/lanap-laser-periodontics/">
                                {'LANAP laser periodontal treatment'}
                            </CLink>
                            {' for appropriate gum disease cases. We also offer '}
                            <CLink to="/oral-dentistry/">{'oral surgery services'}</CLink>
                            {
                                ', including tooth extractions, wisdom tooth procedures, and bone grafting.'
                            }
                        </p>
                        <p>
                            {
                                'These services give patients access to additional treatment options within the same dental practice, depending on their clinical needs.'
                            }
                        </p>
                    </div>
                </Cards>
            </SingleArticle>
            <SingleArticle noBg>
                <h2>{'What Makes Magic Smile Dental Different?'}</h2>
                <p>
                    {
                        'Choosing a dental practice involves more than finding a location. Patients also want to understand the team’s experience, available treatment options, and how their concerns will be addressed.'
                    }
                </p>
                <p>{'At Magic Smile Dental, patients benefit from:'}</p>
                <ul>
                    <li>
                        {
                            'An experienced dental team that includes Anatoly Bensianoff, DDS, and board-certified oral and maxillofacial surgeon Yakov Yakubov.'
                        }
                    </li>
                    <li>
                        {
                            'Comprehensive services ranging from routine exams to implants and advanced '
                        }
                        <CLink to="/oral-dentistry/">{'oral surgery'}</CLink>
                        {'.'}
                    </li>
                    <li>
                        {
                            'Dental technology including CBCT imaging, digital X-rays, intraoral scanners, and LANAP laser treatment.'
                        }
                    </li>
                    <li>
                        {
                            'Multilingual communication in English, Spanish, Polish, Russian, and Ukrainian.'
                        }
                    </li>
                </ul>
                <p>
                    {
                        'Our goal is to explain dental findings clearly, discuss available treatment approaches, and help patients make informed choices.'
                    }
                </p>
                <p>
                    <CLink to="/about-us/meet-the-doctors/">{'Meet our dentists'}</CLink>
                    {' and learn about their backgrounds.'}
                </p>
            </SingleArticle>
            <SingleArticle lightBg>
                <h2>{'Visiting Our Linden Dental Office from Elizabeth, NJ'}</h2>
                <p>
                    {
                        'Magic Smile Dental is located in Linden, a neighboring community immediately southwest of Elizabeth in Union County.'
                    }
                </p>
                <p>{'515 North Wood Avenue, Suite 102, Linden, NJ 07036'}</p>
                <div>
                    <h3>{'Driving Directions from Elizabeth, NJ'}</h3>
                    <p>
                        {
                            'Driving from Elizabeth to Magic Smile Dental? Head southwest toward neighboring Linden. Depending on where you start in Elizabeth, your navigation may use local streets or U.S. Routes 1 and 9 before directing you toward North Wood Avenue. Our office is at 515 North Wood Avenue, Suite 102, Linden, NJ 07036. Check your route and traffic conditions before leaving, as directions vary by starting point.'
                        }
                    </p>
                    <p>
                        <CLink to="https://www.google.com/maps/dir/?api=1&origin=Elizabeth%2C+NJ&destination=515+North+Wood+Avenue+Suite+102+Linden+NJ+07036">
                            {'View driving directions from Elizabeth, NJ on Google Maps'}
                        </CLink>
                        {'.'}
                    </p>
                    <p>
                        {'For questions about accessing the office or scheduling your visit, call '}
                        <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                        {'.'}
                    </p>
                </div>
            </SingleArticle>
            <SingleArticle noBg>
                <h2>{'Preparing for Your First Dental Visit'}</h2>
                <p>
                    {
                        'We want patients traveling from Elizabeth to feel informed about their appointments before arriving.'
                    }
                </p>
                <p>
                    {'You can begin by reviewing our '}
                    <CLink to="/patient-center/">{'patient center'}</CLink>
                    {' and '}
                    <CLink to="/patient-center/">{'new-patient forms'}</CLink>
                    {
                        '. If you have dental insurance, contact our team to discuss your plan and determine what information is needed to verify benefits.'
                    }
                </p>
                <p>
                    {
                        'During your appointment, your dentist can evaluate your oral health, discuss relevant findings, and recommend treatment options when necessary.'
                    }
                </p>
                <p>
                    {
                        'For patients considering more extensive procedures, we also provide information about '
                    }
                    <CLink to="/insurance-and-financing/">
                        {'dental insurance and financing options'}
                    </CLink>
                    {
                        ', including CareCredit, Sunbit, and Alphaeon Credit. Financing is subject to approval and applicable terms.'
                    }
                </p>
            </SingleArticle>
            <SingleArticle lightBg>
                <h2>{'Frequently Asked Questions About Visiting a Dentist Near Elizabeth, NJ'}</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="faq-0"
                        text={'Is Magic Smile Dental located in Elizabeth, NJ?'}
                    >
                        <p>
                            {
                                'Magic Smile Dental is located at 515 North Wood Avenue, Suite 102, in Linden, NJ, rather than within Elizabeth city limits. Our dental practice welcomes patients traveling from nearby Elizabeth for general, restorative, cosmetic, and specialty dental services. You can review directions to our office before scheduling an appointment.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-1"
                        text={
                            'Can families from Elizabeth receive routine dental care at Magic Smile Dental?'
                        }
                    >
                        <p>
                            {'Yes. Magic Smile Dental provides family-focused '}
                            <CLink to="/general-dentistry/">{'general dentistry'}</CLink>
                            {
                                ', including routine dental examinations, cleanings, and tooth-colored fillings. These services help patients maintain oral health and address common dental problems. Our dentists can also evaluate concerns involving damaged teeth, gums, or bite function and discuss whether additional treatment is appropriate.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-2"
                        text={
                            'What should I do if I have a severe toothache or broken tooth in Elizabeth?'
                        }
                    >
                        <p>
                            <CLink to="/contact-us/">{'Contact Magic Smile Dental'}</CLink>
                            {' at '}
                            <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                            {
                                ' to describe your symptoms and ask about emergency appointment availability. Our practice evaluates conditions such as toothaches, cracked teeth, dental abscesses, and lost fillings or crowns. Severe swelling affecting breathing, uncontrolled bleeding, or serious facial injuries require immediate emergency medical attention.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-3"
                        text={
                            'Does Magic Smile Dental offer tooth replacement options for patients from Elizabeth?'
                        }
                    >
                        <p>
                            {'Yes. Magic Smile Dental provides '}
                            <CLink to="/dental-implants/">{'dental implants'}</CLink>
                            {
                                ', crowns, bridges, and other restorative options for patients with damaged or missing teeth. Our dentists evaluate your dental condition, treatment goals, and oral health before recommending a solution. Patients with extensive tooth loss may also discuss implant-supported restorations and full-arch treatment options.'
                            }
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        value="faq-4"
                        text={'How can I schedule an appointment and check my dental insurance?'}
                    >
                        <p>
                            {'You can call Magic Smile Dental at '}
                            <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                            {' or visit our '}
                            <CLink to="/contact-us/">{'contact page'}</CLink>
                            {
                                ' to request an appointment. Our team can help you review insurance information and discuss available payment arrangements. We also provide third-party financing options for qualifying applicants. Consider completing the available patient forms before your first visit.'
                            }
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>
            <SingleArticle noBg>
                <h2>{'Schedule Your Dental Consultation Near Elizabeth, NJ'}</h2>
                <p>
                    {
                        'Take the next step toward better oral health with Magic Smile Dental. Our Linden office welcomes patients from Elizabeth seeking preventive, cosmetic, restorative, and advanced dental treatment.'
                    }
                </p>
                <p>
                    {
                        'Contact our team to discuss your dental needs, explore appointment options, and plan your visit.'
                    }
                </p>
                <p>
                    {'Call '}
                    <CLink to="tel:+19084865000">{'(908) 486-5000'}</CLink>
                    {' or '}
                    <CLink to="https://www.zocdoc.com/booking-link/practice/magic-smile-dental-187658">
                        {'schedule your dental consultation'}
                    </CLink>
                    {'.'}
                </p>
            </SingleArticle>
            <BottomBannerConsult
                title={
                    <h2>
                        Care for Your Smile.<strong>Plan Your Visit from Elizabeth.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/cosmetic-dentistry/before-and-after/banner.jpg"
                    alt="Dr. Bensianoff with a patient at the Linden office"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
export const Head = () => (
    <Seo
        pathname="dentist-elizabeth-nj"
        title="Dentist in Elizabeth NJ | Magic Smile Dental"
        description="Looking for a dentist near Elizabeth, NJ? Visit Magic Smile Dental in Linden for exams, implants, cosmetic and emergency care. Call to schedule."
        preserveDescription
    />
);
