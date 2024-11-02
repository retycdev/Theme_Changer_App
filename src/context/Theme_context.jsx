import React, { useState } from "react";
import themes from "../assets/themeProvider";

//Create State
export const themeProvider = React.createContext();

//Call State

const Theme_context = ({ children }) => {
  const [appTheme, setAppTheme] = useState(themes.light);
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <div>
      <themeProvider.Provider
        value={{ appTheme, setAppTheme, changeTheme, setChangeTheme }}
      >
        {children}
      </themeProvider.Provider>
    </div>
  );
};

export default Theme_context;
