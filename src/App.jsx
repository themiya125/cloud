import { useState } from "react";
import {Routes , Route} from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Dashboard from "./pages/dashboard";
import Sidebars from "./pages/global/Sidebar";
{/*import Employees from "./pages/Employees";
import Clients from "./pages/Clients";
import Projects from "./pages/Projects";
import Orders from "./pages/Orders";
import Appointments from "./pages/Appointments";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";*/}

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
    
          <Sidebars isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
           <Route path="/" element={<Dashboard/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
