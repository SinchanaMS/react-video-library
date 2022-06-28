import { useLocation } from "react-router-dom";
import "App.css";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Router from "router/Router";
import { Toaster } from "react-hot-toast";
import { useTheme } from "contexts/contexts";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className={theme === "light" ? "App light" : "App dark"}>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
