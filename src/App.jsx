import React, { useContext } from "react";
import { themeProvider } from "./context/Theme_context";
import Topbar from "./components/Topbar";
import Content from "./components/Content";

import styled from "styled-components";

const App_Container = styled.div`
  max-width: 640px;
  margin: auto;
  border: 2px solid black;
  border-radius: 12px;
`;

const App = () => {
  const { appTheme } = useContext(themeProvider);
  return (
    <div>
      <App_Container>
        <Topbar />
        <Content />
      </App_Container>
    </div>
  );
};

export default App;
