//COMPONENTS
import { Banner } from "components/Banner";
import { Header } from "components/Header";
import { useTransitionBanner } from "hooks/useTransitionBanner";

import diabloLogoBanner from "assets/diablo-logo-banner.png";
import diabloGifPoster from "assets/diablo-animation-cover.png";
import diabloGifSrc from "assets/diablo-animation.gif";

const App = () => {
  const { icons, current } = useTransitionBanner();
  return (
    <>
      <Banner
        title={current.title}
        description={current.description}
        ctaText={current.ctaText}
        banner={current.banner}
        logoBanner={diabloLogoBanner}
        gifPoster={diabloGifPoster}
        gifSrc={diabloGifSrc}
        icons={icons}
      >
        <Header />
      </Banner>
    </>
  );
};

export default App;
