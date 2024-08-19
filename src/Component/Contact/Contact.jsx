import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import white from '../../assets/white.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbe7abab-0f16-4c49-80b4-e4fbae7c60e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" />
            </h3>
            <p>Feel free to reach out through contctsform or find our
                contact information below. Your feedback, questions, and suggestions
                are important to us as we strive to provide exceptional service to
                the university community.
            </p>
            <ul>
                <li> <img src={mail} alt="" /> admissions@tmpreuniversitycollege.com</li>
                <li><img src={phone} alt="" /> 024 971 0660 / 024 580 4900</li>
                <li><img src={location} alt="" />Ghana-Accra</li>
                
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label >Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now <img src={white} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}
//web3forms was used
export default Contact