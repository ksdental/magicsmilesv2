import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const Section = styled.div`
    position: relative;
    z-index: 10;

    ::before {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        background-color: rgba(255, 255, 255, 0.62);
    }

    > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid;
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 7px;
        border-color: rgba(56, 56, 56, 0.37);
        padding: 12px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const CenterIcon = () => {
    return (
        <Section>
            <div>
                <StaticImage
                    src="../../assets/images/icon.png"
                    alt="magic smile dental icon"
                    width={74}
                    height={74}
                />
            </div>
        </Section>
    );
};
