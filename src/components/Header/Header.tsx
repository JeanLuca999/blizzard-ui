import { Button } from "components/Button";
import { Menu } from "components/Menu";
import * as S from "./styles";

//IMAGES
import blizzardLogo from "assets/blizzard-logo.svg";
import userIcon from "assets/user.svg";
import diablo2Icon from "assets/diablo-2-icon.png";
import overwatchIcon from "assets/overwatch-icon.png";
import wowIcon from "assets/wow-icon.png";
import hearthstoneIcon from "assets/hearthstone-icon.png";
import heroesOfStormIcon from "assets/heroes-of-storm-icon.png";
import warcraft3Icon from "assets/warcraft-3-icon.png";
import diabloIcon from "assets/diablo-icon.png";
import diabloImortalIcon from "assets/diablo-i-icon.png";
import diablo3Icon from "assets/diablo-3-icon.png";
import starcraftIcon from "assets/starcraft-icon.png";
import starcraftREIcon from "assets/starcraft-re-icon.png";
import arcadeIcon from "assets/arcade-icon.png";

import seeAllIcon from "assets/see-all-icon.svg";
import battleNetIcon from "assets/battle-net-icon.svg";
import downloadsIcon from "assets/downloads-icon.svg";
import forumIcon from "assets/forum-icon.svg";

//HOOKS
import { useToggleMenu } from "hooks/useToggleMenu";

export const Header = () => {
  const {
    isShowing: gamesMenu,
    handleToggleMenu: handleToggleGamesMenu,
    handleActiveMenu: handleActiveGamesMenu,
    handleHideMenu: handleHideGamesMenu,
  } = useToggleMenu();

  const {
    isShowing: esportsMenu,
    handleToggleMenu: handleToggleEsportsMenu,
    handleActiveMenu: handleActiveEsportsMenu,
    handleHideMenu: handleHideEsportsMenu,
  } = useToggleMenu();

  const gamesItems = [
    { image: diablo2Icon, text: "Diablo® II ressurected" },
    { image: overwatchIcon, text: "Overwatch® 2" },
    { image: wowIcon, text: "World of Warcraft®" },
    { image: hearthstoneIcon, text: "Hearthstone®" },
    { image: heroesOfStormIcon, text: "Heroes of the storm®" },
    { image: warcraft3Icon, text: "Warcraft® III Reforged" },
    { image: diabloIcon, text: "Diablo® IV" },
    { image: diabloImortalIcon, text: "Diablo®\n Immortal" },
    { image: diablo3Icon, text: "Diablo® III" },
    { image: starcraftIcon, text: "StarCraft® II" },
    { image: starcraftREIcon, text: "StarCraft® Remastered" },
    { image: arcadeIcon, text: "Arcade da Blizzard®" },
  ];

  const footerGamesList = [
    { image: seeAllIcon, text: "Ver todos os jogos" },
    { image: battleNetIcon, text: "Aplicativo Battle.net" },
    { image: downloadsIcon, text: "Downloads" },
    { image: forumIcon, text: "Fóruns dos jogos" },
  ];

  return (
    <>
      <S.Header>
        <S.Nav>
          <S.Logo alt="blizzard" src={blizzardLogo} />

          <S.UlDesktop>
            <S.LiDesktop>
              <S.NavButtonDesktop onClick={handleToggleGamesMenu}>
                Jogar <S.DropIconDesktop />
              </S.NavButtonDesktop>
            </S.LiDesktop>
            <S.LiDesktop>
              <S.NavButtonDesktop onClick={handleToggleEsportsMenu}>
                Esportes <S.DropIconDesktop />
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

      <Menu
        isActive={gamesMenu}
        list={gamesItems}
        footerList={footerGamesList}
      />
    </>
  );
};
