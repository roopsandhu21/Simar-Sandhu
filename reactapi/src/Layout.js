import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Managejs from  './Managejs';
import ManageStudent from "./Managestudent"; // Make sure this is the correct import
import ManageTeacher from "./Manageteacher";
// Protected Route Wrapper

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth");
  return isAuthenticated ? children : <Navigate to="/login" />;
};



function Layout() {
  return (
    <div>
      {/* Navbar will always be visible */}
      <Navbar />
      {/* Page Content */}
      <div className="content">
        <Outlet /> {/* Yeh nested routes ka content show karega */}
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage" element={<Managejs />} />
        <Route path="/managestudent" element={<ManageStudent />} />
        <Route path="/manageteacher" element={<ManageTeacher />} />
      </Routes>
    </div>
  );
}



export default Layout;