import React, { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useLocation } from 'react-router-dom'

export const OpenContext = createContext();

export const OpenContextProvider = ({ children }) => {
    const [rolItemList, setRolItemList] = useState(false);
    const isNonMobileScreens = useMediaQuery("(min-width: 770px)");
    const [orienta, setOrienta] = useState()
    const [isSidebar, setIsSidebar] = useState(true)
    const [selectedRol, setSelectedRol] = useState();
    const [iconsSbar, setIconsSbar] = useState(true);
    const location = useLocation();
    const [selectedLocation, setSelectedLocation] = useState(location.pathname);
    const handleSidebar = () => setIsSidebar(!isSidebar)
    const handleiconsSbar = () => setIconsSbar(!iconsSbar)
    const handleLocation = (event) => { setSelectedLocation(location.pathname) }
    const handleSelectedRol = (event, index) => {
        setSelectedRol(index);
        if (!isSidebar) {
            setIsSidebar(true);
        }
    }

    const handleRolItemList = (event, index) => {
        if (index === selectedRol) {
            return setRolItemList(!rolItemList)
        } else {
            setSelectedRol(index);
            setRolItemList(true)
        }
    }
    useEffect(() => {

        const handleOriH = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(setOrienta("horizontal"));
                }, 15);
            });
        }
        const handleOriV = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(setOrienta("vertical"));
                }, 15);
            });
        }
        const handleSb = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(setIsSidebar(true));
                }, 10);
            });
        }
        const handleSB = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(setIsSidebar(false));
                }, 1);
            });
        }
        if (!isSidebar) {
            if (isNonMobileScreens) {
                handleOriH()
            }
            else {
                handleOriV()
            }
            handleSb();
        } else {
            handleSB().then(() => handleSb())
            if (isNonMobileScreens) {
                handleOriH()
            }
            else {
                handleOriV()
            }
        }
        setSelectedLocation(location.pathname)
    }, [location.pathname, isNonMobileScreens]);

    return (
        <OpenContext.Provider value={{
            handleSidebar,
            isSidebar,
            setIsSidebar,
            handleiconsSbar,
            iconsSbar,
            selectedLocation,
            handleLocation,
            setSelectedLocation,
            handleSelectedRol,
            selectedRol,
            isNonMobileScreens,
            handleRolItemList,
            rolItemList,
            orienta,
            setOrienta,
        }} >
            {children}
        </OpenContext.Provider>
    );
};

