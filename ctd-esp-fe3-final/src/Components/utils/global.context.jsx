import { createContext, useContext, useReducer } from "react";

const initialThemeState = { color: "light" };

const EstadosGlobales = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIGHT":
      return { ...state, color: "light" };
    case "SET_DARK":
      return { ...state, color: "dark" };
    default:
      return state;
  }
};
const EstadosGlobalesProvider = ({ children }) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, initialThemeState);

  const value = {
    theme,
    dispatchTheme,
  };

  return (
    <EstadosGlobales.Provider value={value}>
      {children}
    </EstadosGlobales.Provider>
  );
};

export default EstadosGlobalesProvider;
export const globalContextUse = () => useContext(EstadosGlobales);
