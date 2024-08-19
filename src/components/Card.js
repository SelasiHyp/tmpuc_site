import React, { useState } from 'react';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, data, count, showCount, seeMore, pageType }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Determine the items to display
  const itemsToShow = data.slice(0, 3);
  const shouldShowSeeMore = data.length > 3;

  return (
    <div className='card'>
      <div className="card-header">
        <h2>{title}</h2>
        {showCount && count > 0 && (
          <span className='count'>{count}</span>
        )}
      </div>
      {itemsToShow.map((item, index) => {
        // Assign courseId to item.id
        const courseId = item.id;

        return (
          <div 
            key={index}
            className={index === 0 ? 'course-border-top-bottom' : 'course-border-bottom'}
          >
            <div className="card-item-wrapper">
              <Link to={`/Student/${courseId}/${pageType}`} className="card-item-link">
                {item.title}
              </Link>
              <button
                className={`accordion ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div className={`panel ${activeIndex === index ? 'show' : ''}`}>
              <ul className='panel-items'>
                {item.subitems && item.subitems.map((subitem, subIndex) => (
                  <li key={subIndex} className="subitem">
                    <Link to={`/courses/${courseId}${subitem.link}`}>{subitem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
      {shouldShowSeeMore && seeMore && (
        <div className="see-more">
          <Link to={seeMore}>See More</Link>
        </div>
      )}
    </div>
  );
};

export default Card;
