import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import logo1 from '../../assets/logo1.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo1} alt="Logo" className='logo' />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/LoginPageLMS">LMS Core</Link></li>
                {/* <li><Link to="/campus">Campus</Link></li> */}
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/LoginPage"><button className='btn'>Apply Now</button></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
