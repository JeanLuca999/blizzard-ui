import styled from "styled-components";
import * as V from "styles/variables";
import backgroundImageMobile from "assets/background-mobile.png";
import backgroundImageTablet from "assets/background-tablet.png";
import backgroundImageDesktop from "assets/background-desktop.png";
import backgroundImageLargeDesktop from "assets/background-large-desktop.png";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 6rem;
  background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${backgroundImageMobile});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: normal;

  @media screen and (min-width: ${V.TABLET}) {
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${backgroundImageTablet});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 11rem;
    padding-bottom: 10rem;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${backgroundImageDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 25rem;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 60%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%),
      url(${backgroundImageLargeDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    padding-bottom: 30rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  max-width: 135rem;
  padding: 0 2.4rem;
  padding-bottom: 2rem;
  margin: 0 auto;
`;

export const ImagesContainer = styled.div`
  position: relative;
  min-height: min(calc(28rem + 22vw), 50rem);
  right: -2rem;
  pointer-events: none;

  @media screen and (min-width: ${V.TABLET}) {
    position: absolute;
    top: calc(10rem + 10vw);
    width: 100%;
    right: calc(-28rem - 10vw);
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    top: min(calc(10rem + 15vw), 35.5rem);
    right: -10vw;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    right: 1vw;
  }
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const BattlenetImg = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 6rem;
  right: 0;
  object-fit: cover;
  object-position: right;
  height: auto;
  width: 100%;
  max-width: 53rem;

  @media screen and (min-width: ${V.TABLET}) {
    max-width: 80rem;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    max-width: 100rem;
  }
`;

export const WowImg = styled.img`
  position: absolute;
  z-index: 2;
  bottom: 6rem;
  right: 0;
  object-fit: cover;
  object-position: right;
  height: auto;
  width: 80%;
  max-width: 27rem;

  @media screen and (min-width: ${V.TABLET}) {
    max-width: 46rem;
    right: calc(10rem + 10vw);
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    max-width: 56rem;
    right: 4vw;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    right: 10vw;
    bottom: 10rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  line-height: 110%;
  margin: 3rem 0;
  max-width: 13ch;

  @media screen and (min-width: ${V.TABLET}) {
    font-size: 3.2rem;
  }

  @media screen and (min-width: ${V.LARGE_DESKTOP}) {
    max-width: 30ch;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin-bottom: 4rem;
`;

export const Li = styled.li`
  display: flex;
  column-gap: 1.6rem;
  align-items: center;
  justify-content: flex-start;
  color: #bcc0ca;
  font-size: 1.8rem;
  text-align: left;
  margin-bottom: 2.4rem;

  :last-child {
    margin-bottom: 0;
  }
`;

export const AppInfo = styled.div`
  margin-top: 4rem;
  display: flex;
  column-gap: 1.8rem;
`;

export const AppText = styled.p`
  font-size: 1.4rem;
  color: #e5e5e5;
  font-weight: 600;
  max-width: 25rem;
`;

export const Underline = styled.span`
  text-decoration: underline;
`;
