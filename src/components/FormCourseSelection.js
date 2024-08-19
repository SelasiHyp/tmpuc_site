// CourseSelection.js
import React, { useState } from 'react';

const departments = {
  "DEPARTMENT OF INFORMATION TECHNOLOGY": {
    "SHORT CERTIFICATE COURSES": [
     'IC3 DIGITAL LITERACY',
      'MICROSOFT OFFICE SPECIALIST', 
      'PRACTICAL HARDWARE ENGINEERING', 
      'PRACTICAL COMPUTER NETWORKING', 
      'PRACTICAL GRAPHIC DESIGN', 
      'WEBSITE DEVELOPMENT', 
      'ANIMATION AND MULTIMEDIA', 
      'PYTHON PROGRAMMING',
      'HTML/CSS AND JAVASCRIPT',
      'CERTIFICATE IN SOFTWARE DEVELOPMENT',
      'CERTIFICATE IN DATABASE DEVELOPMENT',

    ],

    "PPROFESSIONAL DIPLOMA COURSES": [
      'SYSTEM ENGINEERING', 
      'SOFTWARE ENGINEERING', 
      'GRAPHICS & WEB DESIGN', 
      'DATABASE MANAGEMENT', 
    ],
  },

  "DEPARTMENT OF BUSINESS MANAGEMENT": {
    "EXTERNAL ACADEMIC CERTIFICATION COURSE - WAEC": [
      'DIPLOMA IN INFORMATION TECHNOLOGY', 
      'DIPLOMA IN OFFICE MANAGEMENT ', 
      'DIPLOMA IN BUSINESS ADMINISTRATION', 
      'DIPLOMA IN ACCOUNTING'
    ],
  }
};

const CourseSelection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSubsection, setSelectedSubsection] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setSelectedSubsection('');
    setSelectedCourse('');
  };

  const handleSubsectionChange = (event) => {
    setSelectedSubsection(event.target.value);
    setSelectedCourse('');
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Select Department:</label>
        <select value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          {Object.keys(departments).map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {selectedDepartment && (
        <div>
          <label>Select Subsection:</label>
          <select value={selectedSubsection} onChange={handleSubsectionChange}>
            <option value="">Select Subsection</option>
            {Object.keys(departments[selectedDepartment]).map((subsection) => (
              <option key={subsection} value={subsection}>{subsection}</option>
            ))}
          </select>
        </div>
      )}

      {selectedSubsection && (
        <div>
          <label>Select Course:</label>
          {departments[selectedDepartment][selectedSubsection].map((course, index) => (
            <div key={index}>
              <input
                type="radio"
                id={course}
                name="course"
                value={course}
                checked={selectedCourse === course}
                onChange={handleCourseChange}
              />
              <label htmlFor={course}>{course}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSelection;
