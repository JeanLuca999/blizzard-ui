import { ReactNode } from "react";
import * as S from "./styles";

export interface IButton {
  children: ReactNode;
  onClick?: () => void;
  iconSrc?: string;
  scheme: "fill" | "outlined";
  padding?: string;
}

export const Button = (props: IButton) => {
  const { scheme, children, onClick, iconSrc } = props;
  const ButtonType = scheme === "fill" ? S.Fill : S.Outlined;
  return (
    <ButtonType onClick={onClick}>
      {!!iconSrc && <S.Icon src={iconSrc} alt="" />}
      {children}
    </ButtonType>
  );
};
