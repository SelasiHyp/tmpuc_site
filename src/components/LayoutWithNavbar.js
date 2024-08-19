// src/Components/LayoutWithNavbar/LayoutWithNavbar.js
import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const LayoutWithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default LayoutWithNavbar;
