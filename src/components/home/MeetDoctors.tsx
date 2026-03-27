import styled from '@emotion/styled';
import { titleWhiteLine } from '../layout/styles/classes';
import { MeetDrAccordion } from './MeetDrAccordion';

const Section = styled.section`
    max-width: 1920px;
    margin: 0 auto;
`;

const Top = styled.div`
    padding: 40px 30px 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.62);
    text-align: center;
    background-color: ${({ theme }) => theme.colors.darkerBlue};

    > h2 {
        ${titleWhiteLine};
        color: ${({ theme }) => theme.colors.white};
        margin: 0;
    }
`;

export const MeetDoctors = () => {
    return (
        <Section>
            <Top>
                <h2>
                    Meet the <strong>Doctors</strong>
                </h2>
            </Top>
            <MeetDrAccordion />
        </Section>
    );
};
