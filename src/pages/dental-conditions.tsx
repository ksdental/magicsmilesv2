import { AccordionItem } from '@/AccordionItem';
import { Accordion } from '@/AccordionPrimitive';
import { BasicHero } from '@/BasicHero';
import { BottomBannerConsult } from '@/BottomBannerConsult';
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
                text="Dental Conditions - Linden, NJ"
                title={
                    <h2>
                        From Routine Care to
                        <strong>Complex Procedures</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/dental-conditions/hero.jpg"
                        alt="doctor treating a patient in a dental office"
                        layout="fullWidth"
                    />
                }
            />

            <SingleArticle noBg>
                <h2>
                    <strong>Comprehensive</strong>Dental Solutions
                </h2>
                <p style={{ marginBottom: '40px' }}>
                    Experience comprehensive dental care at Magic Smile Dental, where we specialize
                    in addressing many standard and complex dental concerns. With our expertise and
                    advanced training as board-certified dentists, we can restore your smile to
                    optimal health and beauty. From removing infected wisdom teeth to replacing
                    missing teeth, trust us to provide personalized solutions tailored to your needs
                    in Linden, NJ.
                </p>
                <Accordion type="single" defaultValue="0" collapsible>
                    <AccordionItem value="1" text="Impacted Teeth">
                        <p>
                            Impacted teeth are those that haven’t erupted fully through the gums.
                            They can occur with stubborn baby teeth, wisdom teeth, and sometimes
                            permanent adult teeth. There are various reasons why adult teeth can
                            have a difficult time erupting. Among the most common reasons are a
                            higher-than-normal number of teeth in the mouth, obstructive growths,
                            and overcrowding from surrounding teeth. Impacted teeth can cause
                            several problems for the patient starting at an early age.
                        </p>
                        <p>
                            If these teeth cannot come in fully, the child may have difficulty
                            eating normally, as well as pain and tooth misalignment. In many other
                            cases, symptoms may not appear until an X-ray presents the issue. We can
                            offer a few options to resolve impacted teeth, including working with an
                            orthodontist to guide the tooth to the proper placement. In the case of
                            wisdom teeth, we often recommend extraction.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="2" text="Problematic Wisdom Teeth">
                        <p>
                            Commonly known as “wisdom teeth,” third molars typically emerge during
                            the late teenage years or early 20s and can potentially cause various
                            oral health problems. Almost 90% of people have had at least one
                            impacted wisdom tooth, indicating insufficient space for the teeth to
                            erupt into a normal position. Their location in the very back of the
                            mouth makes them hard to clean and, therefore, more prone to decay,
                            infection, gum disease, pain, and even the development of cysts or
                            tumors in the surrounding tissues!
                        </p>
                        <p>
                            They can also throw neighboring healthy teeth out of alignment. Often,
                            wisdom teeth are located close to nerves, sinus cavities, and other
                            teeth, so you must have a skilled expert remove them if they become
                            impacted. As board-certified dentists, we’re exceptionally qualified to
                            remove your wisdom teeth while maintaining comfort and safety.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="3" text="Broken & Infected Teeth">
                        <p>
                            Teeth can become broken or infected for several reasons, including
                            trauma and decay. Bacterial buildup due to poor dental hygiene is often
                            the cause of dental infections. Sometimes, repairs, medications, or a
                            combination of both enable our doctors to save your tooth. In such
                            cases, we thoroughly evaluate your teeth to determine the treatment best
                            suits your issue. When extensive damage or decay occurs, some teeth
                            cannot be rehabilitated through treatment. Though we do our utmost to
                            preserve your natural teeth, extraction may be our only option.
                        </p>
                        <p>
                            The extraction process for most teeth is pretty straightforward. After
                            making you comfortable with anesthesia, we gently grip the tooth with
                            forceps and carefully pull it loose from the socket. Once removed,
                            unless it’s a wisdom tooth, it should be replaced to restore the
                            function and esthetics of your smile and protect your jaw from
                            deterioration. Dental implants are the best overall tooth replacement
                            option, not just in function and aesthetics but also for long-lasting
                            performance.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="4" text="Missing Teeth">
                        <p>
                            Missing teeth can limit your ability to eat, speak, and smile
                            comfortably, and they may have more profound implications beyond simple
                            chewing function and smile esthetics. Teeth rely on each other for
                            support. When one is missing, the teeth on either side of the gap can
                            shift out of alignment, eventually requiring orthodontic treatment.
                            Further, the absence of tooth roots in the jawbone can cause the jawbone
                            to begin receding, leading to further tooth loss and giving your face an
                            unhealthy, sunken, and even prematurely aged appearance!
                        </p>
                        <p>
                            Dental implants, recognized as today’s “gold standard” for tooth
                            replacement, can prevent you from experiencing any of those issues.
                            Suppose you follow a tooth extraction or trauma-related tooth loss with
                            dental implant placement. In that case, you can continue eating the
                            foods you love, speak and smile without embarrassment, and even
                            significantly boost your self-confidence. All this can be yours since
                            nothing looks more authentic or lasts longer than our dental implants in
                            Linden, NJ. Even if you’ve already begun to suffer bone loss, our
                            board-certified dentists can reverse it through bone grafting before
                            placing your dental implants.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="5" text="Severe Bone Loss">
                        <p>
                            Your jawbone relies on the stimulation of tooth roots and the regular
                            sensation of chewing to keep it healthy. The bone can deteriorate with
                            tooth loss unless those missing teeth are replaced quickly. This bone
                            loss has many short-term and long-term consequences. You can lose more
                            teeth through a “domino effect” of tooth loss. Your facial features can
                            sink, and an aged, unhealthy look can replace your distinctive
                            appearance you won’t want or even recognize.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="6" text="LANAP for Gum Disease Treatment">
                        <p>
                            We treat periodontal disease using the advanced{' '}
                            <CLink to={getNavLink('lanap laser periodontics')}>
                                LANAP (Laser-Assisted New Attachment Procedure)
                            </CLink>{' '}
                            technology, providing a minimally invasive and effective solution. LANAP
                            targets and removes diseased tissue precisely, leaving healthy tissue
                            intact while promoting regeneration and healing.
                        </p>
                        <p>
                            This innovative laser treatment helps reduce gum inflammation, reverse
                            bone loss, and encourage the reattachment of gums to the teeth. Compared
                            to traditional gum surgery, LANAP offers less discomfort, quicker
                            recovery times, and improved long-term oral health. Our goal is to
                            restore your gum health while ensuring your comfort throughout the
                            process.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="7" text="Loose Dentures">
                        <p>
                            Treating loose dentures typically involves adjustments and enhancements
                            to improve their fit and function. Denture adhesive can provide
                            temporary relief by enhancing stability, but a more permanent solution
                            often requires professional intervention. We may adjust the dentures’
                            fit by adding or reshaping the acrylic base or changing the clasps for
                            better retention.
                        </p>
                        <p>
                            In some cases, denture relining or rebasing may be necessary to ensure a
                            snug fit against the gums. For individuals experiencing severe looseness
                            or discomfort, implant-supported dentures offer a long-term solution by
                            anchoring the dentures securely to dental implants in the jawbone.
                        </p>
                    </AccordionItem>
                    <AccordionItem value="8" text="Discolored Teeth">
                        <p>
                            Discolored teeth can significantly impact your confidence and
                            willingness to smile. Whether caused by coffee, tea, wine, tobacco, or
                            natural aging, tooth discoloration can make even the healthiest smiles
                            appear less attractive. At Magic Smile Dental, we offer{' '}
                            <CLink to={getNavLink('teeth whitening')}>
                                professional whitening treatments
                            </CLink>{' '}
                            designed to restore the natural brightness of your teeth.
                        </p>
                        <p>
                            Our advanced whitening procedures are safe, effective, and tailored to
                            your specific needs, ensuring optimal results. With our expert care, you
                            can achieve a radiant smile that enhances your overall appearance and
                            boosts your self-esteem. Say goodbye to discolored teeth and hello to a
                            brighter, more confident smile with our professional whitening
                            treatments!
                        </p>
                    </AccordionItem>
                    <AccordionItem value="9" text="Cracked, Mishappen, or Discolored Teeth">
                        <p>
                            Mishappen, discolored, or cracked teeth can affect your smile’s
                            appearance and function. These imperfections, whether from injury, wear,
                            or natural development, can diminish your confidence and impact your
                            oral health. We offer{' '}
                            <CLink to={getNavLink('porcelain veneers')}>porcelain veneers</CLink>{' '}
                            and <CLink to={getNavLink('dental crowns & bridges')}>crowns</CLink> as
                            effective solutions. Veneers are thin, custom-made shells designed to
                            cover the front surface of your teeth, providing a natural and
                            aesthetically pleasing appearance.
                        </p>
                        <p>
                            On the other hand, crowns encase the entire tooth, restoring its shape,
                            strength, and function. Both options are crafted from high-quality
                            materials that blend seamlessly with natural teeth, offering durable and
                            long-lasting results. With veneers and crowns, we can transform your
                            smile, enhancing its beauty and functionality while boosting your
                            self-esteem.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SingleArticle>

            <BottomBannerConsult
                title={
                    <h2>
                        <strong> We Can Fix</strong> the Most Complex Dental Problems.
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/dental-conditions/banner.jpg"
                    alt="patient standing in a dental office"
                    width={560}
                    height={380}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
