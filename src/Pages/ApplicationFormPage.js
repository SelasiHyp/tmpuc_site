import React, { useState } from 'react';
import '../Styles/ApplicationFormPage.css';
import LabeledInput from "../components/FormInputs"; 
import FormCheckbox from '../components/FormCheckbox';
import CourseSelection from '../components/FormCourseSelection';
import ItemList from '../components/FormItemList';
// import { useNavigate } from 'react-router-dom';


const ApplicationForm = () => {
  const [toggles, setToggles] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,

  });

  const handleCheckboxChange = (e, question) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [question]: e.target.value === "yes",
    }));
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    studentOtherNames: '',
    studentDateOfBirth: '',
    studentGender: '',
    studentPhoneNumber: '',
    studentEmail: '',
    studentNationality: '',
    studentHometown: '',
    studentResidentTown: '',
    studentRegion: '',
    studentCountry: '',
    studentDigitalPostAddress: '',
    studentIdType: '',
    studentIdNumber: '',
    parentFirstName: '',
    parentLastName: '',
    parentOtherNames: '',
    parentPhoneNumber: '',
    parentRelationship: '',
    parentEmail: '',
    parentAddress: '',
    sponsorName: '',
    sponsorPhoneNumber: '',
    sponsorEmail: '',
    sponsorAddress: '',
    isResidential: false,
    isNonResidential: false,
    disabilityDescription: '',
    suspendedInstitutionName: '',
    suspendedInstitutionCountry: '',
    suspensionYear: '',
    suspensionReason: '',
    livesAlone: false,
    livesWithParents: false,
    campusChoice: '',
    sessionChoice: '',
    highSchoolAttended: '',
    programType: '',
    programPeriod: '',
    universityAttended: '',
    degreeName: '',
    otherAchievements: '',
  });

  const handleInputChange = (e) => {
    const { id, value, name, type, checked } = e.target;
    const key = type === 'radio' ? name : id;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,[key]: type === 'checkbox' ? checked : value,
    }));
  };

  // const handleCheckboxInputChange = (e) => {
  //   const { id, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: checked,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/submitAdmission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please check your network connection and try again.');
    }
  };
  return(    
    <div className="bgc">
       <div className="banner">
        <img className="banner-image" src="https://github.com/SelasiHyp/novaHive-work/blob/main/_MG_6991.jpg?raw=true" alt="graduates" />
        <div className="image-text">
          <h2 className="page-title">Admission Form<br/></h2>
          <p className="welcome-message">Apply Now!</p>
        </div> 
      </div> 

      <div className="instructions-div">
        <div>
          <p>
            Please read all the information on this form carefully before completing the form. 
            Apply as early as possible as competition is keen. 
          </p>
          <ul style={{marginLeft: '30px', marginBottom: '20px', margin: '20px'}}>
            <li>Applicant must fill this form to be admitted into TMPUC. Applicants are therefore advised to carefully read through this form and truthfully fill it with all required information.</li>
            <li>Applicants would be informed of receipt of filled application forms and after meeting the institution’s qualification requirements successful students would be notified to make all necessary payments 14 days before tuition begins.</li>
          </ul>

          <p><b className="red-text">Note:</b> Fees paid are non-refundable once a program is started. </p> <br />

          <p>
            <i> For further information, please contact TMPUC:</i> <br />
            <b>Contact Numbers:</b> 024 971 0660 / 024 580 4900 <br />
            <b>Website:</b> www.tmpreuniversitycollege.com <br />
            <b>Email:</b> admissions@tmpreuniversitycollege.com <br />
          </p>
        </div>

        <hr/>

        <div> {/*STUDENTS */}
          <p className="form-section-title">Personal Details</p>
          <LabeledInput
            label="First Name"
            id="studentFirstName"
            type="text"
            placeholder="Enter your first name"
            value={formData.studentFirstName}
            onChange={handleInputChange}
          />

          <LabeledInput
            label="Last Name/Surname"
            id="studentLastName"
            type="text"
            placeholder="Enter your last name/surname"
            value={formData.studentLastName}
            onChange={handleInputChange}
          />

          <LabeledInput
           label="Other Names"
            id="studentOtherNames"
            type="text"
            placeholder="Enter your other names" 
            value={formData.studentOtherNames}
            onChange={handleInputChange}
          />

          <div className="dob-gender-container">
            <LabeledInput  
             label="Date of Birth"
              id="studentDateOfBirth"
              type="date"
              placeholder="" 
              value={formData.studentDateOfBirth}
              onChange={handleInputChange}
            /> 
            <div className="gender-selection-container">
              <p>Gender</p>
              <div className='gender-selection'>
                <label>
                    <input
                      type="radio"
                      name="studentGender" // Ensure the name matches the state property
                      value="male"
                      checked={formData.studentGender === 'male'}
                      onChange={handleInputChange}
                    />
                    Male
                  </label>

                  <label>
                    <input
                     type="radio"
                      name="studentGender" // Ensure the name matches the state property
                      value="female"
                      checked={formData.studentGender === 'female'}
                      onChange={handleInputChange}
                    />
                    Female
                  </label>
              </div>
            </div>
          </div>

          <LabeledInput
            label="Phone Number"
            id="studentPhoneNumber"
            type="text"
            placeholder="Enter your phone number"
            value={formData.studentPhoneNumber}
            onChange={handleInputChange}
          />

          <LabeledInput
           label="Email"
            id="studentEmail"
            type="email"
            placeholder="Enter your email"
            value={formData.studentEmail}
            onChange={handleInputChange}
            
          />

          <div className='dob-gender-container'>
            <LabeledInput
              label="Nationality"
            id="studentNationality"
            type="text"
            placeholder="Enter your nationality"
            value={formData.studentNationality}
            onChange={handleInputChange}
            />
            <LabeledInput
              label="Hometown"
            id="studentHometown"
            type="text"
            placeholder="Enter your hometown"
            value={formData.studentHometown}
            onChange={handleInputChange}
            />
          </div>

          <div className='dob-gender-container'>
            <LabeledInput
             label="Resident Town"
            id="studentResidentTown"
            type="text"
            placeholder="Enter your resident town"
            value={formData.studentResidentTown}
            onChange={handleInputChange}
            />
            <LabeledInput
               label="Region"
            id="studentRegion"
            type="text"
            placeholder="Enter your region"
            value={formData.studentRegion}
            onChange={handleInputChange}
            />
          </div>

          <LabeledInput
              label="Country"
            id="studentCountry"
            type="text"
            placeholder="Enter your country"
            value={formData.studentCountry}
            onChange={handleInputChange}
            />

            <LabeledInput
               label="Digital Post Address"
            id="studentDigitalPostAddress"
            type="text"
            placeholder="Enter your digital post address"
            value={formData.studentDigitalPostAddress}
            onChange={handleInputChange}
            />
          
          <div className='dob-gender-container'>
            <LabeledInput
              label="National ID Type"
            id="studentIdType"
            type="text"
            placeholder="Enter your ID type"
            value={formData.studentIdType}
            onChange={handleInputChange}
            />
            <LabeledInput
               label="National ID Number"
            id="studentIdNumber"
            type="text"
            placeholder="Enter your ID number"
            value={formData.studentIdNumber}
            onChange={handleInputChange}
            />
          </div>  
        </div>

        <hr />  

        <div> {/*PARENTS */}
          <p className="form-section-title">Parent/Guardian Details</p>
          <LabeledInput
             label="First Name"
            id="parentFirstName"
            type="text"
            placeholder="Enter parent/guardian first name"
            value={formData.parentFirstName}
            onChange={handleInputChange}
          />

          <LabeledInput
           label="Last Name/Surname"
            id="parentLastName"
            type="text"
            placeholder="Enter parent/guardian last name/surname"
            value={formData.parentLastName}
            onChange={handleInputChange}
          />

          <LabeledInput
            label="Other Names"
            id="parentOtherNames"
            type="text"
            placeholder="Enter parent/guardian other names"
            value={formData.parentOtherNames}
            onChange={handleInputChange} 
          />

          <div className='dob-gender-container'>
            <LabeledInput
              label="Phone Number"
            id="parentPhoneNumber"
            type="text"
            placeholder="Enter parent/guardian phone number"
            value={formData.parentPhoneNumber}
            onChange={handleInputChange}
            />
            <LabeledInput
                label="Relationship"
            id="parentRelationship"
            type="text"
            placeholder="Enter parent/guardian relationship to applicant"
            value={formData.parentRelationship}
            onChange={handleInputChange}
            />
          </div>

          <LabeledInput
             label="Email"
            id="parentEmail"
            type="email"
            placeholder="Enter parent/guardian email"
            value={formData.parentEmail}
            onChange={handleInputChange}
          />

          <LabeledInput
           label="Address"
            id="parentAddress"
            type="text"
            placeholder="Enter parent/guardian address"
            value={formData.parentAddress}
            onChange={handleInputChange}
          />
        </div> 

        <hr />

        <div>{/*SPONSORS */}
          <p className="form-section-title">Sponsor's Details</p>

          <LabeledInput
           label="Name"
            id="sponsorName"
            type="text"
            placeholder="Enter sponsor's name"
            value={formData.sponsorName}
            onChange={handleInputChange}
          />
          <div className='dob-gender-container'>
            <LabeledInput
               label="Phone Number"
            id="sponsorPhoneNumber"
            type="text"
            placeholder="Enter sponsor's phone number"
            value={formData.sponsorPhoneNumber}
            onChange={handleInputChange}
            />
            <LabeledInput
               label="Email"
            id="sponsorEmail"
            type="email"
            placeholder="Enter sponsor's email"
            value={formData.sponsorEmail}
            onChange={handleInputChange}
            />
          </div>

          <LabeledInput
             label="Address"
            id="sponsorAddress"
            type="text"
            placeholder="Enter sponsor's address"
            value={formData.sponsorAddress}
            onChange={handleInputChange}
          />
        </div>

        <hr />

        <div> {/*HOSTEL */}
          <p className="form-section-title">Hostel</p>

          <FormCheckbox
            label="Residential Student (Hostel Facility)"
            id="isResident"
            type='checkbox'
            checked={formData.isResidential}
            onChange={handleInputChange}
            />

          <FormCheckbox
            type="checkbox"
            id="isNonResidential"
            checked={formData.isNonResidential}
            onChange={handleCheckboxChange}
          />
        </div>

        <hr />

        <div> {/*ADDITIONAL INFO */}
          <p className="form-section-title">Additional Information</p>

          <div>
            <p>1. Do you have any disability or learning difficulty that may 
              affect your learning while with us?
            </p>

            <FormCheckbox
              id="hasNoDisability"
              type='radio'
              label="No"
              name="toggle1"
              value="no"
              checked={formData.hasNoDisability}
              onChange={(e) => handleCheckboxChange(e, 'question1')}
            />

            <FormCheckbox
              id="hasDisability"
              type='radio'
              label="Yes"
              name="toggle1"
              value="yes"
              onChange={(e) => handleCheckboxChange(e, 'question1')}
              checked={formData.hasDisability}
            />

            {toggles.question1 && (
              <div className='disability-description'>
                  <LabeledInput
                    label="Please provide a brief explanation of the disability/learning difficulty."
                    id="disabilityDescription"
                    type="text"
                    value={formData.disabilityDescription}
                    onChange={handleInputChange}
                  />
              </div>
            )} 
          </div> 

          <br />


          <div>
            <p>2. Have you ever been dismissed or suspended from an academic institution?</p>

            <FormCheckbox
              id="hasNoDisablity"
              type='radio'
              label="No"
              name="toggle2"
              value="no"
              onChange={(e) => handleCheckboxChange(e, 'question2')}
            />

            <FormCheckbox
              id="hasDisablity"
              type='radio'
              label="Yes"
              name="toggle2"
              value="yes"
              onChange={(e) => handleCheckboxChange(e, 'question2')}
            />

            {toggles.question2 && (
              <div className='disability-description'>
                <LabeledInput
                  label="Institution Name"
                  id="suspendedInstitutionName"
                  type="text"
                />

                <LabeledInput
                  label="Country"
                  id="suspendedInstitutionCountry"
                  type="text"
                  
                />

                <LabeledInput
                  label="Year"
                  id="suspensionYear"
                  type="number"
                />

                <LabeledInput
                  label="Please provide a brief explain the reason:"
                  id="suspensionReason"
                  type="text"
                  placeholder="Enter reason for suspension/dismissal"
                />
              </div>
            )}
          </div>

          <br />

          <div>
            <FormCheckbox
              id="livesAlone"
              type='radio'
              label="I live by myself"
              name="toggle3"
              onChange={(e) => handleCheckboxChange(e, 'question3')}
            />

            <FormCheckbox
              id="livesWithParents"
              type='radio'
              label="I live with my parents/guardian"
              name="toggle3"
              onChange={(e) => handleCheckboxChange(e, 'question3')}
            />
          </div>

          <br />

          <div>
            <h4>Preferred Campus</h4>
            <FormCheckbox
              id="mainCampusOption"
              type='radio'
              label="Denu(Main)"
              name="toggle"
              onChange={handleCheckboxChange}   
            />

            <FormCheckbox
              id="ketaCampusOption"
              type='radio'
              label="Keta"
              name="toggle"
              onChange={handleCheckboxChange}
            />
          </div>
        </div>

        <hr />

        <div>{/*Educational Background */}
          <p className="form-section-title">Educational Background</p>
          <p>
            Please list the qualification with which you are applying, including grades obtained in every examination you 
            took. Attach transcripts and photocopies of certificates of all examinations results you will list in this page.
          </p>

          <LabeledInput
            id="highScoolAttended"
            label="I. High School Attended/Attending"
            type="text"
            placeholder="Enter name of current/attended high school"
          />

          <div className='dob-gender-container'>
            <div className="input-container">
              <label className='option-label' htmlFor="dropdown">Program(WASSCE, HND e.t.c):</label>          
              <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option  value="" disabled>Select an option</option>
                <option value="option1">WASSCE</option>
                <option value="option2">SSCE</option>
                <option value="option3">HND</option>
                <option value="option4">B.Sc</option> 
                {/* Ask for other accepted certificates */}
              </select>
            </div>

            <div className="input-container">
              <label className='option-label' htmlFor="dropdown">Period(eg. 2019-2022):</label>          
              <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option  value="" disabled>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 3</option>

              </select>
            </div>

          </div>

          <LabeledInput
            id="universityAttended"
            label="II. Colleges or Universities Attended/Attending"
            type="text"
            placeholder="Enter name of current/attended universty or college"
          />
          <div className='dob-gender-container'>
            <LabeledInput
              id="degreeName"
              label="Program(BSc. , BA in...)"
              type="text"
              placeholder="Enter name of current/attended universty or college"
            />

            <div className="input-container">
              <label className='option-label' htmlFor="dropdown">Period(eg. 2019-2022):</label>          
              <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option  value="" disabled>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 3</option>

              </select>
            </div>

          </div>

          <br />

          <div>
            <FormCheckbox required
              style={{alignSelf: 'start', margin: '6px 0px'}}
              id="mainCampusOption"
              type='checkbox'
              label=" I solemnly affirm and declare that the information provided in this 
                      form is correct and the supporting documents submitted are genuine in all respect. In case any information or 
                      document is found to have been falsified, the same shall render the application form null and avoid, and shall 
                      result in automatic cancellation of my admission, and liable to disciplinary action by TM Pre-University College. 
                      I understand that my admission and continuous enrolment are governed by the statutes of TM Pre-University 
                      College. I shall abide by all rules and regulations applicable to Ghanaian/foreign nationals in Ghana."
              name="toggle"
            />
          </div>
          
          <br />

          <div>
            <h4>Session of Choice</h4>
            <FormCheckbox
              id="regularSession"
              type='radio'
              label={<><strong>Regular:</strong> Monday — Friday (9:00am – 3:00pm)</>}              
              name="toggle4"
              onChange={(e) => handleCheckboxChange(e, 'question4')}
            />

            <FormCheckbox
              id="eveningSession"
              type='radio'
              label={<><strong>Evening:</strong> Monday – Friday (4:00pm – 8:00pm)</>}            
              name="toggle4"
              onChange={(e) => handleCheckboxChange(e, 'question4')}
            />

            <FormCheckbox
              id="weekendSession"
              type='radio'
              label={<><strong>Weekend:</strong> Saturday – Sunday (9:00am – 3:00pm)</>}              
              name="toggle4"
              onChange={(e) => handleCheckboxChange(e, 'question4')}
            />
          </div>
        </div>

        <hr />

        <div>{/* Program Selection*/}
          <p className="form-section-title">Program Selection Details</p>
          <CourseSelection/>
        </div>

        <hr />

        <div> {/*Extracurricular and Personal Activities */}
          <p className="form-section-title">Extracurricular and Personal Activities </p>
          <p>Please list your extracurricular/ community involvement. </p>
          <ItemList/>

          <LabeledInput
            id="otherAchievements"
            label="Other Achievements, Award, Honor, Special Recognition"
            type="text"
            placeholder="Enter any other extracurricular or achievement"
          />
        </div>

        <hr />

        <div>
          <p>
          <b className="red-text">Note:</b> TMPUC does not discriminate on the basis of sex, abilities, age, race, religion, 
            sexual orientation, nationality or ethnic origin, or veteran status in the selection 
            and admission of its students, nor do so in the recruitment and employment of 
            faculty and staff and the operation of any of its educational programs and activities.
          </p>
        </div>

        <div className='submit-button-div'>
          <button className='submit-button' onClick={handleSubmit}>Submit</button> 
        </div>

      </div>
    </div>      
  )
}

export default ApplicationForm;