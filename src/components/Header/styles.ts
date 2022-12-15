import styled from "styled-components";

export const Header = styled.header`
  min-height: 8rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Nav = styled.nav`
  padding-left: 2.4rem;
  padding-right: 2.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.img`
  display: block;
  object-fit: contain;
  width: 6.9rem;
  height: 3.2rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.9rem;
`;

export const MenuItem = styled.div`
  height: 0.2rem;
  width: 2.8rem;
  background-color: #fff;
`;
