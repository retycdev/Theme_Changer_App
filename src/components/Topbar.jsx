import React, { useContext } from "react";
import styled from "styled-components";
import { themeProvider } from "../context/Theme_context";
import Theme_btn from "./Theme_btn";
import themes from "../assets/themeProvider";

const Container = styled.div`
  height: 112px;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transition: 0.4s ease-in;
  border-radius: 12px 12px 0 0;
  border: 2px solid black;
`;
const Logo_Grp = styled.div`
  font-size: 24px;
`;

//main component
const Topbar = () => {
  const { appTheme, changeTheme } = useContext(themeProvider);
  return (
    <div>
      <Container
        style={{
          backgroundColor: `${appTheme.primary}`,
          color: `${appTheme.textPrimary}`,
        }}
      >
        <Logo_Grp>
          <h2>Theme App</h2>
        </Logo_Grp>
        <Theme_btn />
      </Container>
    </div>
  );
};

export default Topbar;
