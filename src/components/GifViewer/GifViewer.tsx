import * as S from "./styles";

export interface IGifViewer {
  poster: string;
  src: string;
}

export const GifViewer = (props: IGifViewer) => {
  const { poster, src } = props;
  return (
    <S.Wrapper tabIndex={0}>
      <S.Poster src={poster} alt="preview" />
      <S.Gif src={src} alt="gif" />
    </S.Wrapper>
  );
};
