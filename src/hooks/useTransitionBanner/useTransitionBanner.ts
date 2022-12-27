//TYPES
import { Icon } from "components/Banner";

import { useEffect, useState } from "react";

export type BannerItem = {
  id: number;
  banner: string;
  logoBanner: string;
  gifPoster: string;
  gifSrc: string;
  title: string;
  description: string;
  ctaText: string;
  icon: string;
  alt: string;
};

export function useTransitionBanner(bannerList: BannerItem[]) {
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
