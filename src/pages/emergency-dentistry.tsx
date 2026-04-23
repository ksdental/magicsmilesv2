import { AccordionItem } from '@/AccordionItem';
import { Accordion } from '@/AccordionPrimitive';
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
                text="Emergency Dentistry - Linden, NJ"
                title={
                    <h2>
                        From Toothaches to Accidents,
                        <strong>We’re Here for You</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/emergency-dentistry/hero.jpg"
                        alt="Man with a toothache"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />

            <SingleArticle titleNextLine>
                <h2>
                    The First Choice in
                    <strong> Emergency Dentistry</strong>
                </h2>
                <p>
                    Ignoring dental pain, whether acute or chronic, can lead to permanent damage
                    affecting oral and overall health. Differentiating between issues that can wait
                    and those needing urgent care can be challenging. However, persistent severe
                    oral pain or bleeding always indicates an emergency.
                </p>
                <p>
                    Dental emergencies cause physical discomfort and disrupt daily life,
                    highlighting the importance of identifying a reliable emergency dentist. At
                    Magic Smile Dental, our compassionate team is committed to promptly addressing
                    emergencies and restoring smiles and overall health with urgent dental care in
                    Linden, NJ.
                </p>
            </SingleArticle>

            <BgArticle darkBg imgRight centerImage>
                <div>
                    <StaticImage
                        src="../../assets/images/emergency-dentistry/1.png"
                        alt="Emergency dentistry graphic"
                        width={700}
                        height={729}
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>Dental Emergencies</strong> We Treat
                        </h2>
                        <ul>
                            <li>Tooth abscess</li>
                            <li>Acute or chronic severe toothache</li>
                            <li>Cracked/damaged tooth</li>
                            <li>Dislodged or knocked out tooth</li>
                            <li>Swollen oral tissue</li>
                            <li>Dry socket</li>
                            <li>Broken tooth</li>
                            <li>Lost dental filling or crown</li>
                            <li>Dental bleeding</li>
                        </ul>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <SingleArticle lightBg>
                <h2>
                    Select <strong>Emergency Dentistry Treatments</strong>
                </h2>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Tooth Abscess">
                        <p>
                            A tooth abscess is a collection of pus caused by a bacterial infection.
                            The most apparent symptom is intense throbbing pain in the affected area
                            that starts suddenly and gradually worsens. Other symptoms include
                            sensitivity to hot or cold food and beverages and facial redness or
                            swelling. An emergency root canal is a first-line treatment for an
                            abscessed tooth because the infection has nearly always infiltrated the
                            dental pulp.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="Severe Toothache">
                        <p>
                            Toothaches can be more than a painful nuisance—your body tells you
                            something isn’t right in your mouth. When you experience sudden and
                            unexplainable tooth pain, call Magic Smile Dental, and we’ll fit you
                            into our schedule.
                        </p>
                        <p>
                            Our qualified emergency dental team has the advanced skills and gentle
                            touch to diagnose and treat the underlying issue. If the toothache is
                            caused by an infected dental pulp, an emergency root canal can alleviate
                            the pain and often save the tooth from extraction.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="3" text="Cracked or Damaged Teeth">
                        <p>
                            Sometimes, it’s obvious you cracked a tooth; for example, if you bite on
                            something hard and part of your tooth around a filling breaks off. In
                            other cases, a crack can be asymptomatic or produce fleeting symptoms
                            that you may ignore. If the crack extends from the chewing surface of
                            your tooth vertically down into the pulp, a root canal can prevent
                            further damage.
                        </p>
                        <p>
                            But if the crack extends below the gum line, it’s no longer treatable
                            and will require extraction, followed by a{' '}
                            <CLink to={getNavLink('dental implants')}>dental implant</CLink> or{' '}
                            <CLink to={getNavLink('dental crowns & bridges')}>bridge</CLink>. Other
                            types of damage include craze lines, fractured cusps, split teeth, and
                            vertical root fractures.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Dislodged or Knocked Out Tooth">
                        <p>
                            A dislodged or knocked-out tooth should be treated within 12 to 24 hours
                            to minimize trauma and save your tooth. If you lose a tooth due to
                            trauma or it comes loose from infection, it’s important to be seen by
                            your dentist as soon as possible.
                        </p>
                        <p>
                            A missing tooth can affect the surrounding teeth and put you at high
                            risk for infection. Avoid food and drink and rinse with warm water to
                            minimize pain and bleeding. To increase the chances of saving your
                            tooth, keep it in milk or saliva until you can see our team.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="5" text="Swollen Oral Tissue">
                        <p>
                            Gums that won’t stop bleeding, especially if accompanied by pain and
                            swelling, can indicate an underlying dental or health issue. Likewise,
                            if your mouth or jaw suddenly becomes swollen for no apparent reason,
                            call Magic Smile Dental for emergency dentistry in Linden, NJ. An
                            infection, irritation to your lymph nodes, or another severe issue could
                            cause these symptoms and require immediate attention from a dental
                            professional.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="6" text="Dry Socket">
                        <p>
                            After a tooth extraction, a protective blood clot typically forms over
                            the underlying bone and nerves. If the blood clot doesn’t form or gets
                            dislodged, sensitive underlying tissue is exposed. When nerves are
                            exposed, this can be an excruciating experience that only gets worse if
                            you delay treatment. Call Magic Smile Dental immediately to alleviate
                            severe pain, and we’ll fit you into our schedule. Treatment involves
                            gently rinsing and packing the socket with a medicated gauze pad. This
                            process may need to be repeated until a blood clot forms and your pain
                            subsides.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BgArticle alignBottom noBg>
                <div>
                    <StaticImage
                        src="../../assets/images/emergency-dentistry/2.jpg"
                        alt="Patient getting a CBCT scan"
                        layout="fullWidth"
                    />
                    <BgArticleBox>
                        <h2>
                            <strong>Exceptional Dental Care</strong> for the Unexpected
                        </h2>
                        <p>
                            At Magic Smile Dental, we use advanced dental technology to diagnose
                            issues and provide the emergency dentistry you need swiftly and
                            accurately. Our facilities and equipment adhere to the latest safety
                            standards, including stringent sterilization protocols for your health,
                            safety, and peace of mind. To alleviate discomfort and anxiety, we offer
                            various types of sedation tailored to your unique needs.
                        </p>
                        <p>
                            We understand the stress of dealing with a dental emergency and want to
                            ease your concerns about affordability. We offer{' '}
                            <CLink to={getNavLink('insurance & financing')}>
                                financing options
                            </CLink>{' '}
                            to ensure that excellent, comfortable, and accessible dental care is
                            always available, whether for scheduled visits or unforeseen
                            circumstances impacting your smile.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>
            <CenterIcon />

            <BgArticle alignTop imgRight noBg>
                <div>
                    <StaticImage
                        src="../../assets/images/emergency-dentistry/3.jpg"
                        alt="Person tapping on a smartphone"
                        layout="fullWidth"
                    />
                    <BgArticleBox>
                        <h2>
                            Is My Emergency
                            <strong> Dental or Medical?</strong>
                        </h2>
                        <p>
                            Suppose you’re experiencing head or neck pain, bleeding uncontrollably,
                            feeling dizzy, or experiencing severe head trauma. In that case, seeking
                            immediate medical attention by calling 911 or getting transported to the
                            nearest medical facility is crucial. Medical personnel are best equipped
                            to assist you with these urgent symptoms.
                        </p>
                    </BgArticleBox>
                </div>
            </BgArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        Do You Need <strong>Emergency Dental Treatment?</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/emergency-dentistry/banner.jpg"
                    alt="Doctor shaking hands with a patient"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
