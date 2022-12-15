//TYPES
import { Icon } from "components/Banner";

//IMAGES
import diabloBanner from "assets/diablo-banner.png";
import hearthstoneBanner from "assets/hearthstone-banner.png";
import wowBanner from "assets/wow-banner.png";

import diabloIcon from "assets/diablo-icon.png";
import hearthstoneIcon from "assets/hearthstone-icon.png";
import wowIcon from "assets/wow-icon.png";
import diabloI from "assets/diablo-i-icon.png";
import starcraftIcon from "assets/starcraft-icon.png";

import { useEffect, useState } from "react";

export function useTransitionBanner() {
  const bannerList = [
    {
      banner: diabloBanner,
      title: "Retorne à escuridão com o game Diablo IV",
      description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
      ctaText: "Jogue agora",
    },
    {
      banner: hearthstoneBanner,
      title: "Novo pacote de expansão de Hearthstone",
      description:
        "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
      ctaText: "Reserve agora na pré-venda",
    },
    {
      banner: wowBanner,
      title: "Desbrave as Terras Sombrias em Shadowlands!",
      description: "O que jaz além do mundo que você conhece?",
      ctaText: "Reserve agora na pré-venda",
    },
  ];
  const [currentBanner, setCurrentBanner] = useState(bannerList[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const gameIcons: Icon[] = [
    {
      alt: "diablo icon",
      icon: diabloIcon,
      onClick: () => setCurrentBanner(bannerList[0]),
    },
    {
      alt: "hearthstone icon",
      icon: hearthstoneIcon,
      onClick: () => setCurrentBanner(bannerList[1]),
    },
    {
      alt: "wow icon",
      icon: wowIcon,
      onClick: () => setCurrentBanner(bannerList[2]),
    },
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

  const incrementIndex = (index: number) => {
    if (index === bannerList.length - 1) {
      return 0;
    }
    return index + 1;
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prev) => incrementIndex(prev));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentBanner(bannerList[currentIndex]);
  }, [currentIndex]);

  return { icons: gameIcons, current: currentBanner };
}