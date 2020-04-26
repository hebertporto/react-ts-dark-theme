import styled, { css } from 'styled-components';

export const ContainerHome = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    @media (min-width: 600px) {
      padding-top: 40px;
    }
  `};
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    @media (min-width: 600px) {
      width: ${theme.containers.maxSize};
    }
  `};
`;
