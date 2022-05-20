import { useLocation } from "react-router-dom";
import "App.css";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Router from "router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  return (
    <div className="App">
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
