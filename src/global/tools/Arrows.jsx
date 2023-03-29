import React from 'react'
import { useContext } from "react";
import { OpenContext } from "./openContext";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const ArrowsLRHV = () => {

  const { isSidebar } = useContext(OpenContext);
  return (
    <>
      {isSidebar ? <ArrowLeftIcon sx={{ display: { xs: "none", sm: "flex" } }} color="action" /> : <ArrowRightIcon color="action" sx={{ display: { xs: "none", sm: "block" } }} />}

      {isSidebar ? <ExpandLess sx={{ display: { xs: "block", sm: "none" } }} color="action" /> : <ExpandMore color="action" sx={{ display: { xs: "block", sm: "none" } }} />}

    </>
  )
}
export const ArrowsHV = (props) => {
  const { isSidebar } = useContext(OpenContext);
  return (
    <>
      {isSidebar ? <ExpandLess color="action" /> : <ExpandMore color="action" />}
    </>
  )
}
export const ArrowsItem = (props) => {
  const { iconsSbar, isSidebar } = useContext(OpenContext);
  return (
    <>
      {(iconsSbar && isSidebar) ? <ExpandLess color="action" /> : <ExpandMore color="action" />}
    </>
  )
}
export const ArrowsI = (props) => {
  const { selectedRol, rolItemList } = useContext(OpenContext);
  return (
    <>
      {(selectedRol === props.i) && rolItemList ? <ExpandLess color="action" /> : <ExpandMore color="action" />}
    </>
  )
}
