import React, {
  useContext,
} from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Collapse,
} from '@mui/material';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { OpenContext } from "../tools/openContext";
import ListaIcon from "./ListaIcon";

function SideBar() {
  const {
    isSidebar,
    handleSelectedRol,
    selectedLocation,
    isNonMobileScreens,
  } = useContext(OpenContext);

  const ori = isNonMobileScreens ? "horizontal" : "vertical";
  const collapseStyle = {
    visibility: "visible",
    width: isNonMobileScreens ? "50px" : "auto",
    minWidth: isNonMobileScreens ? "50px" : "auto",
    height: !isNonMobileScreens ? "2em" : "auto",
    minHeight: !isNonMobileScreens ? "2em" : "auto",
  }
  return (
    <React.Fragment >
      <div className='sideB'>
        <Collapse in={isSidebar} orientation={ori} timeout="auto"
          style={collapseStyle}
        >
          <List disablePadding   >
            <ListItem disablePadding id="home">
              <Link to="/" >
                <ListItemButton
                  onClick={() => handleSelectedRol()}
                  selected={selectedLocation === "/"}
                  id="botonHome"
                  disableGutters
                >
                  <ListItemIcon id="listItemIconHome">
                    <HomeOutlinedIcon />
                    {isSidebar && <Typography >Home</Typography>}
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            < ListaIcon />
          </List >
        </Collapse>
      </div>
    </React.Fragment>
  )
}
export default SideBar

