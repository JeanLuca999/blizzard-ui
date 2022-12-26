import { ReactNode } from "react";
import * as S from "./styles";

export interface IButton {
  children: ReactNode;
  onClick?: () => void;
  iconSrc?: string;
  scheme: "fill" | "outlined";
  padding?: string;
  width?: string;
}

export const Button = (props: IButton) => {
  const { scheme, children, onClick, iconSrc, padding, width } = props;
  const ButtonType = scheme === "fill" ? S.Fill : S.Outlined;
  return (
    <ButtonType onClick={onClick} padding={padding} width={width}>
      {!!iconSrc && <S.Icon src={iconSrc} alt="" />}
      {children}
    </ButtonType>
  );
};
