//STYLES
import * as S from "./styles";

//IMAGES
import blizzardLogo from "assets/blizzard-logo.svg";

export const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Logo alt="blizzard" src={blizzardLogo} />
        <S.MenuWrapper role="button" aria-label="menu">
          <S.MenuItem />
          <S.MenuItem />
          <S.MenuItem />
        </S.MenuWrapper>
      </S.Nav>
    </S.Header>
  );
};
