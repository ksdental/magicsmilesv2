import { Fragment } from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { SingleArticle } from '@/SingleArticle';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CLink } from '@/CLink';
import { Seo } from '@/Seo';
import { serviceAreas } from '@/service-area/locations';

const Intro = styled.section`
    padding: 190px 25px 60px;
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    color: ${({ theme }) => theme.colors.white};

    > div {
        max-width: 1120px;
        margin: 0 auto;
        display: grid;
        align-items: center;
        gap: 32px;
    }

    h1 {
        margin: 0 0 24px;
    }

    p:last-child {
        margin-bottom: 0;
    }

    .eyebrow {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        margin: 0 0 16px;
    }

    @media (min-width: 768px) {
        padding: 220px 50px 70px;
        > div {
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
            gap: 48px;
        }
    }
`;

const AreaLinks = styled.ul`
    display: grid;
    gap: 20px;
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
    text-align: left;

    > li {
        margin: 0;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        height: 100%;
        padding: 28px;
        border: 1px solid ${({ theme }) => theme.colors.lighterBlue};
        border-top: 3px solid ${({ theme }) => theme.colors.blue};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.darkerBlue};
        transition: background-color 0.2s ease-in-out;

        :hover,
        :focus-visible {
            background-color: ${({ theme }) => theme.colors.lighterBlue};
        }

        :focus-visible {
            outline: 2px solid ${({ theme }) => theme.colors.blue};
            outline-offset: 4px;
        }
    }

    h3 {
        margin: 0 0 12px;
        font-size: 1.5rem;
    }

    p {
        font-size: 0.875rem;
        margin: 0;
    }

    .arrow {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.75rem;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        > li:last-child:nth-child(odd) {
            grid-column: 1 / -1;
        }
    }
`;

export default function AreasServedPage() {
    return (
        <Fragment>
            <Intro>
                <div>
                    <div>
                        <p className="eyebrow">Dental care in Linden, New Jersey</p>
                        <h1>Areas Served</h1>
                        <p>
                            Magic Smile Dental welcomes patients from Linden and nearby Union County
                            communities for preventive, cosmetic, restorative, and emergency dental
                            care.
                        </p>
                        <p>
                            Our office is at 515 North Wood Avenue, Suite 102, Linden, NJ 07036.
                            Explore your community below to learn about our services and plan your
                            visit.
                        </p>
                    </div>
                    <StaticImage
                        src="../../assets/images/about-us/hero.jpg"
                        alt="Magic Smile Dental team at the Linden office"
                        width={640}
                        loading="eager"
                    />
                </div>
            </Intro>
            <SingleArticle lightBg>
                <h2>
                    Find Your <strong>Community</strong>
                </h2>
                <p>
                    Choose your area for dental services, directions to our Linden office, and
                    answers to common questions.
                </p>
                <nav aria-label="Explore the areas we serve">
                    <AreaLinks>
                        {serviceAreas.map(area => (
                            <li key={area.path}>
                                <CLink to={area.path}>
                                    <div>
                                        <h3>{area.name}, NJ</h3>
                                        <p>View services, directions, and FAQs</p>
                                    </div>
                                    <span className="arrow" aria-hidden="true">
                                        →
                                    </span>
                                </CLink>
                            </li>
                        ))}
                    </AreaLinks>
                </nav>
            </SingleArticle>
            <BottomBannerConsult
                title={
                    <h2>
                        Your Dental Care. <strong>One Linden Office.</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../assets/images/about-us/banner.jpg"
                    alt="Magic Smile Dental team reviewing information together"
                    width={800}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}

export const Head = () => (
    <Seo
        pathname="areas-served"
        title="Areas Served | Magic Smile Dental in Linden, NJ"
        description="Explore dental care for Clark, Elizabeth, Rahway, Roselle, and Winfield patients at Magic Smile Dental's Linden, NJ office. Find services and directions."
        preserveDescription
    />
);
