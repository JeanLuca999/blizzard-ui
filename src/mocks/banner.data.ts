//IMAGES
import diabloBanner from "assets/diablo-banner.png";
import hearthstoneBanner from "assets/hearthstone-banner.png";
import wowBanner from "assets/wow-banner.png";

import diabloIcon from "assets/diablo-icon.png";
import hearthstoneIcon from "assets/hearthstone-icon.png";
import wowIcon from "assets/wow-icon.png";
import diabloI from "assets/diablo-i-icon.png";
import starcraftIcon from "assets/starcraft-icon.png";

import diabloLogoBanner from "assets/diablo-logo-banner.png";
import diabloGifPoster from "assets/diablo-animation-cover.png";
import diabloGifSrc from "assets/diablo-animation.gif";

import hearthstoneLogoBanner from "assets/hearthstone-logo-banner.png";
import hearthstoneGifPoster from "assets/hearthstone-animation-cover.png";
import hearthstoneGifSrc from "assets/hearthstone-animation.gif";

import wowLogoBanner from "assets/wow-logo-banner.png";
import wowGifPoster from "assets/wow-animation-cover.png";
import wowGifSrc from "assets/wow-animation.gif";

export const bannerList = [
  {
    id: 1,
    banner: diabloBanner,
    logoBanner: diabloLogoBanner,
    gifPoster: diabloGifPoster,
    gifSrc: diabloGifSrc,
    icon: diabloIcon,
    alt: "diablo 4",
    title: "Retorne à escuridão com o game Diablo IV",
    description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    ctaText: "Jogue agora",
  },
  {
    id: 2,
    banner: hearthstoneBanner,
    logoBanner: hearthstoneLogoBanner,
    gifPoster: hearthstoneGifPoster,
    gifSrc: hearthstoneGifSrc,
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
    logoBanner: wowLogoBanner,
    gifPoster: wowGifPoster,
    gifSrc: wowGifSrc,
    icon: wowIcon,
    alt: "wow",
    title: "Desbrave as Terras Sombrias em Shadowlands!",
    description: "O que jaz além do mundo que você conhece?",
    ctaText: "Reserve agora na pré-venda",
  },
];
