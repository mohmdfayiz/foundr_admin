import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom'
import Topbar from './pages/global/Topbar'
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users"
import Events from "./pages/events/Events";
import Articles from "./pages/articles/Articles";
import Calendar from "./pages/calendar/Calendar";
import Error404 from "./pages/global/Error404";

function App() {
  const [theme,colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/articles" element={<Articles/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
