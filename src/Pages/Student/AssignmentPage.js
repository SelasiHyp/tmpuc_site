import React, { useState } from 'react';
import '../../Styles/styles.css'
import Sidebar from '../../components/Sidebar'; // Import the Sidebar component
import LMSHeader from '../../components/LmsHeader';
import ItemTable from '../../components/ItemTable';
import { fetchData } from '../../TestRunData.js/data';


function AssignmentPage() {
  // const courseData = fetchData('courses'); // Fetch course data
  const assignmentData = fetchData('assignments'); // Fetch notification data


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <div className="app">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader/>
        <div className="content">
          <div className='page-title'>
            <p>Assignments</p>
          </div>

          <ItemTable
            data={assignmentData}
          />

        </div>
      </div>
    </div>
  )
}

export default AssignmentPage;