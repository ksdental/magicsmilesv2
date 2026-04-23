import { Fragment } from 'react';
import { HeadProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from '@/Seo';
import { BasicHero } from '@/BasicHero';
import { SingleArticle } from '@/SingleArticle';
import { siteInfo } from '@/layout/NavLinks';

export default function AccessibilityPage() {
    return (
        <Fragment>
            <BasicHero
                text="Our Commitment to Accessibility"
                title={
                    <h2>
                        Accessibility <strong>Statement</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/cosmetic-dentistry/hero.jpg"
                        alt="Magic Smile Dental accessibility statement"
                        layout="fullWidth"
                        quality={90}
                        loading="eager"
                    />
                }
            />

            <SingleArticle noBg>
                <h2>
                    Our Commitment to <strong>Accessibility</strong>
                </h2>
                <p>
                    Magic Smile Dental is committed to ensuring digital accessibility for people
                    with disabilities. We are continually improving the user experience for everyone
                    and applying the relevant accessibility standards to provide an inclusive online
                    environment for all of our patients and visitors.
                </p>
                <p>
                    We believe that everyone &mdash; regardless of ability, age, language, or
                    technology &mdash; should be able to access the information and services
                    provided on{' '}
                    <a href="https://www.lindennjdentist.com/" rel="noopener noreferrer">
                        www.lindennjdentist.com
                    </a>{' '}
                    with ease, dignity, and independence.
                </p>
            </SingleArticle>

            <SingleArticle lightBg>
                <h2>
                    Conformance <strong>Status</strong>
                </h2>
                <p>
                    The Web Content Accessibility Guidelines (WCAG) define requirements for
                    designers and developers to improve accessibility for people with disabilities.
                    They define three levels of conformance: Level A, Level AA, and Level AAA.
                </p>
                <p>
                    Magic Smile Dental&rsquo;s website strives to be{' '}
                    <strong>conformant with WCAG 2.1 Level AA</strong> as well as compliant with
                    Title III of the Americans with Disabilities Act (ADA). We work to meet or
                    exceed these standards, and our team regularly evaluates the website to identify
                    and remediate accessibility barriers.
                </p>
            </SingleArticle>

            <SingleArticle noBg>
                <h2>
                    Accessibility <strong>Features</strong>
                </h2>
                <p>
                    To support a wide range of users and assistive technologies, our website
                    includes the following features:
                </p>
                <ul>
                    <li>
                        <strong>Keyboard navigation</strong> &mdash; We strive to make interactive
                        elements such as menus, buttons, links, and forms operable using a keyboard
                        alone, and we continue to improve keyboard support across the site.
                    </li>
                    <li>
                        <strong>Screen reader support</strong> &mdash; Pages use semantic HTML
                        landmarks, headings, and ARIA labels so they can be interpreted by screen
                        readers such as JAWS, NVDA, and VoiceOver.
                    </li>
                    <li>
                        <strong>Descriptive alternative text</strong> &mdash; We work to provide
                        descriptive alt text for meaningful images so users who cannot see them can
                        still understand their context. Some decorative images are intentionally
                        marked to be skipped by screen readers.
                    </li>
                    <li>
                        <strong>Color and contrast</strong> &mdash; We strive to meet the WCAG 2.1
                        AA minimum contrast ratios for text and interactive elements, and we review
                        color choices as the site evolves.
                    </li>
                    <li>
                        <strong>Resizable text</strong> &mdash; Content reflows and remains readable
                        when text is enlarged up to 200% in modern browsers.
                    </li>
                    <li>
                        <strong>Responsive design</strong> &mdash; The website adapts to different
                        screen sizes, including mobile phones, tablets, and desktops.
                    </li>
                    <li>
                        <strong>Focus indicators</strong> &mdash; We provide visible focus styles
                        for keyboard users and continue to refine them so that the currently
                        selected element is easy to identify.
                    </li>
                    <li>
                        <strong>Plain-language content</strong> &mdash; We aim to use clear,
                        straightforward language to describe dental services and patient
                        information.
                    </li>
                </ul>
            </SingleArticle>

            <SingleArticle lightBg>
                <h2>
                    Compatibility With Browsers and{' '}
                    <strong>Assistive Technology</strong>
                </h2>
                <p>
                    Magic Smile Dental&rsquo;s website is designed to be compatible with the
                    following:
                </p>
                <ul>
                    <li>
                        Recent versions of major browsers including Google Chrome, Mozilla Firefox,
                        Apple Safari, and Microsoft Edge
                    </li>
                    <li>
                        Operating system screen readers such as VoiceOver (macOS, iOS) and TalkBack
                        (Android)
                    </li>
                    <li>
                        Third-party screen readers including JAWS and NVDA on Windows
                    </li>
                    <li>Voice control and speech recognition software</li>
                    <li>Operating-system-level zoom and high-contrast settings</li>
                </ul>
                <p>
                    The website is not specifically designed for browsers that are more than three
                    versions old or for software that is no longer actively supported by the
                    manufacturer.
                </p>
            </SingleArticle>

            <SingleArticle noBg>
                <h2>
                    Technical <strong>Specifications</strong>
                </h2>
                <p>
                    Accessibility of the Magic Smile Dental website relies on the following
                    technologies to work with the particular combination of web browser and
                    assistive technologies or plug-ins installed on your computer:
                </p>
                <ul>
                    <li>HTML</li>
                    <li>WAI-ARIA</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <p>
                    These technologies are relied upon for conformance with the accessibility
                    standards used.
                </p>
            </SingleArticle>

            <SingleArticle darkBg dark>
                <h2>
                    Limitations and <strong>Alternatives</strong>
                </h2>
                <p>
                    Despite our best efforts to ensure accessibility of the Magic Smile Dental
                    website, there may be some limitations. Below is a description of known
                    limitations and potential solutions. Please contact us if you observe an issue
                    not listed here.
                </p>
                <ul>
                    <li>
                        <strong>Third-party content</strong> &mdash; Some embedded content provided
                        by third parties (such as appointment scheduling tools, mapping services,
                        and review widgets) may not be fully accessible. We work with these vendors
                        to encourage improvements and offer alternative ways to access the same
                        information.
                    </li>
                    <li>
                        <strong>Older documents</strong> &mdash; Some older PDFs and documents may
                        not be fully accessible to screen readers. We are working to remediate or
                        replace these files. If you need an accessible version of a document, please
                        contact our office.
                    </li>
                    <li>
                        <strong>User-generated content</strong> &mdash; Patient testimonials,
                        reviews, and other user-generated content may not always meet accessibility
                        standards.
                    </li>
                </ul>
            </SingleArticle>

            <SingleArticle noBg>
                <h2>
                    Feedback and <strong>Contact Information</strong>
                </h2>
                <p>
                    We welcome your feedback on the accessibility of the Magic Smile Dental website.
                    If you encounter accessibility barriers, need information in an alternative
                    format, or wish to request reasonable accommodations to access our services,
                    please contact us:
                </p>
                <ul>
                    <li>
                        <strong>Phone:</strong>{' '}
                        <a href={siteInfo.phone.link}>{siteInfo.phone.text}</a>
                    </li>
                    <li>
                        <strong>Address:</strong>{' '}
                        <a
                            href={siteInfo.address.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {siteInfo.address.text}
                        </a>
                    </li>
                    <li>
                        <strong>Office hours:</strong> Please call our office for current hours.
                    </li>
                </ul>
                <p>
                    We try to respond to accessibility feedback within{' '}
                    <strong>5 business days</strong>, and to propose a solution within 10 business
                    days when feasible.
                </p>
            </SingleArticle>

            <SingleArticle lightBg>
                <h2>
                    Formal <strong>Complaints</strong>
                </h2>
                <p>
                    If you believe Magic Smile Dental has failed to provide equal access to our
                    website or services in violation of the Americans with Disabilities Act, you
                    have the right to file a complaint. We encourage you to first contact our office
                    so we can attempt to resolve your concern directly.
                </p>
                <p>
                    You may also file a complaint with the U.S. Department of Justice Civil Rights
                    Division at{' '}
                    <a
                        href="https://www.ada.gov/file-a-complaint/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ada.gov/file-a-complaint
                    </a>
                    .
                </p>
            </SingleArticle>

            <SingleArticle noBg>
                <h2>
                    Ongoing <strong>Improvements</strong>
                </h2>
                <p>
                    Accessibility is an ongoing effort. Magic Smile Dental continues to invest in
                    training, design improvements, and technical updates to make our website and
                    practice as inclusive as possible. We review this statement periodically and
                    update it as our website evolves.
                </p>
                <p>
                    <strong>This statement was last updated on April 22, 2026.</strong>
                </p>
            </SingleArticle>
        </Fragment>
    );
}

export const Head = ({ location }: HeadProps) => {
    return (
        <Seo
            pathname={location.pathname.split('/').slice(-2)[0]}
            title="Accessibility Statement | Magic Smile Dental - Linden, NJ"
            description="Read Magic Smile Dental's accessibility statement. We are committed to WCAG 2.1 AA and ADA Title III compliance to provide an inclusive experience for all patients."
        />
    );
};
