// import { base } from '../api';
import { courseList, instructorList } from './data';


export const videoBase = "https://www.youtube.com/embed/";

export function getCourses(param?: any, value?: any, compare: any = "=") {
  let cl = courseList;
  if (param && value) {
    if (compare === "=") cl = cl.filter((cli: any) => cli[param] == value);
    if (compare === ">") cl = cl.filter((cli: any) => cli[param] > value);
    if (compare === "<") cl = cl.filter((cli: any) => cli[param] < value);
    if (compare === ">=") cl = cl.filter((cli: any) => cli[param] >= value);
    if (compare === "<=") cl = cl.filter((cli: any) => cli[param] <= value);
  }
  const courses: any = cl;
  return courses;
}

export function getCourse(id: any, type: any = "slug") {
  let lclCourse = courseList.find((element: any) => element[type] === id);
  if (!lclCourse) return;
  const course: any = lclCourse;
  return course;
}

export function getInstructors() {
  let il = instructorList;
  return il;
}

export function getInstructor(id: any) {
  let lclinstructor = instructorList.find((element) => element.id === id);
  if (!lclinstructor) return;
  return lclinstructor;
}
