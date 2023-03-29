import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
//import {tokens} from "./colors";

export const themeSettings = (mode) => {
  //const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          toolbarPrimary: {
            main: "rgba(31, 42, 64, 0.2)",   
          },
          areasPrimary: {
            main: "rgba(31, 42, 64, 0.2)",     
          },
          itemsPrimary: {
            main: "#1F2A55",
          },
          background: {
            default: "#141b2d",
          }
        }
        : {
          // palette values for light mode
          //main:"linear-gradient(to right, #f7f7f7, #203A43, #203A47)",
          toolbarPrimary: {
            main:"rgba(200, 246, 242, 0.4)",
          },
          areasPrimary: {
            main: "#f2f0f0",
          },
          itemsPrimary: {
            main: "#f2f0f8",
          },
           background: {
            default: "#daeefe",
            backgroundBlendMode: "overlay",
          }, 
          Mybackground: {
            background: "#0F2027",
            //background: "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",
            //background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
          },  
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 769,
        md: 770,
        lg: 1200,
      },
      myValuesBoolean: {
        xs: true, // removes the `xs` breakpoint
        sm: true,
        md: true,
        lg: false,
        xl: false
      },
    }, 
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode,mode];
};
