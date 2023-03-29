import {  Toolbar, AppBar,  } from "@mui/material";
//import { Link } from "react-router-dom";
import { styled } from '@mui/system';
//import { Icons } from "../tools/styles.items";

export const MyAppbar = styled(AppBar)(({ theme }) => (
  {
    backgroundColor: theme.palette.toolbarPrimary.main,
    backdropFilter: "blur(5px)",
    [theme.breakpoints.up("md")]: {
    },
    "& .MuiToolbar-root": {
      justifyContent: "space-between",
      '& .MuiButton-root': {
        textTransform: 'none',
        borderRadius: 2
      },
      '& .MuiTypography-root': {
        color: theme.palette.text.primary,
      },
      [theme.breakpoints.down("md")]: {
        '& p.MuiTypography-root': {
          fontSize: "2em",
        },
        '& svg.MuiSvgIcon-root': {
          fontSize: 45,
        },
      },
      [theme.breakpoints.up("md")]: {
        '& p.MuiTypography-root': {
          fontSize: 30,
        },
        '& svg.MuiSvgIcon-root': {
          fontSize: 50,
        },
      },
    },
  }
));

export const StyledToolBar = styled(Toolbar)(({ theme }) => (
  {
//Todas las propiedades las pase como herencias de MyAppbar LINEA (12)
  }
));