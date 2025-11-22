import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProtectedRoutes from "./components/ProtectedRoutes";

function AppRoutes() {
  const location = useLocation();
  const noNavbar = location.pathname === "/register" || location.pathname === "/";

  return (
    <>
      {noNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Navbar
          content={
            <Routes>
             <Route element={<ProtectedRoutes/>}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
              </Route>
              
            </Routes>
          }
        />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes /> {/* ✅ useLocation now runs inside BrowserRouter */}
    </BrowserRouter>
  );
}

export default App;
