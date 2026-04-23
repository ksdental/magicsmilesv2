import { CLink } from '@/CLink';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { siteInfo } from './NavLinks';
import { flexCenter } from './styles/classes';
import useLocationData from '@s/hooks/useLocationData';
import { h3 } from './styles/Typography';

const Section = styled.footer<{ contactPage: boolean }>`
    position: relative;
    padding-top: 70px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    > .gatsby-image-wrapper:first-of-type {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    @media (min-width: 1024px) {
        padding-top: ${({ contactPage }) => (contactPage ? '100px' : '220px')};
    }
`;

const Flex = styled.div`
    padding: 60px 20px;

    > div {
        :not(:last-of-type) {
            margin-bottom: 50px;
        }
        > h3 {
            ${h3};
            font-weight: 400;
            text-transform: uppercase;
            margin: 0 0 12px;
        }

        a {
            color: ${({ theme }) => theme.colors.white};
            transition: opacity 0.3s ease-in-out;
            text-transform: uppercase;
            font-size: 1rem;

            :hover,
            :focus {
                opacity: 0.7;
            }
        }

        > p {
            margin: 0;
            text-transform: uppercase;
            font-size: 1rem;
        }
    }

    @media (min-width: 1024px) {
        ${flexCenter};
        align-items: flex-start;
        gap: 30px;
        padding: 80px 60px;

        > div {
            flex: 0 0 32%;
            max-width: 33%;
            margin: 0;
        }
    }

    @media (min-width: 1440px) {
        gap: 40px;
    }
`;

const Copyright = styled.p`
    ${flexCenter};
    padding: 20px 40px;
    flex-wrap: wrap;
    gap: 12px;
    background-color: ${({ theme }) => theme.colors.dark};
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    text-transform: uppercase;
    line-height: 150%;

    > a {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
        transition: opacity 0.3s ease-in-out;

        :hover,
        :focus {
            opacity: 0.7;
        }
    }

    @media (min-width: 568px) {
        justify-content: space-between;
    }

    @media (min-width: 1024px) {
        padding: 20px 70px;
    }
`;

export const Footer = () => {
    const { pageTitle } = useLocationData();
    //  todo: have 100px padding top on contact page instead of 220px
    return (
        <Section contactPage={pageTitle === 'contact-us'}>
            <StaticImage
                src="../../../assets/images/dark-bg.jpg"
                alt=""
                layout="fullWidth"
                quality={95}
            />
            <CLink to="/">
                <StaticImage
                    src="../../../assets/images/layout/logo-white.png"
                    alt="Magic Smile Dental logo"
                    width={680}
                    quality={100}
                    placeholder="none"
                    style={{ maxWidth: '340px' }}
                />
            </CLink>
            <Flex>
                <div>
                    <h3>Phone number</h3>
                    <p>
                        Call Today:{' '}
                        <CLink to={siteInfo.currentPatientsPhone.link}>{siteInfo.currentPatientsPhone.text}</CLink>
                    </p>
                </div>

                <div>
                    <h3>address</h3>
                    <CLink to={siteInfo.address.link}>
                        515 North Wood Ave, Suite 102
                        <br />
                        Linden, NJ 07036
                    </CLink>
                </div>

                <div>
                    <h3>office hours</h3>
                    <p>
                        Mon & Tues: 10AM - 7PM
                        <br />
                        Wed: 9AM - 5PM
                        <br />
                        Thurs: 10AM - 7PM
                        <br />
                        Fri: 9AM - 6PM
                        <br />
                        Sat & Sun: Closed
                    </p>
                </div>
            </Flex>
            <Copyright>
                <CLink to="https://www.google.com/search?q=Magic+Smile+Dental+Linden%2C+NJ&sca_esv=ba03c581cf027f47&sca_upv=1&ei=JC7oZp-bF-SKwbkPy63A6Qc&ved=0ahUKEwifvcrQxMeIAxVkRTABHcsWMH0Q4dUDCA8&uact=5&oq=Magic+Smile+Dental+Linden%2C+NJ&gs_lp=Egxnd3Mtd2l6LXNlcnAiHU1hZ2ljIFNtaWxlIERlbnRhbCBMaW5kZW4sIE5KMhEQLhiABBiRAhjHARiKBRivATIGEAAYCBgeMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIgEC4YgAQYkQIYxwEYigUYrwEYlwUY3AQY3gQY4ATYAQFI-ARQ7wNY7wNwAXgBkAEAmAF8oAF8qgEDMC4xuAEDyAEA-AEBmAICoAKLAcICChAAGLADGNYEGEfCAg0QABiwAxjWBBhHGMkDwgIOEAAYgAQYsAMYkgMYigWYAwCIBgGQBgS6BgYIARABGBSSBwMxLjGgB-wG&sclient=gws-wiz-serp#lrd=0x89c3b30231c43b21:0x5ea8101c1f4c4f62,1,,,,">
                    Leave us a review on google
                </CLink>
                <CLink to="/accessibility/">Accessibility Statement</CLink>
                <span>© All Rights Reserved</span>
            </Copyright>
        </Section>
    );
};
