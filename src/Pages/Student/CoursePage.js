import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../TestRunData.js/data';
import Card from '../../components/Card';

const CoursePage = () => {
  const { courseId, pageType } = useParams();
  const coursesData = fetchData('courses');
  const course = coursesData.find(course => String(course.id) === courseId);

  // Debugging logs
  console.log("courseId:", courseId);
  console.log("pageType:", pageType);
  console.log("course:", course);

  if (!course) {
    return <div>Course not found!</div>;
  }

  let pageData;
  switch (pageType) {
    case 'assignments':
      pageData = course.assignments || [];
      break;
    case 'notifications':
      pageData = course.notifications || [];
      break;
    case 'quizzes':
      pageData = course.quizzes || [];
      break;
    case 'resources':
      pageData = course.resources || [];
      break;
    case 'gradebook':
      pageData = course.gradebook || [];
      break;
    case 'overview':
      pageData = course.overview || [];
      break;
    default:
      pageData = [];
  }

  return (
    <div>
      <h1>{course.title} - {pageType}</h1>
      {pageData.length > 0 ? (
        <Card title={pageType} data={pageData} />
      ) : (
        <p>No data available for this section.</p>
      )}
    </div>
  );
};

export default CoursePage;
