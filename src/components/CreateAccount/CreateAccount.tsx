import React, { useEffect } from "react";

import * as S from "./styles";
//COMPONENTS
import { Button } from "components/Button";

//IMAGES
import battlenetText from "assets/battle-net-text-big.png";
import appleBlackIcon from "assets/apple-black-icon.svg";
import googleBlackIcon from "assets/google-black-icon.svg";
import facebookBlackIcon from "assets/facebook-black-icon.svg";
import closeModalIcon from "assets/close-modal-icon.svg";

export interface ICreateAccount {
  onClose: () => void;
}

export const CreateAccount = (props: ICreateAccount) => {
  const { onClose } = props;

  const handleCloseOverlay = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCloseByKeyBoard = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onClose();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    const handlePressEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handlePressEsc);

    return () => document.removeEventListener("keydown", handlePressEsc);
  }, [onClose]);

  return (
    <S.Wrapper onClick={handleCloseOverlay}>
      <S.Container>
        <S.Image src={battlenetText} alt="Battlenet" />
        <S.Form autoComplete="new-password" onSubmit={handleSubmit}>
          <S.InputText
            placeholder="E-mail ou telefone"
            type="text"
            autoComplete="new-password"
          />
          <S.InputText
            placeholder="Senha"
            type="password"
            autoComplete="new-password"
          />
          <Button scheme="fill" width="100%">
            Cadastre-se
          </Button>
        </S.Form>
        <S.SocialContainer>
          <S.SocialText>ou conecte-se com</S.SocialText>

          <S.SocialIconsContainer>
            <S.IconWrapper>
              <S.Image alt="google" src={googleBlackIcon} />
            </S.IconWrapper>
            <S.IconWrapper>
              <S.Image alt="apple" src={appleBlackIcon} />
            </S.IconWrapper>
            <S.IconWrapper>
              <S.Image alt="facebook" src={facebookBlackIcon} />
            </S.IconWrapper>
          </S.SocialIconsContainer>
        </S.SocialContainer>

        <S.AccountTextContainer>
          <S.AccountText>
            <S.LinkText>Crie uma conta</S.LinkText> Battle.net de graça
          </S.AccountText>
          <S.AccountText>
            <S.LinkText>Não consegue logar?</S.LinkText>
          </S.AccountText>
        </S.AccountTextContainer>

        <S.CloseIcon
          alt="close-modal"
          src={closeModalIcon}
          role="button"
          onClick={onClose}
          onKeyDown={handleCloseByKeyBoard}
          tabIndex={0}
        />
      </S.Container>
    </S.Wrapper>
  );
};
