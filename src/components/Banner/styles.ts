import * as V from "styles/variables";
import styled, { keyframes } from "styled-components";

export const ProgressBar = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  min-height: 62.5rem;
  padding-bottom: 6rem;
  position: relative;
  background-image: radial-gradient(
    73.1% 73.1% at 52.6% 25.14%,
    rgba(2, 2, 3, 0) 0%,
    #020203 100%
  );
  mix-blend-mode: unset;
`;

export const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 0.3rem;
  background-color: ${V.PRIMARY_COLOR};
  bottom: 0;
  left: 0;
  animation-name: ${ProgressBar};
  animation-timing-function: linear;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

export const BannerImage = styled.img`
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const LogoBanner = styled.img`
  display: none;
  position: relative;
  top: -6rem;
  width: 25rem;
  height: 20rem;
  object-fit: contain;
  object-position: center;
  align-self: start;
  justify-self: end;

  @media screen and (min-width: ${V.TABLET}) {
    display: block;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  min-height: calc(62.5rem - 8rem);
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin-top: 7rem;

  @media screen and (min-width: ${V.TABLET}) {
    grid-template-columns: 1fr 28rem;
    grid-template-rows: auto 1fr;
  }
`;

export const ContentText = styled.div`
  min-height: 36rem;
`;

export const ContentIcons = styled.div`
  display: flex;
  column-gap: 1rem;
  align-self: end;
`;

export const ContentGif = styled.div`
  display: none;
  align-self: end;

  @media screen and (min-width: ${V.TABLET}) {
    display: block;
  }
`;

export const TitleGif = styled.span`
  display: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${V.DESKTOP}) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 3rem + 2vw, 4rem);
  width: 80%;
  max-width: 62rem;
  font-weight: 700;
  line-height: 110%;
  color: #fff;

  @media screen and (min-width: ${V.TABLET}) {
    font-size: clamp(3.5rem, 3.5rem + 2vw, 6.4rem);
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  min-height: 5ch;
  font-weight: 400;
  color: #fff;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
`;

export const CTA = styled.button`
  font-family: inherit;
  border: 0;
  background-color: ${V.PRIMARY_COLOR};
  border-radius: 4px;
  padding: 1.4rem 3.2rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  cursor: pointer;
  transition: 0.4s ease;

  :hover,
  :focus {
    background-color: ${V.HOVER_COLOR};
  }
`;

type IconProps = {
  current: boolean;
};
export const Icon = styled.img<IconProps>`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: contain;
  transition: ease 0.4s;
  cursor: pointer;
  filter: ${({ current }) => (current ? "none" : "grayscale(100%)")};
`;
