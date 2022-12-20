//COMPONENTS
import { Banner } from "components/Banner";
import { Header } from "components/Header";

//HOOKS
import { useTransitionBanner } from "hooks/useTransitionBanner";

//IMAGES
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
import { useToggleMenu } from "hooks/useToggleMenu";
import { Menu } from "components/Menu";

import hearthstoneEsportsIcon from "assets/hearthstone-esports.png";
import wowEsportsIcon from "assets/wow-esports.png";
import starcraftEsportsIcon from "assets/starcraft-esports.png";
import overwatchEsportsIcon from "assets/overwatch-esports.png";
import overwatchLeagueEsportsIcon from "assets/overwatch-league-esports.png";

import tournamentIcon from "assets/tournament-icon.svg";

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

const esportsItems = [
  { image: hearthstoneEsportsIcon, text: "Hearthstone® masters" },
  { image: wowEsportsIcon, text: "Campeonato Mundial de Arena WoW®" },
  { image: starcraftEsportsIcon, text: "StarCraft® II WCS" },
  { image: overwatchEsportsIcon, text: "Copa Mundial de Overwatch®" },
  { image: overwatchLeagueEsportsIcon, text: "Liga de Overwatch®" },
];

const footerEsportsList = [
  { image: tournamentIcon, text: "Torneios da comunidade" },
];

const App = () => {
  const { icons, current } = useTransitionBanner();
  const {
    isShowing: gamesMenu,
    handleToggleMenu: handleToggleGamesMenu,
    handleHideMenu: handleHideGamesMenu,
  } = useToggleMenu();

  const {
    isShowing: esportsMenu,
    handleToggleMenu: handleToggleEsportsMenu,
    handleHideMenu: handleHideEsportsMenu,
  } = useToggleMenu();

  const onToggleGamesMenu = () => {
    handleToggleGamesMenu();
    handleHideEsportsMenu();
  };

  const onToggleEsportsMenu = () => {
    handleToggleEsportsMenu();
    handleHideGamesMenu();
  };

  return (
    <>
      <Banner
        title={current.title}
        description={current.description}
        ctaText={current.ctaText}
        banner={current.banner}
        logoBanner={current.logoBanner}
        gifPoster={current.gifPoster}
        gifSrc={current.gifSrc}
        icons={icons}
      >
        <Header
          isGamesMenuActive={gamesMenu}
          isEsportsMenuActive={esportsMenu}
          gamesMenuOnclick={onToggleGamesMenu}
          esportsMenuOnclick={onToggleEsportsMenu}
        />
      </Banner>

      <Menu
        scheme="games"
        isActive={gamesMenu}
        list={gamesItems}
        footerList={footerGamesList}
      />
      <Menu
        scheme="esports"
        isActive={esportsMenu}
        list={esportsItems}
        footerList={footerEsportsList}
      />
    </>
  );
};

export default App;
