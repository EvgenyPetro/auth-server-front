import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./pages/global/TopBar";
import SideBar from "./pages/global/SideBar";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard/Dashboard";
import RegisterForm from "./components/form/registerForm/RegisterForm";
import LoginForm from "./components/form/loginForm/LoginForm";
import AuthenticatedRoute from "./components/authenticatedRoute  /AuthenticatedRoute";
import ChatBoard from "./pages/ChatBoard/ChatBoard";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/signup" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route
                path="/"
                element={
                  <AuthenticatedRoute>
                    <DashBoard />
                  </AuthenticatedRoute>
                }
              />
              <Route
                path="/chat/*"
                element={
                  <AuthenticatedRoute>
                    <ChatBoard />
                  </AuthenticatedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
