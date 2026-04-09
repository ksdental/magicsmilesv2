import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Fragment, ReactNode } from 'react';
import { seoData } from './seoData';
// eslint-disable-next-line
import { useLocation } from '@reach/router';

type SeoProps = {
    pathname: string;
    title?: string;
    description?: string;
    children?: ReactNode;
    keywords?: string;
    image?: IGatsbyImageData;
};

export const Seo = ({ pathname, title, description, children, keywords, image }: SeoProps) => {
    const { site, og } = useStaticQuery(graphql`
        query steSeoMetadata {
            site {
                siteMetadata {
                    title
                    description
                    author
                    keywords
                    siteUrl
                }
            }
            og: file(relativePath: { eq: "default-og.jpg" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, width: 800, height: 420)
                }
            }
        }
    `);

    const pageTitle = pathname?.replaceAll('/', '');

    const location = useLocation();

    let siteUrl = site.siteMetadata.siteUrl;
    if (siteUrl.endsWith('/')) siteUrl = siteUrl.slice(0, -1);

    const theTitle = title
        ? title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        : seoData[pageTitle]
          ? seoData[pageTitle].t
          : site.siteMetadata.title;

    const metaDescription = description
        ? description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
        : seoData[pageTitle]
          ? seoData[pageTitle].d
          : site.siteMetadata.description;

    const theKeywords = keywords || site.siteMetadata.keywords;

    const imageData = image || og.childImageSharp.gatsbyImageData;
    const imageUrl = siteUrl + imageData.images.fallback.src;

    return (
        <Fragment>
            <html lang="en" />
            <title>{theTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={theKeywords} />
            <meta name="og:title" content={theTitle} />
            <meta name="og:description" content={metaDescription} />
            <meta name="og:type" content="website" />
            <meta name="og:url" content={site.siteMetadata.siteUrl + location.pathname} />
            <meta name="og:image" content={imageUrl} />
            <meta name="og:image:width" content={imageData.width} />
            <meta name="og:image:height" content={imageData.height} />
            <script type="application/ld+json">
                {`{"@context":"https://schema.org","@type":"Dentist","name":"Magic Smile Dental","image":{"@type":"ImageObject","url":"https://lindennjdentist.com/logo.png","width":800,"height":243},"telephone":"+19084865000","url":"https://www.lindennjdentist.com","address":{"@type":"PostalAddress","streetAddress":"515 N Wood Ave Suite 102","addressLocality":"Linden","postalCode":"07036","addressRegion":"NJ","addressCountry":"AF"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"561"},"priceRange":"Procedure dependant","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Thursday"],"opens":"10:00","closes":"19:00"}],"geo":{"@type":"GeoCoordinates","latitude":"40.63327614560404","longitude":"-74.2580904686174"},"review":{"@type":"Review","datePublished":"08/05/2024","itemReviewed":{"name":"Magic Smile Dental","medicalSpecialty":"https://www.wikidata.org/wiki/Q27349","isAcceptingNewPatients":"true","telephone":"+19084865000","address":{"streetAddress":"515 N Wood Ave Suite 102","addressLocality":"Linden","postalCode":"07036","addressRegion":"NJ","addressCountry":"AF"},"image":{"@type":"ImageObject","url":"https://lindennjdentist.com/logo.png","width":800,"height":243},"priceRange":"Procedure dependant"},"author":{"@type":"Person","name":"Arianna Godinez"},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5","worstRating":"1"},"reviewBody":"I’ve been getting my cleaning done with Miguel for quite some time. He does an excellent job. I had a lot of sensitivity, and my gums were bleeding, but little by little everything has been improving. Highly recommended 100%.","publisher":{"@type":"Organization","name":"Google"}},"medicalSpecialty":"https://www.wikidata.org/wiki/Q27349","sameAs":["","https://www.facebook.com/magicsmiledentalLinden/","https://www.instagram.com/magicsmilelindennj",""],"hasMap":["https://maps.app.goo.gl/7XTczYaKjLG96ANq8"]}</script><script type="application/ld+json">{"@context":"https:\/\/schema.org","@graph":[{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Implant Dentistry","url":"#"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Dental Implants","url":"https:\/\/www.lindennjdentist.com\/dental-implants\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"All-On-X Full Mouth Implants","url":"https:\/\/www.lindennjdentist.com\/dental-implants\/all-on-x\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Failing Dental Implants","url":"https:\/\/www.lindennjdentist.com\/dental-implant-failure\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Cost &#038; Affordability","url":"https:\/\/www.lindennjdentist.com\/dental-implants\/affordable-dental-implants\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"LANAP Laser Periodontics","url":"https:\/\/www.lindennjdentist.com\/periodontics\/lanap-laser-periodontics\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Your Smile Makeover","url":"#"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Cosmetic Dentistry","url":"https:\/\/www.lindennjdentist.com\/cosmetic-dentistry\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Porcelain Veneers","url":"https:\/\/www.lindennjdentist.com\/cosmetic-dentistry\/porcelain-veneers\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Dental Crowns &#038; Bridges","url":"https:\/\/www.lindennjdentist.com\/cosmetic-dentistry\/dental-crowns-bridges\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Invisalign\u00ae Clear Aligners","url":"https:\/\/www.lindennjdentist.com\/cosmetic-dentistry\/invisalign\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Teeth Whitening","url":"https:\/\/www.lindennjdentist.com\/cosmetic-dentistry\/professional-teeth-whitening\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Before &#038; After Photos","url":"https:\/\/www.lindennjdentist.com\/before-and-after-photos\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Additional Services","url":"#"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"General Dentistry","url":"https:\/\/www.lindennjdentist.com\/general-dentistry\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Oral Surgery","url":"https:\/\/www.lindennjdentist.com\/oral-dentistry\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Full Mouth Reconstruction","url":"https:\/\/www.lindennjdentist.com\/full-mouth-reconstruction\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Endodontics","url":"https:\/\/www.lindennjdentist.com\/general-dentistry\/endodontics\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Emergency Dentistry","url":"https:\/\/www.lindennjdentist.com\/emergency-dentistry\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Patient Center","url":"https:\/\/www.lindennjdentist.com\/patient-center\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Insurance &#038; Financing","url":"https:\/\/www.lindennjdentist.com\/insurance-and-financing\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Conditions We Treat","url":"https:\/\/www.lindennjdentist.com\/dental-conditions\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Patient Stories","url":"https:\/\/www.lindennjdentist.com\/patient-stories\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Sedation Dentistry","url":"https:\/\/www.lindennjdentist.com\/sedation-dentistry\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"About Us","url":"https:\/\/www.lindennjdentist.com\/about-us\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Meet Our Doctors","url":"https:\/\/www.lindennjdentist.com\/about-us\/meet-the-doctors\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Meet The Team","url":"https:\/\/www.lindennjdentist.com\/about-us\/meet-the-team\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Video Library","url":"https:\/\/www.lindennjdentist.com\/dental-video-library\/"},{"@context":"https:\/\/schema.org","@type":"SiteNavigationElement","id":"site-navigation","name":"Contact Us","url":"https:\/\/www.lindennjdentist.com\/contact-us\/"}]}`}
            </script>
            <script type="application/ld+json">
                {`{"@context":"https://schema.org","@type":"Organization","@id":"https://www.lindennjdentist.com/#organization","name":"Magic Smile Dental","url":"https://www.lindennjdentist.com/","telephone":["+1-908-743-8041","+1-908-486-5000"],"email":"office@lindennjdentist.com","sameAs":["https://www.facebook.com/magicsmiledentalLinden/"],"contactPoint":[{"@type":"ContactPoint","telephone":"+1-908-743-8041","contactType":"customer service","areaServed":"US","availableLanguage":["en"]},{"@type":"ContactPoint","telephone":"+1-908-486-5000","contactType":"customer service","areaServed":"US","availableLanguage":["en"]}]}`}
            </script>
            {/* <meta
                name="google-site-verification"
                content="UuCYlK0kWHAD0NflWB71ShqxizgXbzSeXmq2mgGW5E4"
            /> */}
            {children}
        </Fragment>
    );
};
