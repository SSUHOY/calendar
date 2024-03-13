import React from "react";

import * as S from "./Button.styles";

export const CustomButton = ({
  bgc = "#007ACC",
  color = "white",
  width = "auto",
  height = "auto",
  disabled,
  children,
  onClick,
}) => {
  return (
    <S.Button
      $color={color}
      $disabled={disabled}
      $width={width}
      $height={height}
      onClick={onClick}
      disabled={disabled}
      $bgc={bgc}>
      {children}
    </S.Button>
  );
};
