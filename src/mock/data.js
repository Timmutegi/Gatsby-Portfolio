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
  img: 'Tim.jpeg',
  paragraphOne:
    'Experienced Software Engineer with a demonstrated history of designing and developing full stack web applications. I specialize in leveraging cloud technologies to create highly scalable and distributed applications. In my most recent role as a Software Engineer at Cardinal Peak, I developed a cloud-native AI-powered video analysis platform leveraging Machine Learning and Large Language Models using Python, JavaScript and AWS services (Amazon Bedrock, Cloudformation, S3, Cloudfront, Lambda, API Gateway, ECS, RDS, Cognito) for cloud infrastructure and PostgreSQL for data processing. I also worked remotely with a distributed team on the development of a cloud-native Test Automation Platform, enhancing scalability and software quality for embedded software running on custom IoT devices.',
  paragraphTwo:
    'Technical skills include: Python, JavaScript, TypeScript, Angular, React JS, Bootstrap, HTML, CSS, Sass, Node.js, Express.js, jest, Web Sockets, MySQL, MongoDB, Docker, Docker Compose, Version Control (Git, GitHub, GitLab), CI/CD (CircleCI, Jenkins), AWS (S3, Cloudfront, Lambda, RDS, DynamoDB, API Gateway, SQS, SNS, EC2, EBS, AWS Glue, Athena, ECS, ECR), Terraform, UI Design (Figma, Adobe XD), Project Management (Jira & Trello), Agile & Lean Software Development (Scrum & Kanban).',
  paragraphThree:
    'My certifications include: AWS Certified Solutions Architect - Professional, AWS certified Developer - Associate',
  resume: 'https://drive.google.com/file/d/1XaK1Q0jMFKwK3oE8kWJEjgIw65yXoexj/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kaziflex.png',
    title: 'Kaziflex',
    info: 'Kaziflex is an online platform that bridges the gap between freelancers and customers. It provides a user-friendly interface where freelancers can showcase their skills, portfolio, and expertise, while customers can easily browse through profiles and find the right talent for their projects. The platform also facilitates communication, project management, and payment processing, streamlining the entire freelance experience for both parties.',
    info2: 'Technologies: HTML, SCSS, Angular17, TypeScript, Python, FAST API, MongoDB, Docker, Docker Compose, AWS (EC2, S3, Cloudfront, Certificate Manager)',
    url: 'https://dev.kaziflex.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'edtech.png',
    title: 'Edtech Platform',
    info: 'This platform offers mentorship to ed-tech entrepreneurs through office hours with ed-tech experts.',
    info2: 'Technologies: HTML, Sass, Angular, TypeScript, Python, FAST API, MongoDB, Docker, Docker Compose, AWS (EC2, S3, Cloudfront, Certificate Manager)',
    url: 'https://edtechbookme.net/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'luggage.png',
    title: 'Luggage Hero',
    info: 'Web application that offers luggage storage services.',
    info2: 'Technologies: HTML, Sass, Angular, Bootstap, TypeScript, NodeJS, Express, Mongo DB, Firebase.',
    url: 'https://luggage-hero-a0de7.firebaseapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'truflix1.png',
    title: 'Truflix',
    info: 'A mini version of netflix.',
    info2: 'Technologies: HTML, Sass, Bootstrap, Angular, TypeScript, Firebase.',
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
