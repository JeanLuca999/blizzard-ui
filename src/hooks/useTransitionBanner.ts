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

export type BannerItem = {
  id: number;
  banner: string;
  title: string;
  description: string;
  ctaText: string;
  icon: string;
  alt: string;
};

const bannerList: BannerItem[] = [
  {
    id: 1,
    banner: diabloBanner,
    icon: diabloIcon,
    alt: "diablo 4",
    title: "Retorne à escuridão com o game Diablo IV",
    description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    ctaText: "Jogue agora",
  },
  {
    id: 2,
    banner: hearthstoneBanner,
    icon: hearthstoneIcon,
    alt: "hearthstone",
    title: "Novo pacote de expansão de Hearthstone",
    description:
      "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    ctaText: "Reserve agora na pré-venda",
  },
  {
    id: 3,
    banner: wowBanner,
    icon: wowIcon,
    alt: "wow",
    title: "Desbrave as Terras Sombrias em Shadowlands!",
    description: "O que jaz além do mundo que você conhece?",
    ctaText: "Reserve agora na pré-venda",
  },
];

export function useTransitionBanner() {
  const [currentItem, setCurrentItem] = useState<BannerItem>(bannerList[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const incrementIndex = (index: number) => {
    return index === bannerList.length - 1 ? 0 : index + 1;
  };

  const handleChangeCurrentItem = (item: BannerItem, index: number) => {
    setCurrentItem(item);
    setCurrentIndex(index);
  };

  const icons: Icon[] = bannerList.map((item, index) => ({
    alt: item.alt,
    icon: item.icon,
    current: currentItem.id === item.id,
    onClick: () => handleChangeCurrentItem(item, index),
  }));

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prev) => incrementIndex(prev));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentItem.id]);

  useEffect(() => {
    setCurrentItem(bannerList[currentIndex]);
  }, [currentIndex]);

  return { icons, current: currentItem };
}
