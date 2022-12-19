import * as S from "./styles";

export type MenuListItem = {
  image: string;
  text: string;
};

export interface IMenu {
  isActive: boolean;
  list: MenuListItem[];
  footerList?: MenuListItem[];
}

export const Menu = (props: IMenu) => {
  const { isActive, list, footerList } = props;
  return (
    <S.Wrapper isActive={isActive}>
      <S.ItemsWrapper>
        {list.map((item, index) => (
          <S.ItemContainer key={index}>
            <S.ItemImage src={item.image} alt={item.text} />
            <S.ItemText>{item.text}</S.ItemText>
          </S.ItemContainer>
        ))}
      </S.ItemsWrapper>
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
};
