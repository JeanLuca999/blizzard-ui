import styled from "styled-components";
import * as V from "styles/variables";
import backgroundImage from "assets/background.png";

/**
  radial-gradient(
      61.91% 61.91% at 58.62% 25.94%,
      transparent 0%,
      rgba(196, 196, 196, 0) 100%
    ),
 */

export const Wrapper = styled.div`
  padding-top: 6rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${V.TABLET}) {
    padding-top: 11rem;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    padding-bottom: 10rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 44rem;
  width: 100%;

  @media screen and (min-width: ${V.TABLET}) {
    grid-template-columns: 35rem 1fr;
    justify-content: space-between;
    grid-template-rows: 1fr;
    padding-bottom: 7rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 0 2.4rem;
`;

export const ImagesContainer = styled.div`
  position: relative;

  /* ::before {
    position: absolute;
    content: "";
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 80%
    );
    z-index: 1;

    @media screen and (min-width: ${V.TABLET}) {
      display: none;
    }
  } */
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const BattlenetImg = styled.img`
  object-fit: scale-down;
  position: absolute;
  bottom: 0;
  object-position: right;
  z-index: 0;
  object-position: right;
  max-width: 770px;
  right: 0;
`;

export const WowImg = styled.img`
  object-fit: scale-down;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  object-position: right;
  max-width: 600px;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  line-height: 110%;
  margin: 3rem 0;
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
