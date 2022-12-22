import * as S from "./styles";
import { Card, ICard } from "components/Card";

//IMAGES
import seeAllIcon from "assets/see-all-icon.svg";
import blizzardLogo from "assets/blizzard-logo.svg";
import battlenetWhiteIcon from "assets/battle-net-white-icon.svg";
import switchIcon from "assets/switch-icon.svg";
import xboxIcon from "assets/xbox-icon.svg";
import playstationIcon from "assets/playstation-icon.svg";

export interface IGamesList {
  list: ICard[];
}

export const GamesList = (props: IGamesList) => {
  const { list } = props;
  return (
    <S.Wrapper>
      <S.HeaderInfo>
        <S.Category>games</S.Category>
        <S.Title>Jogos exclusivos</S.Title>

        <S.IconsContainer>
          <S.Icon src={battlenetWhiteIcon} alt="battlenet" />
          <S.Icon src={switchIcon} alt="switch" />
          <S.Icon src={xboxIcon} alt="xbox" />
          <S.Icon src={playstationIcon} alt="playstation" />
        </S.IconsContainer>

        <S.SeeAllGames>
          <S.Icon src={seeAllIcon} alt="see-all-games" /> Ver todos jogos
        </S.SeeAllGames>
      </S.HeaderInfo>

      <S.GridContainer>
        {list.map((item, index) => (
          <Card
            category={item.category}
            image={item.image}
            logo={item.logo}
            name={item.name}
            key={index}
          />
        ))}
        <S.BlizzardCard>
          <S.BlizzardLogo alt="blizzard-logo" src={blizzardLogo} />
          <S.BlizzardCardText>
            <S.CustomSeeAllIcon /> Ver todos jogos
          </S.BlizzardCardText>
        </S.BlizzardCard>
      </S.GridContainer>
    </S.Wrapper>
  );
};
