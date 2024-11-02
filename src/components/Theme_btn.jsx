import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { themeProvider } from "../context/Theme_context";
import themes from "../assets/themeProvider";

const Btn = styled.button`
  height: 40px;
  padding: 0 24px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  outline: none;
  border-radius: 20px;
`;

const Theme_btn = ({ handleClick }) => {
  const { appTheme, setAppTheme, changeTheme, setChangeTheme } =
    useContext(themeProvider);

  const changeAppTheme = () => {
    setChangeTheme(!changeTheme); //reverses the initial value of the change theme state
    setAppTheme(() => {
      return changeTheme ? themes.dark : themes.light;
    });
  };
  return (
    <div>
      <Btn
        onClick={() => {
          changeAppTheme();
        }}
      >
        Change Theme
      </Btn>
    </div>
  );
};

export default Theme_btn;
