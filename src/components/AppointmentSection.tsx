import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { ContactForm } from './ContactForm';

const CallRailFormWrapper = styled.div`
    min-height: 400px;
`;

const Section = styled.section<{ formRight?: boolean }>`
    padding: 50px 20px;
    border-top: 1px solid #d9d9d9;

    > iframe {
        width: 100vw;
        height: 70vw;
        border: none;
    }

    > form,
    > #cr-form-FOR019a13345dc77dbfb3f28f8b3a65db6d {
        margin-bottom: 30px;
    }

    > iframe,
    > .gatsby-image-wrapper {
        margin: 0 -20px;
        max-width: 650px;
    }

    @media (min-width: 768px) {
        padding: 50px;

        > iframe {
            width: 100%;
        }

        > iframe,
        > .gatsby-image-wrapper {
            margin: 0;
        }
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
        padding: 75px 70px;
        position: relative;

        > iframe {
            order: ${({ formRight }) => (formRight ? -1 : 'unset')};
            height: unset;
            justify-self: end;
        }

        > form {
            padding-left: ${({ formRight }) => (formRight ? '60px' : '0')};
            padding-right: ${({ formRight }) => (formRight ? '0' : '60px')};
            justify-self: ${({ formRight }) => (formRight ? 'start' : 'end')};
            max-width: 650px;
            margin-bottom: 0;
        }

        > #cr-form-FOR019a13345dc77dbfb3f28f8b3a65db6d {
            padding-left: ${({ formRight }) => (formRight ? '60px' : '0')};
            padding-right: ${({ formRight }) => (formRight ? '0' : '60px')};
            justify-self: ${({ formRight }) => (formRight ? 'start' : 'end')};
            width: 100%;
            margin-bottom: 0;
        }

        ::before {
            content: '';
            position: absolute;
            top: 0px;
            left: 50%;
            width: 1px;
            height: 100%;
            background-color: rgb(217, 217, 217);
        }
    }
`;

export const AppointmentSection = ({
    children,
    formRight,
    image,
    useCallRail,
}: {
    children?: React.ReactNode;
    formRight?: boolean;
    image?: boolean;
    useCallRail?: boolean;
}) => {
    return (
        <Section formRight={formRight}>
            {useCallRail ? (
                <CallRailFormWrapper id="cr-form-FOR019a13345dc77dbfb3f28f8b3a65db6d" />
            ) : (
                <ContactForm />
            )}
            {children}
            {image ? (
                <StaticImage
                    src="../../assets/images/dental-implants/appointment-section.jpg"
                    alt="laptop"
                    width={650}
                    height={676}
                    objectPosition="left center"
                />
            ) : (
                ''
            )}
        </Section>
    );
};
