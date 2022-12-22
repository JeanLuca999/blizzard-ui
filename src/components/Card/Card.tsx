import * as S from "./styles";

export interface ICard {
  image: string;
  logo: string;
  name: string;
  category: string;
}

export const Card = (props: ICard) => {
  const { image, logo, name, category } = props;
  return (
    <S.Wrapper tabIndex={0}>
      <S.Container>
        <S.Image src={image} />
        <S.Logo src={logo} />
      </S.Container>
      <S.Title>{name}</S.Title>
      <S.Category>{category}</S.Category>
    </S.Wrapper>
  );
};
