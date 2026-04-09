import styled from '@emotion/styled';
import { flexCenter, titleLine } from './layout/styles/classes';
import { ReactNode } from 'react';

const Section = styled.section`
    padding: 60px 20px;
    text-align: center;

    > h2 {
        ${titleLine};
        padding: 0 30px;
        margin: 0 0 40px;
    }

    > .gatsby-image-wrapper {
        max-width: max-content;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        padding: 60px 50px;

        > div:not(.gatsby-image-wrapper) {
            flex-wrap: nowrap;
            align-items: flex-start;

            > div:not(.gatsby-image-wrapper) {
                flex: 1;
            }
        }
    }

    @media (min-width: 1024px) {
        padding: 100px 70px;
    }
`;

const Flex = styled.div`
    ${flexCenter};
    flex-wrap: wrap;
    gap: 40px;

    > div:not(.gatsby-image-wrapper) {
        max-width: 415px;

        > p {
            :last-of-type {
                margin: 0;
            }

            > a {
                font-weight: 700;
                transition: opacity 0.3s ease-in-out;

                :hover,
                :focus {
                    opacity: 0.75;
                }
            }
        }

        > h3 {
            text-transform: none;
            font-weight: 700;
            font-size: 1rem;
            margin: 10px 0;
        }
    }
`;

type Props = {
    title: ReactNode;
    children: ReactNode;
    className?: string;
};
export const CircleImgSection = ({ title, children, className }: Props) => {
    return (
        <Section className={className}>
            {title}
            <Flex>{children}</Flex>
        </Section>
    );
};
