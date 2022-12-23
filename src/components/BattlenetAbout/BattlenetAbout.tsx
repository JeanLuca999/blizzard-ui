import * as S from "./styles";
import * as V from "styles/variables";
import { Button } from "components/Button";

//IMAGES
import battlenetText from "assets/battle-net-text.png";
import checkIcon from "assets/check-icon.svg";
import circlesIcon from "assets/circles-icon.svg";
import buyIcon from "assets/buy-icon.svg";
import phoneIcon from "assets/phone-icon.svg";

import battlenetClientMobile from "assets/battle-net-background-mobile.png";
import battlenetClientTablet from "assets/battle-net-background-tablet.png";
import battlenetClientDesktop from "assets/battle-net-background-desktop.png";
import wowBackgroundMobile from "assets/wow-background-mobile.png";
import wowBackgroundTablet from "assets/wow-background-tablet.png";
import wowBackgroundDesktop from "assets/wow-background-desktop.png";

export interface IBattlenetAbout {
  deviceName: string;
  deviceIcon: string;
}

export const BattlenetAbout = (props: IBattlenetAbout) => {
  const { deviceName, deviceIcon } = props;
  return (
    <S.Wrapper>
      <S.Container>
        <S.InfoContainer>
          <S.Image alt="Battle net" src={battlenetText} />
          <S.Title>Baixe agora o battle.net</S.Title>
          <S.Ul>
            <S.Li>
              <S.Image src={checkIcon} alt="" /> Seus jogos em um só lugar
            </S.Li>
            <S.Li>
              <S.Image src={circlesIcon} alt="" /> Conecte-se aos seus amigos
            </S.Li>
            <S.Li>
              <S.Image src={buyIcon} alt="" /> Compre jogos e itens digitais
            </S.Li>
          </S.Ul>
          <Button iconSrc={deviceIcon} scheme="fill">
            Baixar para o {deviceName}
          </Button>

          <S.AppInfo>
            <S.Image src={phoneIcon} alt="" />
            <S.AppText>
              Também disponível como <S.Underline>aplicativo móvel</S.Underline>
            </S.AppText>
          </S.AppInfo>
        </S.InfoContainer>
        <S.ImagesContainer>
          <picture>
            <source
              media={`(min-width:${V.DESKTOP})`}
              srcSet={battlenetClientDesktop}
            />
            <source
              media={`(min-width:${V.TABLET})`}
              srcSet={battlenetClientTablet}
            />
            <S.BattlenetImg
              src={battlenetClientMobile}
              alt="battlenet client"
              draggable={false}
            />
          </picture>

          <picture>
            <source
              media={`(min-width:${V.DESKTOP})`}
              srcSet={wowBackgroundDesktop}
            />
            <source
              media={`(min-width:${V.TABLET})`}
              srcSet={wowBackgroundTablet}
            />
            <S.WowImg
              src={wowBackgroundMobile}
              alt="wow client"
              draggable={false}
            />
          </picture>
        </S.ImagesContainer>
      </S.Container>
    </S.Wrapper>
  );
};
