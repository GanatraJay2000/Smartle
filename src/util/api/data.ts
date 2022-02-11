export const videoBase = "https://www.youtube.com/embed/";

export const courseDefault = {
  videoBase: videoBase,
  statsText: [
    { top: "Number of Classes" },
    { top: "Duration", bottom: "Min Per Class" },
    { top: "Live-class ratio" },
    { top: "Age", bottom: "Years" },
    { top: "Cost", end: "$", bottom: "Years" },
  ],
};

/* 
Optional Fields
instructor_id, extraShow, statsText.top, statsText.bottom, statsText.end, statsText.start
*/

export const courseList = [
  {
    id: 101,
    instructor_id: 1,
    title: "Financial Literacy - Foundations",
    slug: "financial-literacy-foundations",
    age: "8-10",
    credits: true,
    self_paced: false,
    desc: "Become financially savvy in managing money matters in a fun & interactive manner, helping develop the right behaviour & attitude towards money.",
    duration: "6 Classes, Once per Week",
    cost: "10",
    objective:"Introducing pre-teens the concept of money and various institutions handling money in modern society.",
    stats: ["6", "60", "1:6", "8-10", "8"],
    curriculum: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto voluptatibus cupiditate alias suscipit quos, impedit vel et aliquam perferendis ullam aperiam odit nam omnis",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto voluptatibus cupiditate alias suscipit quos, impedit vel et aliquam perferendis ullam aperiam odit nam omnis",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto voluptatibus cupiditate alias suscipit quos, impedit vel et aliquam perferendis ullam aperiam odit nam omnis",
    ],
    timeline: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis at incidunt enim porro doloremque eaque neque nostrum temporibus ex velit.",
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.",
      "Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.",
    ],
    image: "/images/courses/fl.png",
    video: "m2A7H9OFahI",
    ...courseDefault,
  },
  {
    id: 2,
    show: 1,
    credits: true,
    slug: "digital-literacy",
    age: "8-10 Yrs",
    title: "Digital Literacy",
    desc: "Develop knowledge, skills and attitudes to be both safe and empowered in an increasingly digital world...",
    duration: "20 mins",
    instructor: "Jay Ganatra",
    cost: "8",
    image: "/images/courses/dl.png",
    video: "CGmDCm-bD9k",
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien sagittis magna at commodo et vel. Ut imperdiet imperdiet rhoncus elit lorem a facilisi et cras.",
    ...courseDefault,
  },
  {
    id: 3,
    show: 1,
    credits: true,
    slug: "mental-emotional-wellbeing",
    age: "8-10 Yrs",
    title: "Mental & Emotional Wellbeing",
    desc: "Develop confidence, self respect and self worth while bringing out a positive outlook on life...",
    duration: "20 mins",
    instructor: "Jay Ganatra",
    cost: "8",
    image: "/images/courses/mew.png",
    video: "vnUBqfiLZIk",
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien sagittis magna at commodo et vel. Ut imperdiet imperdiet rhoncus elit lorem a facilisi et cras.",
    ...courseDefault,
  },
  {
    id: 4,
    show: 1,
    credits: true,
    slug: "communication-skills",
    age: "8-10 Yrs",
    title: "Communication Skills",
    desc: "Build fluency in the listening and speaking skills needed to achieve academic and personal success...",
    duration: "20 mins",
    instructor: "Jay Ganatra",
    cost: "8",
    image: "/images/courses/cs.png",
    video: "oHTdnhUQPm8",
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien sagittis magna at commodo et vel. Ut imperdiet imperdiet rhoncus elit lorem a facilisi et cras.",
    ...courseDefault,
  },
  {
    id: 5,
    show: 0,
    credits: false,
    title: "Health, Hygiene & Puberty for Girls",
    desc: "Helping your daughters deal with all sorts of things they maybe worried about, wondering about or may not have considered yet...",
    ...courseDefault,
  },
  {
    id: 6,
    show: 0,
    credits: false,
    title: "Dealing with Anxiety",
    desc: "Know how to manage anxiety so  that it does not interfere with functioning that you would expect for a child during the developmental stage...",
    ...courseDefault,
  },
  {
    id: 7,
    show: 0,
    credits: false,
    title: "Public Speaking",
    desc: "Dynamic and well-prepared speakers are highly valued. We will help you master the skills needed to organize your thoughts and formulate strong arguments...",
    ...courseDefault,
  },
  {
    id: 8,
    show: 0,
    credits: false,
    title: "Introduction to sign Language",
    desc: "Learn the best way to communicate with the deaf and hearing impaired...",
    ...courseDefault,
  },
];

export const instructorList = [
  {
    id: 1,
    name: "George Smith",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quos minima incidunt asperiores iure illum nihil, quod aspernatur praesentium dignissimos, repellat itaque reiciendis a ut.",
    stars: 5,
    reviews: 112,
    availability: "Once in a week",
    image: "/images/instructors/instructor1.png",
  },
];