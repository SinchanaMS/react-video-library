import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Router />
    </div>
  );
}

export default App;
