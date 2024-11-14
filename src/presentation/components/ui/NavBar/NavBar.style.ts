import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.km15};
`;

export const NavbarContent = styled.div<{ fluid?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  max-width: ${({ fluid }) => (fluid ? '100%' : '1140px')};
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const BarsMenu = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: 15px;
`;

export const Logo = styled.img`
  flex: 1;
  max-width: 100px;
`;

export const Menu = styled.ul`
  flex: 2;
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 33px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const User = styled.p`
  flex-grow: inherit;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.sz8};

  span {
    text-transform: capitalize;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 10px;
  }
`;
