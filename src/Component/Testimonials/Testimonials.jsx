// src/Components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css'; // Ensure you have this CSS file for styling


const testimonials = [
  {
    name: "Dzotefe Belinda",
    feedback: "Since we are in a technological era now, the use of technology has been the order of the day so we need to be abreast with these gadgets and how to use them. TM Pre-University has been nurturing competent students in various fields of their choice in order to fit into today’s digital society. In fact, the institution has been of great help to me; with the skills acquired in the use of Microsoft Windows and Office, I can operate my gadgets easily. I passionately recommend TM Pre-University to anyone wanting to enroll and learn for the betterment of their future in this digital era.",
    date: "August 2024",
    position: "Student at UEW"
  },
  {
    name: "Forgive Amewunu",
    feedback: "I'm Forgive, a graduate of TM Pre-University College. I assure you that if you want to be an expert in IT, choose TM-PUC and you will never regret it. TM Pre-University College stands for Honesty, Integrity, and Diligence.",
    date: "August 2024",
    position: "Secretary"
  },
  {
    name: "Fayose Ferguson",
    feedback: "This school has really contributed so much to my life. The practical skills I acquired have benefited me significantly in my work.",
    date: "August 2024",
    position: "Graphic Designer/PC Technician"
  },
  {
    name: "Bakawo Afi Benedicta",
    feedback: "With TM, I can say I'm now a Microsoft Office Specialist. I have also acquired many Office Skills which have helped me in the field of Secretaryship and Office Management. Thanks to TM Pre-University College for making me a better person in my job today.",
    date: "August 2024",
    position: "Secretary"
  },
  {
    name: "Akakpo Kelvin Tettey",
    feedback: "Having attended TM Pre-University College is the best thing that has ever happened to me in the field of ICT. I am much grateful for the knowledge shared with us.",
    date: "August 2024",
    position: "Mechanical Engineer"
  },
  {
    name: "Regina Adjah",
    feedback: "Attending TM Pre-University College was the best gift I could have ever received. I started at TM Pre-University College during a challenging time in my life and it couldn't have been a more perfect fit for me. Through less effort, I became IT inclined, and it made me fit perfectly in my job role. The small classroom environment allowed me to focus and absorb more information. Classes were taught by teachers who truly live and breathe the school. The teachers and staff show so much compassion, and it's evident that they love what they do.",
    date: "August 2024",
    position: "Business Woman"
  },
  {
    name: "Emmanuel K. Adzamli",
    feedback: "TMPUC is a modern pre-tertiary Technological College that seeks to educate persons through Practical Information and Communication Technology (ICT). I am also privileged to have obtained practical skills in Graphic Designing, which has strengthened and supported my foundation in ICT education holistically. Not only has TMPUC strengthened my foundation in ICT but also enlightened my spirituality in a fascinating manner. I recommend TMPUC to anyone seeking a sound foundation in ICT.",
    date: "August 2024",
    position: "Student at UEW"
  },
  {
    name: "Wobenu Harrison",
    feedback: "I'm Harrison! A graduate of TM Pre-University College. TM gave me a new look at the fast-growing technological world. Friendly and interactive mode of teaching! TM Pre-University College is making impacts! Don't be left out.",
    date: "August 2024",
    position: "Catholic Seminarian"
  },
  {
    name: "Baiden Emmanuel Ebo",
    feedback: "I went to TM-PUC as a naive in computing and very confused about the world of IT. I actually wanted to offer computer hardware, but the enrollment for hardware wasn't ready, so TM told me to start with COMPUTER NETWORKING, which I listened to, and today I am working with one of the giants in the Telecommunications industry. I am now a Certified Security Controller at Vodafone GH. TM is a very honest and kind person. I always remember the exact words TM said to me, 'Emmanuel, the world of IT is very broad and make sure you always learn to catch up.' I have never regretted that day. Thanks, TM.",
    date: "August 2024",
    position: "Certified Security Controller (Vodafone Ghana)"
  },
  {
    name: "Tetteh Rolland",
    feedback: "TM-PUC is indeed a school of transformation. I attribute a large percentage of my success story and technology skill to this noble institution. It has made a great impact in the lives of many youth, especially in the southern Volta and beyond. Joining the working team is one of my blessed experiences in life. TM Pre-University College is the best school I would recommend for anyone seeking a deep understanding of technology knowledge and skills.",
    date: "August 2024",
    position: "CEO of Rolteq"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Students Say</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p className="testimonial-feedback">{testimonial.feedback}</p>
          <p className="testimonial-author">— {testimonial.name}, {testimonial.position}</p>
        </div>
      ))}
     
    </div>
  );
};

export default Testimonials;
