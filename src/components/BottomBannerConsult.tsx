import { BottomBanner } from './BottomBanner';
import { ReactNode } from 'react';
import { BigArrowBtn } from './buttons';
import { titleLine } from './layout/styles/classes';
import styled from '@emotion/styled';
import { CLink } from './CLink';
import { siteInfo } from './layout/NavLinks';

const Box = styled.div`
    padding: 30px;
    flex: 1;

    > h2 {
        ${titleLine};
        margin: 0 0 20px;
        text-wrap-style: balance;
    }

    @media (min-width: 1024px) {
        > h2 {
            margin-bottom: 32px;
        }
    }
`;

type Props = {
    title: ReactNode;
    children: ReactNode;
};

export const BottomBannerConsult = ({ title, children }: Props) => {
    return (
        <BottomBanner noPadding noGap>
            {children}
            <Box>
                {title}
                <BigArrowBtn as={CLink} to={siteInfo.appointmentLink} dark>
                    SCHEDULE CONSULTATION
                </BigArrowBtn>
            </Box>
        </BottomBanner>
    );
};
