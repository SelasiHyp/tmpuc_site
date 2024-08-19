import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import darko from '../../assets/darko.png';

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="content">
      <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p className='heroSmall'>
            “Education is for improving the lives of others and for leaving your community and world better than you found it.” <br />
            – Marian Wright Edelman
            </p>
            <Link to="/courses" className='btn'>
              Explore more <img src={darko} alt="" />
            </Link>
        </div>
      </div>

      <div className="welcome">
        <div className="tog">
          <h3>Welcome</h3>
          <p>to TM Pre-University College (TMPUC), a Pre – Tertiary which deeply believes in - a mission to train a new generation of ethical, </p>
        </div>
        <p>entrepreneurial leaders with enhance practical IT skills across the continent of Africa. We plan to accomplish this mission by achieving excellence through Honesty, Integrity, Diligence and Continuous Improvement - by pursuing a course of instruction that enables our graduates to be technically excellent in their chosen fields, while having the breadth of vision to navigate in a changing world.</p>

        {showMore && (
          <div className="more-text">
            <p>Your decision to enroll at TM Pre - University College will be the best decision to make in looking out for an institution most suitable to prepare you for both Professional and Academic qualification which comes with the requisite practical skills in modern technology and other fields hence helping in preparing you for successful future. Within the few years of existence, the institution has produced a number of graduates with certificates and diplomas. The Institution has lived up to its expectation by constantly reviewing the content of professional and academic course and conducting research to meet the exigencies of changing times.</p>
            <div className="norm">
              <h1>Why we are the most Preferred?</h1>
              <p>Firstly, we reduce the stress for the many WASSCE graduates who failed to make the required grades for admission into our universities and have to re-sit several times for their failed papers by offering them an opportunity to go through a one-year tuition that prepares them to write and pass the Advance Business Certificate Examination (ABCE) which is a diploma program from the West African Examination Council (WAEC). This makes our graduates have an added advantage of having a diploma with high professional knowledge and practical IT skills which serves as a strong foundation for them in pursuing their degree in the university or in working life.</p>
              <p>Secondly, the distinct departments we have for technology and management studies equips our students with the professional practical skills and certifications they need. Hence you will surely graduate with requisite skills in Information Technology even as a management student. Our graduates have qualities which are highly regarded all over the world. We give you value for money.</p>
              <p>Thirdly, quality tuition is our hall mark. We have highly qualified lectures who blend modern technology with quality lecturing for high completion grades. Alongside with educational tours and short intensive and exciting courses.</p>
              <p>Fourthly, we also give special attention to the needs of our international students including their accommodation, security, social and educational life. We give priority to foreign students when allocating places in our modern halls of residence (Hostel), which are either on the campus or very close to the campus. We hold our core values (Honesty, Integrity, Diligence and Continuous Improvement) with high esteem.</p>
            </div>
          </div>
        )}

        <button onClick={toggleReadMore} className="read-more-btn">
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
