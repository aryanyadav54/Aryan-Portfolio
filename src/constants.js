// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Experience Section Logo's
import Hexaware from './assets/company_logo/Hexaware.png';

// Education Section Logo's
import csit from './assets/education_logo/csit.png';
import school from './assets/education_logo/school.jpg';

// Project Section Logo's
import jobhunt from "../src/assets/work_logo/jobhunt.png"
import devconnect from "../src/assets/work_logo/DevConnect.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VSCode', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Hexaware,
    role: "Software Engineer Intern",
    company: "HCL Technologies",
    date: "September 2023 - November 2023",
    desc: "Developed dynamic and scalable applications handling both frontend and backend development.\nCollaborated with cross-functional teams to build responsive UI, implement MERN Stack, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDB"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: csit,
    school: "BBD Northern India Institute of Technology",
    date: "September 2020 - June 2024",
    grade: "6.64 CGPA / 66.4 %",
    desc: "I have completed my bachelor's degree (B.Tech) in Computer Science and Engineering from BBDNIIT, Lucknow.",
    degree: "B.Tech in Computer Science and Engineering",
  },
  {
    id: 1,
    img: school,
    school: "Royal mount Academy, Lucknow",
    date: "Apr 2019 - March 2020",
    grade: "75.0 %",
    desc: "I completed my class 12th education from Royal mount Academy, Lucknow, under CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "Class 12th - PCM",
  },
  {
    id: 2,
    img: school,
    school: "Lucknow Public School, Lucknow",
    date: "Apr 2017 - March 2019",
    grade: "65.0 %",
    desc: "I completed my class 10th education from Lucknow Public School, Lucknow, under the CBSE board.",
    degree: "Class 10th",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-Commerce Website",
    description:
      "Full-stack e-commerce website features like product filtering and sorting.",
    image: jobhunt,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Node", "MongoDB", "Render", "Netlify"],
    github: "https://github.com/aryanyadav54",
    webapp: "http://localhost",
  },
  {
    id: 0,
    title: "Buzz Talk",
    description:
      "Connect place for Everyone with Real Time Chat.",
    image: devconnect,
    tags: ["React JS", "Redux", "Daisy UI", "Node", "Express", "Socket IO", "MongoDB", "Advance Auth", "AWS", "Nginx", "PM2"],
    github: "https://github.com/aryanyadav54",
    webapp: "http://localhost",
  },
];  