import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/themeSet";

import LandingPage from "./global/LandingPage";
import SideBar from "./global/sideBar/SideBar";
import NavBar from "./global/navBar/NavBar";

import LoginPage from "./components/LoginPage";
import AdminPage from "./components/admin";
import ModeratorPage from "./components/moderator";
import EditorPage from "./components/editor";
import UserPage from "./components/user";

function App() {
  const [theme, colorMode, mode] = useMode();
  const appClass = (mode === "dark") ? "appDark" : "appLight";
  return (
    <div className={appClass}>
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          <CssBaseline />
          <div className= "layout" >
            <NavBar />
            <div className="content">
              <SideBar />
              <div className="scenes">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/moderator" element={<ModeratorPage />} />
                  <Route path="/editor" element={<EditorPage />} />
                  <Route path="/user" element={<UserPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </ColorModeContext.Provider>
      </ThemeProvider>
    </div>
  );
}
export default App;
/*
 <Route path="/" element={<AdminList />} /> 
 <Route path="/" element={<AdminCreate />} /> 
 <Route path="/" element={<AdminLog />} /> 
 <Route path="/" element={<ModeratorActivityList />} /> 
 <Route path="/" element={<ModeratorControl />} /> 
 <Route path="/" element={<EditorTaskList />} /> 
 <Route path="/" element={<EditorTaskControl />} /> 
 <Route path="/" element={<LandingPage />} />
 <Route path="/" element={<LoginPage />} />

<Route path="/" element={<AdminPage />} />
 Lista de Todos los Perfiles  
<Route path="/" element={<AdminList />} />
 Admin crea perfil y asigna Rol 
<Route path="/" element={<AdminCreate />} />
 Log de Actividad de Perfiles 
<Route path="/" element={<AdminLog />} />

<Route path="/" element={<ModeratorPage />} />
 Lista de Editores 
<Route path="/" element={<ModeratorActivityList />} />
 Modera y controla Actividad de Editores 
<Route path="/" element={<ModeratorControl />} />

<Route path="/" element={<EditorPage />} />
 Lista de Tareas Editor 
<Route path="/" element={<EditorTaskList />} />
 Controla Tareas 
<Route path="/" element={<EditorTaskControl />} />
 Solo ve Tareas 
<Route path="/" element={<UserPage />} /> 
*/