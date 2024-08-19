import React from 'react';
import './Footer.css';
import logo2 from '../../assets/logo2.png'
import link from '../../assets/link.jpeg'
import insta from '../../assets/insta.jpeg'
import face from '../../assets/face.jpeg'
import x from '../../assets/x.jpeg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <div className="head">
          <img src={logo2 } alt="" />
          <h2>TMPUC</h2>
          </div>
          
          <p>
            TM Pre – University College (TMPUC) is a private pre tertiary institution located in Ghana, West Africa. Our mission is to produce a new generation of self-motivated leaders who are inspirational entrepreneurs, with innovative practical skills.
          </p>
         
          <div className="footer-socials">
          <img src={link } alt="" />
          <img src={insta } alt="" />
          <img src={face } alt="" />
          <img src={x } alt="" />


          </div>
        </div>
        <div className="footer-links">
          <h3>Featured Links</h3>
          <div className="links">
          <ul>
            <li><a href="#">Graduation</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">International</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Book Store</a></li>
            <li><a href="#">Alumni</a></li>
          </ul>
          </div>
          
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
