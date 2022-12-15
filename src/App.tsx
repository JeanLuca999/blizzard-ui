//COMPONENTS
import { Banner } from "components/Banner";
import { Header } from "components/Header";
import { useTransitionBanner } from "hooks/useTransitionBanner";

const App = () => {
  const { icons, current } = useTransitionBanner();
  return (
    <>
      <Banner
        title={current.title}
        description={current.description}
        ctaText={current.ctaText}
        banner={current.banner}
        icons={icons}
      >
        <Header />
      </Banner>
    </>
  );
};

export default App;
