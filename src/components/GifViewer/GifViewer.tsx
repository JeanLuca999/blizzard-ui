import * as S from "./styles";

//IMAGES
import pausedIcon from "assets/paused.svg";
import playingIcon from "assets/playing.svg";

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

      <S.PausedContainer>
        <S.PlayIcon alt="paused" src={pausedIcon} />
      </S.PausedContainer>

      <S.PlayingContainer>
        <S.PlayIcon alt="playing" src={playingIcon} />
      </S.PlayingContainer>
    </S.Wrapper>
  );
};
