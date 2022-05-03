import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./contexts/ThemeContext";
import Router from "./router/Router";

function App() {
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <Router />
      <ToastContainer theme={theme} />
    </div>
  );
}

export default App;
