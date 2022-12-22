//COMPONENTS
import { Banner } from "components/Banner";
import { Header } from "components/Header";
import { Menu } from "components/Menu";

//HOOKS
import { useTransitionBanner } from "hooks/useTransitionBanner";
import { useToggleMenu } from "hooks/useToggleMenu";
import { useGamesList } from "hooks/useGamesList";

//MOCKS
import { MenuMocks } from "mocks";
import { BannerMocks } from "mocks";
import { GamesList } from "components/GamesList";

const App = () => {
  const { icons, current } = useTransitionBanner(BannerMocks.bannerList);
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

  const { data: gamesList, loading: isGamesListLoading } = useGamesList();

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
        list={MenuMocks.gamesItems}
        footerList={MenuMocks.footerGamesList}
      />
      <Menu
        scheme="esports"
        isActive={esportsMenu}
        list={MenuMocks.esportsItems}
        footerList={MenuMocks.footerEsportsList}
      />

      <GamesList list={gamesList} />
    </>
  );
};

export default App;
