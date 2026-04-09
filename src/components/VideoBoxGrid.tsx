import styled from '@emotion/styled';

export const VideoBoxGrid = styled.div`
    display: grid;
    gap: 40px;
    justify-content: center;

    > div {
        max-width: 550px;
        text-align: left;

        h5 {
            font-size: 1.125rem;
            line-height: 1.1;
        }
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`;
