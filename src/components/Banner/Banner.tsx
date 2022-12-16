import { ReactNode } from "react";
import { Button } from "components/Button";
import * as S from "./styles";
import { GifViewer } from "components/GifViewer";

export type Icon = {
  alt?: string;
  icon: string;
  current: boolean;
  onClick: () => void;
};

export interface IBanner {
  title: string;
  description: string;
  ctaText: string;
  children: ReactNode;
  banner: string;
  logoBanner: string;
  gifPoster: string;
  gifSrc: string;
  icons: Icon[];
}

export const Banner = (props: IBanner) => {
  const {
    children,
    title,
    description,
    ctaText,
    banner,
    logoBanner,
    gifPoster,
    gifSrc,
    icons,
  } = props;
  return (
    <S.Wrapper>
      <S.Loader key={banner} />
      <S.BannerImage alt="banner" src={banner} />
      {children}
      <S.Container>
        <S.ContentText>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <Button scheme="fill">{ctaText}</Button>
        </S.ContentText>

        <S.LogoBanner src={logoBanner} alt="" />

        <S.ContentIcons>
          {!!icons.length &&
            icons.map((item) => (
              <S.Icon
                key={item.icon}
                src={item.icon}
                onClick={item.onClick}
                alt={item.alt}
                current={item.current}
                tabIndex={0}
              />
            ))}
        </S.ContentIcons>

        <S.ContentGif>
          <S.TitleGif>Assista o trailer</S.TitleGif>
          <GifViewer poster={gifPoster} src={gifSrc} />
        </S.ContentGif>
      </S.Container>
    </S.Wrapper>
  );
};
