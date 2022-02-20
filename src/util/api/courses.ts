// import { base } from '../api';
import { isNull } from '../helpers';
import { courseList, instructorList } from './data';


export const videoBase = "https://www.youtube.com/embed/";

export function getCourses(param?: any, value?: any, compare: any = "=", ent:boolean=false) {
  let cl = courseList;
  if (param && value) {
    if (compare === "=") cl = cl.filter((cli: any) => cli[param] == value);
    if (compare === ">") cl = cl.filter((cli: any) => cli[param] > value);
    if (compare === "<") cl = cl.filter((cli: any) => cli[param] < value);
    if (compare === ">=") cl = cl.filter((cli: any) => cli[param] >= value);
    if (compare === "<=") cl = cl.filter((cli: any) => cli[param] <= value);
  }
  let finalCourses:any = [];
  cl.forEach((lclCourse: any, lclIdx:any) => {
    if ('notNormalCourses' in lclCourse && ent==false) {
      cl.splice(lclIdx, 0); return;
    } else {
      lclCourse.instructor = getInstructor(1)
    }
    finalCourses.push(lclCourse);
  })
  console.log(finalCourses);
  const courses: any = finalCourses;
  return courses;
}

export function getCourse(id: any, type: any = "slug", ent:boolean=false) {
  let lclCourse = courseList.find((element: any) => element[type] === id);
  if (!lclCourse) return;
  if (ent == false) lclCourse.instructor = getInstructor(1)  
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
