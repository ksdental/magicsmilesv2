import styled from '@emotion/styled';
import Plain from './Plain';

export default styled(Plain)`
    padding: 16px 28px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease-in-out;
    text-transform: capitalize;

    > svg {
        margin-right: 12px;
    }

    :hover {
        background-color: ${({ theme }) => theme.colors.darkBlue};
    }

    :focus-visible {
        background-color: ${({ theme }) => theme.colors.darkBlue};
    }
`;
