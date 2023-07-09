import React from "react";
import { styled } from "styled-components";

const ButtonDesign = styled.button`
  width: 81px;
  height: 36px;
  font-weight: 500;
  border-radius: 6px;
  color: rgba(63, 63, 63, 1);
  /* background-color: rgba(224, 224, 224, 1); */
  background-color: ${(props) => {
    if (props.color === "primary") {
      return "rgba(41, 98, 255, 1)";
    } else if (props.color === "secondary") {
      return "rgba(69, 90, 100, 1)";
    } else if (props.color === "danger") {
      return "rgba(211, 47, 47, 1)";
    } else if(props.variant==='outlined'){
        return 'transparent'
    }
     else {
      return "rgba(224, 224, 224, 1)";
    }
    
   
    }};
  border: none;
  border: none;
  box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
  &:hover,
  &:focus {
    background-color: rgba(51, 51, 51, 0.2);
  }
`;



const Button = (props) => {
  return (
    <ButtonDesign color={props.color} variant={props.variant}>{props.children}</ButtonDesign>
  );
};

export default Button;
