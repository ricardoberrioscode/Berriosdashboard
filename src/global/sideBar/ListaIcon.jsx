import React, { useState, useContext } from 'react'
import {
  GroupAddOutlined,
  SettingsAccessibilityOutlined,
  AccessibilityNewOutlined,
} from '@mui/icons-material';
//Editor
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
//moderator
import {
  PersonOffOutlined,
  SensorOccupiedOutlined,
} from '@mui/icons-material';
//ROLES
import {
  AdminPanelSettingsOutlined,
  ManageAccountsOutlined,
  EditOutlined
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  ListItemIcon,
  Button,
} from '@mui/material';
import { OpenContext } from "../tools/openContext";
import { ArrowsI } from '../tools/Arrows';


const Icons = [
  <AdminPanelSettingsOutlined />,
  <ManageAccountsOutlined />,
  <EditOutlined />
];
const controlModerator = [
  <PersonOffOutlined />,
  <SensorOccupiedOutlined />
];
const controlAdmin = [
  <GroupAddOutlined />,
  <SettingsAccessibilityOutlined />,
  <AccessibilityNewOutlined />
];
const controlEditor = [
  <AssignmentIndOutlinedIcon />,
  <FormatListBulletedOutlinedIcon />,
  <ListAltOutlinedIcon />
];
const titleRole = ["Admin", "Moderator", "Editor", "User"];
const titleAdmin = ["List", "Create", "Log"];
const titleModerator = ["Activity", "Disabled", "Actived"];
const titleEditor = ["Tasks", "AddTask", "TaksIten"];
export const IconAdmin = controlAdmin.map((item, i) => {
  const iconColl = {
    icd: controlAdmin[i],
    title: titleAdmin[i],
    to: titleAdmin[i].toLowerCase()
  }
  return iconColl
});
export const IconModerator = controlModerator.map((item, i) => {
  const iconColl = {
    icd: controlModerator[i],
    title: titleModerator[i],
    to: titleModerator[i].toLowerCase()
  }
  return iconColl
});
export const IconEditor = controlEditor.map((item, i) => {
  const iconColl = {
    icd: controlEditor[i],
    title: titleEditor[i],
    to: titleEditor[i].toLowerCase()
  }
  return iconColl
});

const Item = ({ title, to, icon, ind }) => {
  const { setSelectedLocation,
    selectedLocation,
    handleSelectedRol,
    isSidebar,
    rolItemList,
    selectedRol,
  } = useContext(OpenContext);
  const [selected, setSelected] = useState();
  const handleSelected = (event) => {
    setSelectedLocation();
    setSelected(to);
    handleSelectedRol(event, ind);
  }

  return (

    < Collapse in={(selectedRol === ind) && rolItemList} orientation="vertical" timeout="auto" sx={{
      "& .MuiCollapse-wrapper": {
        display: "flex",
        flexDirection: 'column'
      }
    }}
    >
      <Link to={to}   >
        <ListItemButton size="large"
          sx={{ paddingLeft: !isSidebar ? 1 : 0 }}
          disableGutters={!isSidebar}
          onClick={(event) => handleSelected(event)}
          selected={selected === selectedLocation}
        >
          {icon}
          {isSidebar && <Typography sx={{ color: "text.primary" }}>{title}</Typography>}
        </ListItemButton >
      </Link>
    </Collapse>

  );
};

export const iconsSideBar = Icons.map((item, i) => {
  const iconos = [IconAdmin, IconModerator, IconEditor];
  const iconRols = {
    name: titleRole[i].toLowerCase(),
    icd: Icons[i],
    titleRole: titleRole[i],
    to: titleRole[i].toLowerCase(),
    collapseItem: iconos[i]
      .map((itm, index) => {

        return (
          <ListItem disablePadding key={index} >
            <Item
              title={itm.title}
              icon={itm.icd}
              to={`/${titleRole[i].toLowerCase()}/${itm.to}`}
              ind={i}
            />
          </ListItem>
        )
      }),
  }
  return iconRols
});

function ListaIcon() {
  const { isSidebar,
    handleSelectedRol,
    isNonMobileScreens,
    selectedRol,
    handleRolItemList,
  } = useContext(OpenContext);
  return (
    <>
      {iconsSideBar.map((uc, i) =>
        <ListItem disablePadding key={i}>

          <Link to={uc.titleRole.toLowerCase()} >
            <ListItemButton
              sx={{
                py: (!isSidebar && !isNonMobileScreens) ? "0px" : "10px",
                flexDirection: (!isSidebar && isNonMobileScreens) && "column",
                flexWrap: (!isSidebar && isNonMobileScreens) && "wrap",
                alignItems: (!isSidebar && isNonMobileScreens) && "start",
                justifyContent: (!isSidebar && isNonMobileScreens) && "flex-start",
              }}
              disableGutters={!isSidebar}
              selected={selectedRol === i}
              onClick={(event) => handleSelectedRol(event, i)}
            >
              <ListItemIcon   >
                {(isSidebar) && <Typography >{uc.titleRole}</Typography>}
                {uc.icd}
              </ListItemIcon>
              <Button
                sx={{ py: (!isSidebar && !isNonMobileScreens) ? "0px" : "10px" }}
                onClick={(event) => handleRolItemList(event, i)}>
                <ArrowsI i={i} />
              </Button>
            </ListItemButton>
          </Link>
          <div>
            <List disablePadding>
              {uc.collapseItem}
            </List >
          </div>
        </ListItem>
      )
      }
    </>
  )
}
export default ListaIcon

