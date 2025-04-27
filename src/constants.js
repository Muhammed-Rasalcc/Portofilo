// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';



// Experience Section Logo's
import techlogo from './assets/company_logo/techno.png'

// Education Section Logo's
import degreelo from './assets/education_logo/CalicutUniversitylogo.png';
import plustwolo from './assets/education_logo/plus.png';
import cbselo from './assets/education_logo/CBSE.png';

// Project Section Logo's
import ecommercelo from './assets/Work_logo/ecommerce.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
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
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: techlogo,
      role: "Mern Stack Developer",
      company: "Technovalley Software Consulting",
      date: "Sep 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack as an intern, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Express JS",
        "Git",
        "github",
        "Node JS",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: degreelo,
      school: "Safa College, Valanchery",
      date: "Sept 2021 - jun 2024",
      grade: "0",
      desc: "I completed my Bachelor's degree in Computer Application (B.Ca.) from Safa College, Valanchery under Calicut Universtiy. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Safa College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA (Computer Appilication)",
    },
    {
      id: 1,
      img: plustwolo,
      school: "bafakhy yatheem khana, valavannnur",
      date: "jun 2019 - March 2021",
      grade: "74.5%",
      desc: "I completed my class 12 education from bafakhy yatheem khana, valavannnur, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology Science.",
      degree: "DHSE(XII) - PCM with Biology Science",
    },
    {
      id: 2,
      img: cbselo,
      school: "Aes central school, Alloor",
      date: "Apr 2018 - March 2019",
      grade: "71%",
      desc: "I completed my class 10 education from Aes central school, Alloor, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "E-commerce Website",
      description:
        "Developed a full-stack E-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js), offering a seamless shopping experience with modern features like user authentication, cart management, online payment integration, and an admin dashboard.",
      image: ecommercelo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Muhammed-Rasalcc/byte-cart-final",
      webapp: "https://byte-cart-final.vercel.app/",
    },
  ];  