import { BasicHero } from '@/BasicHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment, useEffect } from 'react';
import styled from '@emotion/styled';
import { flexCenter } from '@/layout/styles/classes';
import { CLink } from '@/CLink';
import { siteInfo } from '@/layout/NavLinks';
import { ReactComponent as PhoneIcon } from '@a/icons/phone.svg';
import { ReactComponent as PinIcon } from '@a/icons/pin.svg';
import { ReactComponent as ClockIcon } from '@a/icons/clock.svg';
import { CenterIcon } from '@/CenterIcon';
import { AppointmentSection } from '@/AppointmentSection';
import { PageProps } from 'gatsby';
import { scrollToSection } from '@/layout/Nav';
export { Head } from '.';

const Flex = styled.div`
    padding: 60px 20px;
    text-align: center;
    max-width: 1600px;
    margin: 0 auto;

    > div {
        :not(:last-of-type) {
            margin-bottom: 50px;
        }

        > svg {
            margin-bottom: 21px;
        }

        > h4 {
            font-weight: 400;
            text-transform: uppercase;
            margin: 0 0 12px;
        }

        a {
            color: ${({ theme }) => theme.colors.black};
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

type LocationState = {
    scrollToSection?: boolean;
    tag?: string;
};

export default function Page({ location }: PageProps<object, LocationState>) {
    useEffect(() => {
        if ((location.state as LocationState)?.tag)
            setTimeout(() => scrollToSection((location.state as LocationState)?.tag ?? ''), 100);
    }, [location.state]);
    return (
        <Fragment>
            <BasicHero
                text="Contact Us - Linden, NJ"
                title={
                    <h2>
                        <strong>Get In Touch</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/contact-hero.jpg"
                        alt="Magic Smile Dental office"
                        layout="fullWidth"
                        loading="eager"
                    />
                }
            />
            <Flex>
                <div>
                    <PhoneIcon />
                    <h4>Phone number</h4>
                    <p>
                        Call Today:{' '}
                        <CLink to={siteInfo.currentPatientsPhone.link}>{siteInfo.currentPatientsPhone.text}</CLink>
                    </p>
                </div>

                <div>
                    <PinIcon />
                    <h4>address</h4>
                    <CLink to={siteInfo.address.link}>
                        515 North Wood Ave, Suite 102
                        <br />
                        Linden, NJ 07036
                    </CLink>
                </div>

                <div>
                    <ClockIcon />
                    <h4>office hours</h4>
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
            <CenterIcon />
            <AppointmentSection formRight useCallRail>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6055.692006483421!2d-74.25809!3d40.633278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b30231c43b21%3A0x5ea8101c1f4c4f62!2sMagic%20Smile%20Dental!5e0!3m2!1sen!2sus!4v1740392576512!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="magic smile dental office"
                ></iframe>
            </AppointmentSection>
        </Fragment>
    );
}
