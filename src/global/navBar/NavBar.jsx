import React, { useContext, useState } from "react";
import {
  Typography, Box, Button, Stack,
  Tooltip, IconButton, Avatar, Menu,
  MenuItem, useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { MyAppbar, StyledToolBar } from "./StyledNB";
import useW from "../tools/useW";
import avatar from "../tools/images/Ricardo.jpg";
//import { tokens } from "../tools/colors";
import { ColorModeContext } from "../../theme/themeSet";
import { OpenContext } from "../tools/openContext";
import { ArrowsLRHV } from "../tools/Arrows";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  const toolWidth = useW();
  const colorMode = useContext(ColorModeContext);

  const { handleSidebar,
    // iconsSbar, handleiconsSbar
  } = useContext(OpenContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <React.Fragment >
      <MyAppbar position="sticky">
        <StyledToolBar  >
          <Stack direction="row" >
            <Button onClick={handleSidebar} >
              <ArrowsLRHV />
            </Button>
            <Button >
              <MenuIcon color="action" />
              <Typography> Ricardo Berrios</Typography>
            </Button>
          </Stack>
          <Box>
            <Button>
              <Typography  >{toolWidth}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Button sx={{ borderRadius: 2 }} color="inherit" onClick={colorMode.toggleColorMode}  >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon color="action" />
              ) : (
                <LightModeOutlinedIcon color="action" />
              )}
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Ricardo" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </StyledToolBar>
      </MyAppbar>
    </React.Fragment>

  )
}

export default NavBar