import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

import Image from '../../assets/Image.png';
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image2.png';
import Image3 from '../../assets/Image3.png';
import Image4 from '../../assets/Image4.png';
import Image5 from '../../assets/Image5.png';
import Image7 from '../../assets/Image7.png';
import Image8 from '../../assets/Image8.png';
import Image9 from '../../assets/Image9.png';
import Image10 from '../../assets/Image10.png';
import Image11 from '../../assets/Image11.png';
import Image12 from '../../assets/Image12.png';
import Image13 from '../../assets/Image13.png';
import Image15 from '../../assets/Image15.png';


const Courses = () => {
  return (
    <div className="courses">
     
      <div className="header">
        <h1>Our Courses</h1>
        <p>Discover our wide range of educational offerings that cater to various learning styles and interests. Explore a diverse curriculum designed to help you reach your academic and professional goals.</p>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image} alt="Introduction To Web Programming" />
            </div>
            <div className="course-info">
              <h3>Introduction To Web Programming</h3>
              <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image1} alt="Mobile Application Development" />
            </div>
            <div className="course-info">
              <h3>Mobile Application Development</h3>
              <p>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image2} alt="Diploma In Information Technology" />
            </div>
            <div className="course-info">
              <h3>Diploma In Information Technology</h3>
              <p>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image3} alt="Certificate In Graphic Design" />
            </div>
            <div className="course-info">
              <h3>Certificate In Graphic Design</h3>
              <p>Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image4} alt="Diploma In Office Management" />
            </div>
            <div className="course-info">
              <h3>Diploma In Office Management</h3>
              <p>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image5} alt="Microsoft SQL Server Database Administration" />
            </div>
            <div className="course-info">
              <h3>Microsoft SQL Server Database Administration</h3>
              <p>Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image7} alt="Certificate In Python Programming" />
            </div>
            <div className="course-info">
              <h3>Certificate In Python Programming</h3>
              <p>The Certificate in Python Programming course covers fundamental to advanced Python concepts, including data types, control structures, functions, and libraries. Through hands-on exercises, students learn to develop applications, automate tasks, and analyze data.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image8} alt="Certificate In Software Development" />
            </div>
            <div className="course-info">
              <h3>Certificate In Software Development</h3>
              <p>The Certificate in Software Development course provides comprehensive training in programming languages, software design, version control, and testing. Through hands-on projects and real-world scenarios, students learn to develop, test, and deploy software applications using agile methodologies.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image9} alt="Information Security & Ethical Hacking" />
            </div>
            <div className="course-info">
              <h3>Information Security & Ethical Hacking</h3>
              <p>The Information Security & Ethical Hacking course teaches network security, cryptography, penetration testing, and incident response. Students gain hands-on experience in securing systems, performing ethical hacking, and understanding legal implications.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image10} alt="Computer Network Foundation" />
            </div>
            <div className="course-info">
              <h3>Computer Network Foundation</h3>
              <p>The Computer Network Foundation course covers essential networking concepts such as topologies, protocols, IP addressing, and network hardware. Students learn to design, configure, and troubleshoot basic networks through hands-on labs.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image11} alt="Microsoft Office Suite" />
            </div>
            <div className="course-info">
              <h3>Microsoft Office Suite</h3>
              <p>The Microsoft Office Suite course equips students with essential skills in Word, Excel, PowerPoint, and Outlook, enhancing productivity for personal, academic, and professional use.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image12} alt="Digital Marketing" />
            </div>
            <div className="course-info">
              <h3>Digital Marketing</h3>
              <p>The Digital Marketing course teaches students to enhance their online presence through SEO, social media marketing, content creation, email marketing, and analytics. Participants develop strategies, create engaging content, and optimize websites to reach target audiences.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="course-container">
          <div className="course-item">
            <div className="course-image">
              <img src={Image13} alt="Oracle Database Administration Fundamentals" />
            </div>
            <div className="course-info">
              <h3>Oracle Database Administration Fundamentals</h3>
              <p>The Oracle Database Administration Fundamentals course introduces students to essential skills for managing and maintaining Oracle databases, covering architecture, installation, configuration, and basic backup and recovery.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={Image15} alt="Laptop, Desktop, Phone & Tablet Repair" />
            </div>
            <div className="course-info">
              <h3>Laptop, Desktop, Phone & Tablet Repair</h3>
              <p>The Electronic Device Repair course equips students with skills to diagnose, troubleshoot, and repair laptops, desktops, smartphones, and tablets. Emphasizing hands-on practice, students learn to safely disassemble devices, replace key components, and stay current with technological advancements.</p>
            </div>
            <Link to="/form" className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
