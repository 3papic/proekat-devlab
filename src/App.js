import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import Booking from "./pages/Booking";
import Product from "./pages/Product";
import Notfound from "./pages/404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
//import Users from "./pages/Users";
import Unauthorized from "./pages/Unauthorized";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";

// import { RequireAuth, ROLES } from "./pages/RequireAuth";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
const App = () => {
  return (
    <section className="">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Notfound />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/user-profile" element={<UserProfile />} />

          {/* we want to protect these routes */}
          <Route path="/editor" element={<Editor />} />
          <Route path="/admin" element={<Admin />} />



        </Routes>
      </main>

      <Footer />
    </section >
  );
};

export default App;
