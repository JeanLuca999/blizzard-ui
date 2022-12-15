//COMPONENTS
import { Banner } from "components/Banner";
import { Header } from "components/Header";

//TYPES
import { Icon } from "components/Banner";

//IMAGES
import diabloBanner from "assets/diablo-banner.png";

import diabloIcon from "assets/diablo-icon.png";
import hearthstoneIcon from "assets/hearthstone-icon.png";
import wowIcon from "assets/wow-icon.png";
import diabloI from "assets/diablo-i-icon.png";
import starcraftIcon from "assets/starcraft-icon.png";

const App = () => {
  const gameIcons: Icon[] = [
    {
      alt: "diablo icon",
      icon: diabloIcon,
      onClick: () => console.log("clicked"),
    },
    {
      alt: "hearthstone icon",
      icon: hearthstoneIcon,
      onClick: () => console.log("clicked"),
    },
    { alt: "wow icon", icon: wowIcon, onClick: () => console.log("clicked") },
    {
      alt: "diablo 1 icon",
      icon: diabloI,
      onClick: () => console.log("clicked"),
    },
    {
      alt: "starcraft icon",
      icon: starcraftIcon,
      onClick: () => console.log("clicked"),
    },
  ];
  return (
    <>
      <Banner
        title="Retorne à escuridão com o game Diablo IV"
        description="O retorno de Lilith traz uma era de escuridão e sofrimento"
        ctaText="Jogue agora"
        banner={diabloBanner}
        icons={gameIcons}
      >
        <Header />
      </Banner>
    </>
  );
};

export default App;
