import { Button } from "components/Button";
import * as S from "./styles";

//IMAGES
import blizzardLogo from "assets/blizzard-logo.svg";
import userIcon from "assets/user.svg";

export interface IHeader {
  isGamesMenuActive: boolean;
  isEsportsMenuActive: boolean;
  gamesMenuOnclick: () => void;
  esportsMenuOnclick: () => void;
}
export const Header = (props: IHeader) => {
  const {
    isGamesMenuActive,
    isEsportsMenuActive,
    gamesMenuOnclick,
    esportsMenuOnclick,
  } = props;
  return (
    <S.Header>
      <S.Nav>
        <S.Logo alt="blizzard" src={blizzardLogo} />

        <S.UlDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop onClick={gamesMenuOnclick}>
              Jogar <S.DropIconDesktop active={isGamesMenuActive} />
            </S.NavButtonDesktop>
          </S.LiDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop onClick={esportsMenuOnclick}>
              Esportes <S.DropIconDesktop active={isEsportsMenuActive} />
            </S.NavButtonDesktop>
          </S.LiDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop>Loja</S.NavButtonDesktop>
          </S.LiDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop>Notícias</S.NavButtonDesktop>
          </S.LiDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop>Suporte</S.NavButtonDesktop>
          </S.LiDesktop>
        </S.UlDesktop>

        <S.ButtonsContainer>
          <Button scheme="outlined" padding="1rem 1.6rem">
            Criar conta
          </Button>
          <Button scheme="fill" padding="1rem 2rem" iconSrc={userIcon}>
            Logar
          </Button>
        </S.ButtonsContainer>
        <S.MenuWrapper role="button" aria-label="menu">
          <S.MenuItem />
          <S.MenuItem />
          <S.MenuItem />
        </S.MenuWrapper>
      </S.Nav>
    </S.Header>
  );
};
