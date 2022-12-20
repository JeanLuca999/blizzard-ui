import * as S from "./styles";

export type MenuListItem = {
  image: string;
  text: string;
};

export type MenuScheme = "games" | "esports";

export interface IMenu {
  scheme: MenuScheme;
  isActive: boolean;
  list: MenuListItem[];
  footerList?: MenuListItem[];
}

export const Menu = (props: IMenu) => {
  const { scheme, isActive, list, footerList } = props;

  if (scheme === "games") {
    return (
      <S.Wrapper isActive={isActive}>
        <S.GamesItemsWrapper>
          {list.map((item, index) => (
            <S.GamesItemContainer key={index}>
              <S.GamesItemImage src={item.image} alt={item.text} />
              <S.GamesItemText>{item.text}</S.GamesItemText>
            </S.GamesItemContainer>
          ))}
        </S.GamesItemsWrapper>
        <S.Footer>
          {footerList?.map((item, index) => (
            <S.FooterItem key={index}>
              <S.FooterItemImage src={item.image} alt={item.text} />
              <S.FooterItemText>{item.text}</S.FooterItemText>
            </S.FooterItem>
          ))}
        </S.Footer>
      </S.Wrapper>
    );
  }

  if (scheme === "esports") {
    return (
      <S.Wrapper isActive={isActive}>
        <S.EsportsItemsWrapper>
          {list.map((item, index) => (
            <S.EsportsItemContainer key={index}>
              <S.EsportsItemImage src={item.image} alt={item.text} />
              <S.EsportsItemText>{item.text}</S.EsportsItemText>
            </S.EsportsItemContainer>
          ))}
        </S.EsportsItemsWrapper>
        <S.Footer>
          {footerList?.map((item, index) => (
            <S.FooterItem key={index}>
              <S.FooterItemImage src={item.image} alt={item.text} />
              <S.FooterItemText>{item.text}</S.FooterItemText>
            </S.FooterItem>
          ))}
        </S.Footer>
      </S.Wrapper>
    );
  }

  return <></>;
};
