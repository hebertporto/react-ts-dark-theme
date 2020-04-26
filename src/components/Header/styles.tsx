import styled, { css } from 'styled-components';

export const ContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background-color: ${theme.navBar.background};
    @media (min-width: 600px) {
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 600px) {
      width: ${theme.containers.maxSize};
    }
  `};
`;


export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.navBar.title};
    font-weight: 700;
    font-size: 22px;
    @media (min-width: 600px) {
    }
  `};
`;
