import styled from '@emotion/styled';
import { ReactNode } from 'react';
import {
    HeroBigTitleBox,
    HeroConsultationBtn,
    HeroSocialBar,
    HeroTitleBox,
} from './HeroComponents';
import useLocationData from '@s/hooks/useLocationData';

const Section = styled.section`
    padding-top: 135px;
    position: relative;

    > .gatsby-image-wrapper {
        ::before {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.09);
            z-index: 1;
        }
    }

    @media (min-width: 768px) {
        display: grid;
        min-height: 100svh;
        min-height: 100vh;

        > * {
            grid-area: 1/1;
        }

        > .gatsby-image-wrapper {
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;

            ::before {
                background: rgba(0, 0, 0, 0.21);
            }
        }
    }

    @media (min-width: 1024px) {
        padding-top: 146px;
    }

    @media (min-width: 1100px) {
        padding-top: 176px;
    }

    @media (min-width: 1680px) {
        padding-top: 151px;
    }
`;

const BottomBar = styled.div`
    align-self: end;
    border-top: 1px solid ${({ theme }) => theme.colors.halfWhite};
    padding: 0 30px;
    z-index: 3;
    display: none;

    @media (min-width: 1024px) {
        margin-right: 100px;
        display: flex;
        height: 80px;
        padding-right: 0;
        justify-content: flex-end;
    }
`;
type Props = {
    text: string;
    title: ReactNode;
    image: ReactNode;
};

export const BasicHero = ({ text, title, image }: Props) => {
    const { pageTitle } = useLocationData();

    return (
        <Section>
            <HeroTitleBox title={title} tagline={text} />
            <HeroBigTitleBox videoExist={false}>
                <p>{text}</p>
                {title}
            </HeroBigTitleBox>
            {image}

            <HeroTitleBox title={title} tagline={text} smMobile />

            <BottomBar>{pageTitle === 'contact-us' ? '' : <HeroConsultationBtn />}</BottomBar>

            <HeroSocialBar />
        </Section>
    );
};
