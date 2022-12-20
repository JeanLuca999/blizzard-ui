import * as V from "styles/variables";
import styled, { css } from "styled-components";
import { ReactComponent as DropIcon } from "assets/drop-icon.svg";

export const Header = styled.header`
  position: relative;
  z-index: 4;
  min-height: 8rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Nav = styled.nav`
  position: relative;
  z-index: 2;
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

export const UlDesktop = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;
  color: #fff;
  column-gap: 5rem;
  padding-left: 6.5rem;
  width: 100%;

  @media screen and (min-width: ${V.DESKTOP}) {
    display: flex;
  }
`;

export const LiDesktop = styled.li`
  display: block;
`;

type DropIconDesktopProps = {
  $active: boolean;
};
export const DropIconDesktop = styled(DropIcon)<DropIconDesktopProps>`
  width: 1rem;
  height: 1rem;
  transition: ease 0.2s;
  transform: rotateZ(0);
  ${({ $active }) =>
    $active
      ? css`
          transform: rotateZ(180deg);
          path {
            stroke: ${V.PRIMARY_COLOR};
          }
        `
      : ""}
`;

export const NavButtonDesktop = styled.button`
  display: flex;
  font-family: inherit;
  background-color: transparent;
  color: inherit;
  border: 0;
  font-size: 1.4rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  column-gap: 1.4rem;
  cursor: pointer;
  transition: ease 0.2s;
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

  @media screen and (min-width: ${V.DESKTOP}) {
    width: 8rem;
    height: 4rem;
  }
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
  height: 0.1rem;
  width: 2.8rem;
  background-color: #fff;
`;
