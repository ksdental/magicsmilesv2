import { CLink } from '@/CLink';
import { ImgArticle, ImgArticleSection } from '@/ImgArticle';
import { getNavLink } from '@/layout/NavLinks';
import { StaticImage } from 'gatsby-plugin-image';

export const Treatments = () => {
    return (
        <ImgArticleSection>
            <h2>
                <strong>Top Treatments</strong> for Top-Tier Smile Results
            </h2>
            <ImgArticle
                number="1"
                image={
                    <StaticImage
                        src="../../../assets/images/home/treatments/sedation.jpg"
                        alt="doctor treating patient in dental office"
                        width={630}
                        height={650}
                    />
                }
            >
                <div>
                    <h3>LANAP</h3>
                    <p>
                        <CLink to={getNavLink('lanap procedure')}>LANAP</CLink> is a revolutionary
                        laser treatment for gum disease. It offers a less invasive alternative to
                        traditional gum surgery. This advanced procedure only targets and removes
                        diseased tissue, promoting healing and regeneration without cutting or
                        stitching.
                    </p>
                    <p>
                        LANAP has excellent success rates and virtually no downtime, making it a
                        crucial option for reversing your periodontal disease to save your smile.
                    </p>
                </div>
            </ImgArticle>
            <ImgArticle
                imgRight
                number="2"
                image={
                    <StaticImage
                        src="../../../assets/images/home/treatments/implant.jpg"
                        alt="dental implant"
                        width={630}
                        height={650}
                    />
                }
            >
                <div>
                    <h3>Dental Implants</h3>
                    <p>
                        <CLink to={getNavLink('dental implants')}>Dental implants</CLink> are a
                        permanent solution for replacing missing teeth. Whether you’re missing one
                        tooth, several teeth in a row, or need a full-mouth restoration, implants
                        provide a stable and natural-looking result.
                    </p>
                    <p>
                        With implant posts fused directly to the jawbone, implants offer a secure
                        foundation for replacement teeth that look, feel, and function like your
                        own.
                    </p>
                </div>
            </ImgArticle>
            <ImgArticle
                number="3"
                image={
                    <StaticImage
                        src="../../../assets/images/home/treatments/implants.jpg"
                        alt="all on 4 dental implants"
                        width={630}
                        height={650}
                    />
                }
            >
                <div>
                    <h3>All-On-X Full Arch Dental Implants</h3>
                    <p>
                        <CLink to={getNavLink('allonx')}>
                            The All-on-X full arch dental implants
                        </CLink>{' '}
                        are designed for patients who need to replace an entire arch of teeth. This
                        innovative solution uses a strategic number of implants to support a full
                        set of prosthetic teeth, giving you a complete, natural-looking smile in
                        just one procedure.
                    </p>
                    <p>
                        Unlike traditional dentures, full mouth dental implants won’t limit your
                        food choices, so you can enjoy a fresh salad, juicy steak, and crisp apples
                        again!
                    </p>
                </div>
            </ImgArticle>
            <ImgArticle
                imgRight
                number="4"
                image={
                    <StaticImage
                        src="../../../assets/images/home/treatments/root-canal.jpg"
                        alt="person with toothache"
                        width={630}
                        height={650}
                    />
                }
            >
                <div>
                    <h3>Root Canal Treatment</h3>
                    <p>
                        A <CLink to={getNavLink('endodontics')}>root canal</CLink> is a comfortable,
                        effective procedure to treat infected or damaged tooth pulp, relieving pain
                        and preserving your natural tooth. By removing the infection, cleaning the
                        root canal, and sealing it, we prevent further issues and protect your oral
                        health. Modern root canal treatments are a reliable way to save a tooth that
                        might otherwise need extraction, helping you maintain a healthy, pain-free
                        smile for years to come.
                    </p>
                </div>
            </ImgArticle>
            <ImgArticle
                number="6"
                image={
                    <StaticImage
                        src="../../../assets/images/home/treatments/crown.jpg"
                        alt="dental crowns & bridges"
                        width={630}
                        height={650}
                    />
                }
            >
                <div>
                    <h3>Crowns & Bridges</h3>
                    <p>
                        At Magic Smile Dental in Linden, NJ, we specialize in restoring your smile
                        with expertly crafted{' '}
                        <CLink to={getNavLink('dental crowns & bridges')}>
                            dental crowns and bridges
                        </CLink>
                        . Whether repairing a damaged tooth or filling a gap, our advanced
                        techniques and caring approach ensure exceptional results.
                    </p>
                    <p>
                        Crowns restore the function, shape, and strength of compromised teeth, while
                        bridges provide a cost-effective solution for missing teeth. Both options
                        enhance functionality, aesthetics, and oral health, helping you smile with
                        confidence.
                    </p>
                </div>
            </ImgArticle>
            <ImgArticle
                imgRight
                number="7"
                image={
                    <StaticImage
                        src="../../../assets/images/home/treatments/surgery.jpg"
                        alt="doctor treating a patient"
                        width={630}
                        height={650}
                    />
                }
            >
                <div>
                    <h3>Oral Surgery</h3>
                    <p>
                        <CLink to={getNavLink('Oral Surgery')}>Oral Surgery</CLink> at Magic Smile
                        Dental in Linden, NJ, can help rebuild your comfort, confidence, and oral
                        health. Whether addressing pain, difficulty chewing, or improving your
                        smile, our compassionate team offers personalized treatments tailored to
                        your needs. Using advanced technology and surgical techniques, we ensure
                        precise, efficient, and comfortable care. Trust us to provide innovative
                        solutions that restore your smile and promote long-term oral health with
                        exceptional results.
                    </p>
                </div>
            </ImgArticle>
        </ImgArticleSection>
    );
};
