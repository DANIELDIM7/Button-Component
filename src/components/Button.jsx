import React from "react";
import { styled } from "styled-components";
import { BiCart } from "react-icons/bi";


const ButtonDesign = styled.button`
  width: ${(props) => {
    if (props.size === "sm") {
      return "73px";
    } else if (props.size === "md") {
      return "81px";
    } else if (props.size === "lg") {
      return "93px";
    } else {
      return "81px";
    }
  }};
  /* 81px; */
  height: ${(props) => {
    if (props.size === "sm") {
      return "32px";
    } else if (props.size === "md") {
      return "36px";
    } else if (props.size === "lg") {
      return "42px";
    } else {
      return "36px";
    }
  }};
  /* 36px; */
  font-weight: 500;
  border-radius: 6px;
  color: ${(props) => {
    if (props.variant === "outline") {
      return "rgba(61, 90, 254, 1)";
    }
    if (props.variant === "text") {
      return "rgba(61, 90, 254, 1)";
    } else if (props.disabled && props.variant === "text") {
      return "rgba(158, 158, 158, 1)";
    } else {
      return "color: rgba(63, 63, 63, 1)";
    }
  }};
  /* background-color: rgba(224, 224, 224, 1); */
  background-color: ${(props) => {
    if (props.color === "primary") {
      return "rgba(41, 98, 255, 1)";
    } else if (props.color === "secondary") {
      return "rgba(69, 90, 100, 1)";
    } else if (props.color === "danger") {
      return "rgba(211, 47, 47, 1)";
    } else if (props.variant === "outline") {
      return "transparent";
    } else if (props.variant === "text") {
      return "transparent";
    } else {
      return "rgba(224, 224, 224, 1)";
    }
  }};
  border: ${(props) => {
    if (props.variant === "outline") {
      return " 1px solid rgba(61, 90, 254, 1)";
    } else if (props.variant === "text") {
      return "none";
    } else {
      return "none";
    }
  }};
  box-shadow: ${(props) => {
    if (props.variant === "text") {
      return "none";
    } else if (props.disableShadow === true) {
      return "none";
    } else {
      return " 0px 2px 3px 0px rgba(51, 51, 51, 0.2);";
    }
  }};

  &:hover,
  &:focus {
    background-color: ${(props) => {
      if (props.variant === "outline") {
        return "rgba(41, 98, 255, 0.1)";
      } else if (props.variant === "text") {
        return "rgba(41, 98, 255, 0.1)";
      } else {
        return "rgba(51, 51, 51, 0.2)";
      }
    }};
  }
`;

const ButtonIcon = styled.a`
  width: 105px;
  height: 36px;
  display: flex;
  flex-direction: ${(props) => {
    if (props.starIcon === true) {
      return "row";
    } else if (props.endIcon === true) {
      return "row-reverse";
    }
  }};
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  background-color: rgba(61, 90, 254, 1);
  box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
`;

const Button = (props) => {
  return props.starIcon || props.endIcon ? (
    <ButtonIcon starIcon={props.starIcon} endIcon={props.endIcon}>
      <BiCart />
      {props.children}
    </ButtonIcon>
  ) : (
    <ButtonDesign
      color={props.color}
      variant={props.variant}
      disableShadow={props.disableShadow}
      disabled={props.disabled}
      size={props.size}
    >
      {props.children}
    </ButtonDesign>
  );
};

export default Button;
