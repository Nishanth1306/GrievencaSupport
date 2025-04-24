import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import SchemeList from "../src/components/SchemeList";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = Cookies.get("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <Router>
      <AppContent token={token} setToken={setToken} />
    </Router>
  );
};


const AppContent = ({ token, setToken }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("token"); 
    setToken(null); 
    navigate("/login"); 
  };

  return (
    <>
     
      {location.pathname !== "/" && <Navbar token={token} handleLogout={handleLogout} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schemes/:categoryName" element={token ? <SchemeList /> : <Navigate to="/login" />} />
      
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/category" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/register" />} />
        <Route path="/category" element={<CategoryPage/>}/>
      </Routes>
    </>
  );
};

export default App;
