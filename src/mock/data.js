import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Rohan Gupta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Rohan Gupta',
  subtitle: "I'm a Python Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: '20190606_111943.jpg',
  paragraphOne: 'Strong in design and integration with intuitive problem-solving skills. Proficient in PYTHON, DJANGO, HTML, CSS, COMPETITIVE PROGRAMMING, Kivy, Selenium, argparse and many more technical skills in demand today.',
  paragraphTwo: 'An open source contributor passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.',
  paragraphThree: 'Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.',
  resume: 'https://drive.google.com/file/d/1ZB3oEi6fG9wGHkQGRxDhP4Tfkm-zmgxz/view?usp=drivesdk', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Screenshot 2020-03-22 at 11.49.57 PM.jpg',
    title: 'Notes App',
    info: 'A note taking app made using the django fraamework.',
    info2: '',
    url: 'https://rohan-note.herokuapp.com',
    repo: 'https://github.com/Rohan-cod/notes_app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Screenshot 2020-03-22 at 11.53.56 PM.jpg',
    title: 'Job Postings App',
    info: 'A web app made using the django framework.',
    info2: 'Get a list of latest job postings daily.',
    url: 'https://rohan-jobs.herokuapp.com',
    repo: 'https://github.com/Rohan-cod/sch_webscr', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Screenshot 2020-03-23 at 12.11.44 AM.jpg',
    title: 'Newspaper App',
    info: 'A web app made using the django framework.',
    info2: 'Make an account and post your articles.',
    url: '',
    repo: 'https://github.com/Rohan-cod/newspaper-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch? Awesome!',
  btn: "Let's build together" ,
  email: 'rohaninjmu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+917006482743',
    },
    {
      id: uuidv1(),
      name: 'phone',
      url: 'tel:+917006482743',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rohang4837b4124/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Rohan-cod',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
