import { Course } from './../courses/models/course';
import delay from './delay';

const courses = [
  Object.assign(new Course,{
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  }),
  Object.assign(new Course,{
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  }),
  Object.assign(new Course,{
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  }),
  Object.assign(new Course,{
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  }),
  Object.assign(new Course,{
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  })
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course: Course) {
    course = Object.assign(new Course, course);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          course.id = generateId(course).toLowerCase();
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }
        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => course.id == courseId);
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;