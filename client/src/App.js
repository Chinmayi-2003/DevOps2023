import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Products from "./components/Products";
import Branches from "./components/Branches";
import Gallery from "./components/Gallery";
import Developers from "./components/Developers";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Profile from "./components/Profile";
import LoginAdmin from "./components/admin/AdminLogin";
import AdminDash from './components/admin/AdminDash'
function App() {
  
  const [loginForm, setLoginForm] = useState("login");

  const toggleForm = (formName) => {
    console.log(formName);
    setLoginForm(formName);
  };

  const currentLocation = useLocation();
  console.log("path"+currentLocation.pathname)
  // Check if the current location is the login page
  const isLoginPage = currentLocation.pathname === "/login";
  const isRegisterPage = currentLocation.pathname === "/register";
  // const isAdmin = currentLocation.pathname === "/admin/dashboard";
  const isAdmin = currentLocation.pathname === "/admin/login";

  return (
    <>
      {(!isAdmin && !isLoginPage && !isRegisterPage)&& <Navbar />}
      <Routes>
        <Route path="/login" element={<Login></Login>} exact></Route>
        <Route path="/register" element={<Register></Register>} exact></Route>
        <Route path="/" element={<Home />} exact></Route>{" "}
        {/* Added route for the root path */}
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/products" element={<Products />} exact></Route>
        <Route path="/branch" element={<Branches />} exact></Route>
        <Route path="/gallery" element={<Gallery />} exact></Route>
        <Route path="/developers" element={<Developers />} exact></Route>
        <Route path="/HomeScreen" element={<HomeScreen />} exact></Route>
        <Route path="/product/:id" element={<ProductScreen />} exact></Route>
        <Route path="/cart" element={<CartScreen />} exact></Route> 
        <Route path="/profile" element={<Profile />} exact></Route>
        <Route path='/admin/dashboard' element={<AdminDash />} />
        <Route path="/admin/login" element={<LoginAdmin />} exact></Route>
      </Routes>
      {(!isAdmin && !isLoginPage && !isRegisterPage) && <Footer />}
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
