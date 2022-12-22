import styled from "styled-components";
import { ReactComponent as SeeAllIcon } from "assets/see-all-icon.svg";
import * as V from "styles/variables";

export const Wrapper = styled.div`
  max-width: 135rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  background-color: ${V.BACKGROUND_MAIN};
  padding-top: 5.7rem;
  padding-bottom: 6.8rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5.7rem;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  color: #fff;
  font-weight: 700;
  max-width: 5ch;
  line-height: 110%;

  @media screen and (min-width: ${V.TABLET}) {
    font-size: 3.2rem;
  }
`;

export const Category = styled.p`
  display: none;
  text-transform: uppercase;
  font-weight: 600;
  color: #8f9199;
  font-size: 1.5rem;

  @media screen and (min-width: ${V.DESKTOP}) {
    display: block;
  }
`;

export const IconsContainer = styled.div`
  display: none;
  column-gap: 2.4rem;
  justify-content: center;
  align-items: flex-end;

  @media screen and (min-width: ${V.TABLET}) {
    display: flex;
  }
`;

export const SeeAllGames = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${V.PRIMARY_COLOR};
  align-self: flex-end;

  @media screen and (min-width: ${V.TABLET}) {
    font-size: 1.6rem;
  }
`;

export const Icon = styled.img`
  object-fit: contain;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2.4rem;
  column-gap: 1.6rem;

  @media screen and (min-width: ${V.TABLET}) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 4rem;
    column-gap: 3.2rem;
  }

  @media screen and (min-width: ${V.DESKTOP}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 4.9rem;
  }
`;

export const BlizzardCard = styled.div`
  border: 1.5px solid #212428;
  padding: 1rem;
  line-height: 150%;
  aspect-ratio: 3/4;
  display: flex;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;
`;

export const BlizzardLogo = styled.img`
  width: 6.9rem;
  height: 3.1rem;
  object-fit: contain;
`;

export const BlizzardCardText = styled.p`
  font-size: 1.4rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.3rem;
`;

export const CustomSeeAllIcon = styled(SeeAllIcon)`
  display: none;
  rect {
    fill: #fff;
  }

  @media screen and (min-width: ${V.TABLET}) {
    display: block;
  }
`;
