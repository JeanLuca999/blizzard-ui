import * as V from "styles/variables";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  min-height: 8rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Nav = styled.nav`
  position: relative;
  padding-left: 2.4rem;
  padding-right: 2.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  ::before {
    position: absolute;
    content: "";
    width: 4.3rem;
    height: 0.2rem;
    background-color: ${V.PRIMARY_COLOR};
    bottom: -2.5rem;
    left: 2.4rem;

    @media screen and (min-width: ${V.TABLET}) {
      bottom: -1.5rem;
    }

    @media screen and (min-width: ${V.DESKTOP}) {
      left: 0;
    }
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    padding-left: 0;
    padding-right: 0;
    max-width: 135rem;
    margin: 0 auto;
  }
`;

export const ButtonsContainer = styled.div`
  display: none;
  column-gap: 1.6rem;
  width: 100%;
  justify-content: flex-end;
  margin-right: 8rem;

  @media screen and (min-width: ${V.TABLET}) {
    display: flex;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    margin-right: 0;
  }
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

  @media screen and (min-width: ${V.DESKTOP}) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  height: 0.2rem;
  width: 2.8rem;
  background-color: #fff;
`;
