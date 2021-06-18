import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Timothy Mutegi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full Stack Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Timothy Mutegi',
  subtitle: "I'm a Full Stack Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.png',
  paragraphOne:
    'I am a Full Stack developer and I am committed to excellence and delivering quality work through my skills in web development.',
  paragraphTwo:
    'My current tech stack includes HTML5, CSS3, Bootstrap, JavaScript(ES6+), React.js, Angular, C++, Python, Java, Heroku.',
  paragraphThree:
    'Some of my favorite hobbies include swimming and playing board games and video games.',
  resume: 'https://drive.google.com/file/d/1lwrqB2sLBANuAoyvN9Yt-wpTL548asEU/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'esn.png',
    title: 'Emergency Social Network',
    info: 'A social networking web application to help during emergency situations.',
    info2: 'Technologies: React, Node JS, Express, Heroku, Mongo DB',
    url: 'https://esn-frontend-s21new.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'luggage.png',
    title: 'Luggage Hero',
    info: 'Web application that offers luggage storage services',
    info2: 'Technologies: Angular, NodeJS, Express, Mongo DB, Firebase',
    url: 'https://luggage-hero-a0de7.firebaseapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mamafair.png',
    title: 'MamaFair',
    info: 'Maternal healthcare web application.',
    info2: 'Technologies: MySQL, PHP (Laravel), Heroku',
    url: 'http://mamafair.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'truflix1.png',
    title: 'Truflix',
    info: 'A mini version of netflix.',
    info2: 'Technologies: Angular, Firebase',
    url: 'https://truflix-57712.firebaseapp.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let me know what I can help you with!',
  btn: 'Email Me',
  email: 'mutegi.timothy538@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MutegiMbaka',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/timothy-mutegi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Timmutegi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
