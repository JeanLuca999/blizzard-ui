import { Button } from "components/Button";
import * as S from "./styles";

//IMAGES
import blizzardLogo from "assets/blizzard-logo.svg";
import userIcon from "assets/user.svg";

export interface IHeader {
  isGamesMenuActive: boolean;
  isEsportsMenuActive: boolean;
  gamesMenuOnClick: () => void;
  esportsMenuOnClick: () => void;
  loginMenuOnClick: () => void;
}
export const Header = (props: IHeader) => {
  const {
    isGamesMenuActive,
    isEsportsMenuActive,
    gamesMenuOnClick,
    esportsMenuOnClick,
    loginMenuOnClick,
  } = props;
  return (
    <S.Header>
      <S.Nav>
        <S.Logo alt="blizzard" src={blizzardLogo} />

        <S.UlDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop onClick={gamesMenuOnClick}>
              Jogar <S.DropIconDesktop $active={isGamesMenuActive} />
            </S.NavButtonDesktop>
          </S.LiDesktop>
          <S.LiDesktop>
            <S.NavButtonDesktop onClick={esportsMenuOnClick}>
              Esportes <S.DropIconDesktop $active={isEsportsMenuActive} />
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
          <Button
            scheme="fill"
            padding="1rem 2rem"
            iconSrc={userIcon}
            onClick={loginMenuOnClick}
          >
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
