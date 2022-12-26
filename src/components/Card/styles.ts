import styled from "styled-components";
import * as V from "styles/variables";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 130%;
    height: 100%;
    background: linear-gradient(
      182.71deg,
      #020203 2.26%,
      rgba(2, 2, 3, 0) 73.74%
    );
    transform: rotate(-180deg);
    z-index: 2;
    bottom: -100%;
    transition: ease-in-out 0.2s;
  }

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  object-fit: cover;
  transition: ease-in-out 0.2s;
  border-radius: 4px;
`;

export const Logo = styled.img`
  position: relative;
  object-fit: contain;
  width: 8.1rem;
  height: 5.4rem;
  bottom: 2rem;
  z-index: 3;

  @media screen and (min-width: ${V.TABLET}) {
    width: 10rem;
    height: 7.8rem;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    width: 14rem;
    height: 9.8rem;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    width: 16rem;
    height: 10rem;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
  color: #e5e5e5;
  margin-top: 1.7rem;
  display: none;

  @media screen and (min-width: ${V.TABLET}) {
    display: block;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    margin-top: 2.4rem;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    font-size: 1.9rem;
    margin-top: 2.5rem;
  }
`;

export const Category = styled.p`
  font-weight: 400;
  color: #e5e5e5;
  font-size: 1.4rem;
  display: none;
  opacity: 0.7;

  @media screen and (min-width: ${V.TABLET}) {
    display: block;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    font-size: 1.6rem;
  }
`;

export const Wrapper = styled.div`
  display: block;

  aspect-ratio: 3/4;
  :hover,
  :focus {
    ${Container} {
      ::before {
        bottom: -5%;
      }
    }

    ${Image} {
      top: -10px;
      transform: scale(1.1);
    }
  }
`;
