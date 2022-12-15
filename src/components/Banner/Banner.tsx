import { ReactNode } from "react";
import * as S from "./styles";

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
  icons: Icon[];
}

export const Banner = (props: IBanner) => {
  const { children, title, description, ctaText, banner, icons } = props;
  return (
    <S.Wrapper>
      <S.Loader key={banner} />
      <S.BannerImage alt="banner" src={banner} />
      {children}
      <S.Container>
        <S.ContentText>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.CTA>{ctaText}</S.CTA>
        </S.ContentText>

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
      </S.Container>
    </S.Wrapper>
  );
};
