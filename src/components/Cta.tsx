import styled from '@emotion/styled';
import { BigArrowBtn } from './buttons';
import { flexCenter } from './layout/styles/classes';
import { scrollToSection } from './layout/Nav';

const Section = styled.section`
    padding: 75px 25px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.lighterBlue};

    > h2 {
        margin: 0 0 40px;
        color: ${({ theme }) => theme.colors.darkerBlue};
    }

    @media (min-width: 768px) {
        ${flexCenter};
        padding: 75px 50px;
        text-align: left;
        gap: 30px;

        > h2 {
            width: 62.5%;
            max-width: max-content;
            margin: 0;
        }

        > a,
        > button {
            flex-shrink: 0;
        }
    }

    @media (min-width: 1024px) {
        padding: 75px 70px;

        > h2 {
            font-size: 2.75rem;
            width: 75%;
        }
    }

    @media (min-width: 1280px) {
        gap: 60px;
    }
`;

export const Cta = () => {
    return (
        <Section>
            <h2>
                <strong>Get Pricing </strong>And Options For Treatment
            </h2>
            <BigArrowBtn dark onClick={() => scrollToSection('#footer-cta')}>
                find out now
            </BigArrowBtn>
        </Section>
    );
};
