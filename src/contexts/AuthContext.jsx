import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const testUser = {
    firstName: "Daniel",
    lastName: "Felton",
    email: "danielFelton@gmail.com",
    password: "FortunaMajor",
  };

  useEffect(() => {
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, [userToken]);
  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ testUser, isLoggedIn, setIsLoggedIn, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
