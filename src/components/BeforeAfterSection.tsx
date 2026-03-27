import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { BeforeAfterPhoto } from './BeforeAfterPhoto';
import { SingleTab, TabsPrimitive } from './TabsPrimitive';
import { css } from '@emotion/react';
import { flexCenter, titleFontStyles } from './layout/styles/classes';
import { plainBtnStyles } from './buttons/Plain';
import { theme } from './layout/styles/GlobalStyles';

const Section = styled.section`
    padding: 50px 20px;
    text-align: center;

    > h2 {
        margin: 0 0 30px;
    }

    @media (min-width: 568px) {
        padding: 50px 25px;
    }

    @media (min-width: 768px) {
        padding: 75px 50px;
    }

    @media (min-width: 1024px) {
        padding: 100px 70px;

        > h2 {
            margin: 0 0 50px;
        }
    }

    @media (min-width: 1200px) {
        padding: 120px 70px;
    }
`;

const rootStyles = css`
    margin: 0 auto;
    max-width: 1300px;
`;

const listStyles = css`
    ${flexCenter};
    flex-direction: column;
    gap: 10px;
    padding: 24px 0;
    border-top: 1px solid ${theme.colors.dark};
    border-bottom: 1px solid ${theme.colors.dark};
    margin-bottom: 50px;

    > button {
        ${plainBtnStyles};
        ${titleFontStyles};
        letter-spacing: 0.01px;

        transition: opacity 0.3s ease-in-out;
        flex-shrink: 0;
        color: ${theme.colors.gray};
        text-transform: capitalize;
        font-size: 1.375rem;
        line-height: 1;

        :hover,
        :focus {
            opacity: 0.75;
        }

        &[data-state='active'] {
            font-weight: 700;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 20px;
    }

    @media (min-width: 1024px) {
        gap: 40px;
    }

    @media (min-width: 1200px) {
        gap: 60px;
    }

    @media (min-width: 1440px) {
        gap: 80px;
    }
`;

const Tab = styled.div`
    ${flexCenter};
    flex-wrap: wrap;
    gap: 40px;
`;

const implantTabs = [
    <BeforeAfterPhoto key={0}>
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/implant-1-before.jpg"
            width={406}
            height={271}
            alt="before dental implants"
        />
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/implant-1-after.jpg"
            width={406}
            height={271}
            alt="after dental implants"
        />
    </BeforeAfterPhoto>,
    <BeforeAfterPhoto key={1}>
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/implant-2-before.jpg"
            width={406}
            height={271}
            alt="before dental implants"
        />
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/implant-2-after.jpg"
            width={406}
            height={271}
            alt="after dental implants"
        />
    </BeforeAfterPhoto>,
];

const veneerTabs = [
    <BeforeAfterPhoto key={0}>
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/veneer-1-before.jpg"
            width={406}
            height={271}
            alt="before porcelain veneers"
        />
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/veneer-1-after.jpg"
            width={406}
            height={271}
            alt="after porcelain veneers"
        />
    </BeforeAfterPhoto>,
];

const whiteningTabs = [
    <BeforeAfterPhoto key={0}>
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/whitening-1-before.jpg"
            width={406}
            height={271}
            alt="before teeth whitening"
        />
        <StaticImage
            src="../../assets/images/cosmetic-dentistry/before-and-after/whitening-1-after.jpg"
            width={406}
            height={271}
            alt="after teeth whitening"
        />
    </BeforeAfterPhoto>,
];

export const BeforeAfterSection = () => {
    const tabHeadings = ['all', 'dental implants', 'porcelain veneers', 'teeth whitening'];

    return (
        <Section>
            <h2>Before & After Photos </h2>

            <TabsPrimitive
                ariaLabel="product description and information"
                tabs={tabHeadings}
                rootStyles={rootStyles}
                listStyles={listStyles}
            >
                <SingleTab value="1">
                    <Tab>
                        {implantTabs.map(tab => tab)}
                        {whiteningTabs.map(tab => tab)}
                        {veneerTabs.map(tab => tab)}
                    </Tab>
                </SingleTab>
                <SingleTab value="2">
                    <Tab>{implantTabs.map(tab => tab)}</Tab>
                </SingleTab>
                <SingleTab value="3">
                    <Tab>{veneerTabs.map(tab => tab)}</Tab>
                </SingleTab>
                <SingleTab value="4">
                    <Tab>{whiteningTabs.map(tab => tab)}</Tab>
                </SingleTab>
            </TabsPrimitive>
            {/* 
            <BeforeAfterPhoto>
                <StaticImage
                    src="../../assets/images/cosmetic-dentistry/before-and-after/implant-1-before.jpg"
                    width={406}
                    height={271}
                    alt="before dental implants"
                />
                <StaticImage
                    src="../../assets/images/cosmetic-dentistry/before-and-after/implant-1-after.jpg"
                    width={406}
                    height={271}
                    alt="after dental implants"
                />
            </BeforeAfterPhoto> */}
        </Section>
    );
};
