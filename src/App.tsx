//COMPONENTS
import { Banner } from "components/Banner";
import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { GamesList } from "components/GamesList";
import { BattlenetAbout } from "components/BattlenetAbout";

//HOOKS
import { useTransitionBanner } from "hooks/useTransitionBanner";
import { useToggleMenu } from "hooks/useToggleMenu";
import { useGamesList } from "hooks/useGamesList";
import { useVerifyUserDevice } from "hooks/useVerifyUserDevice";

//MOCKS
import { MenuMocks } from "mocks";
import { BannerMocks } from "mocks";
import { CreateAccount } from "components/CreateAccount";

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

  const {
    isShowing: loginMenu,
    handleToggleMenu: handleToggleLoginMenu,
    handleHideMenu: handleHideLoginMenu,
  } = useToggleMenu();

  const { data: gamesList } = useGamesList();

  const { name, icon } = useVerifyUserDevice(window.navigator.userAgent);

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
          gamesMenuOnClick={onToggleGamesMenu}
          esportsMenuOnClick={onToggleEsportsMenu}
          loginMenuOnClick={handleToggleLoginMenu}
        />
      </Banner>

      {loginMenu && <CreateAccount onClose={handleHideLoginMenu} />}

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

      <BattlenetAbout deviceName={name} deviceIcon={icon} />
    </>
  );
};

export default App;
