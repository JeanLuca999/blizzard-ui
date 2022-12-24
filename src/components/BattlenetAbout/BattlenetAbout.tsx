import * as S from "./styles";
import { Button } from "components/Button";

//IMAGES
import battlenetText from "assets/battle-net-text.png";
import checkIcon from "assets/check-icon.svg";
import circlesIcon from "assets/circles-icon.svg";
import buyIcon from "assets/buy-icon.svg";
import phoneIcon from "assets/phone-icon.svg";

import battlenetClientDesktop from "assets/battle-net-background-desktop.png";
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
          <S.BattlenetImg
            src={battlenetClientDesktop}
            alt="battlenet client"
            draggable={false}
          />
          <S.WowImg
            src={wowBackgroundDesktop}
            alt="wow client"
            draggable={false}
          />
        </S.ImagesContainer>
      </S.Container>
    </S.Wrapper>
  );
};
