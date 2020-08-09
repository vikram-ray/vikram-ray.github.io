
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const TopMenu = [
  {id: '#skills', name: 'Skills'},
  // remove experience if you are fresher
  {id: '#experience', name: 'Work Experiences'},
  // {id: '#blog', name: 'Blog'},
  {id: '#projects', name: 'Projects'},
  {id: '#opensource', name: 'Open Source'},
  {id: '#tools', name: 'Tools'},
  {id: '#achievements', name: 'Achievements'},
  {id: '#contact', name: 'Contact Me'},
]

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Vikram Ray",
  title: "Hi all, I'm Vikram",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Django and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1UN-DXwvxtP8hpca88zHk0-RWIb1ByqQUmsxMR83XJwY/edit?usp=sharing"
};

// setting title
document.title = `${greeting.username} Portfolio`

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/rayvikram",
  linkedin: "https://www.linkedin.com/in/vikramray/",
  gmail: "vik8876@gmail.com",
  facebook: "facebook.com/thevikramray",

  // gitlab: "gillab-link",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Develop interactive Front end / User Interfaces for your web"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop robust backend and REST API with Django | NodeJS")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences | uncomment below items if you have more exp

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Ezedox",
      companylogo: require("./assets/images/ezedox.png"),
      date: "June 2018 – Present",
      desc: "Working on ReactJS | Redux | Django | Django-rest-framwork to develop UI and REST API with our awsome team",
      descBullets: [
        "Build UI of ezedox-inventory with ReactJS with awsome state manager Redux",
        "Developed Backend and UI of realtime Notifications and Updates with django-channels and websocket",
        "Developed backend and UI of Highly Customizable Licensing",
        "UI and Backend of customizable Roles/Group by extending django-groups"
      ]
    },
    // {
    //   role: "Front-End Developer",   
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",  
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "rayvikram", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Big projects that you have created 
const bigProjectSection = {
  title: emoji("Big project "),
  subtitle: "Some projects that i build to solve real life problems!",
  cards: [
    {
      title: "MyTournament",
      subtitle: "Gaming Event Webapp where user can organize and join Gaming Events",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Website", url: "http://mytournament.tk/" },
        { name: "GitHub", url: "https://github.com/rayvikram/mytournament-frontend" },
      ]
    },
    {
      title: "Node Blog",
      subtitle: "A blog created with NodeJS and EJS",
      footerLink: [
        { name: "Website", url: "https://blogvikram.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/rayvikram/node-blog" },
      ]
    },
    {
      title: "LetStylus",
      subtitle: "Ecommerce",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Website", url: "https://letstylus.com/" },
      ]
    },
    
  ]
};


// Tools that you have created 
const toolsSection = {
  title: emoji("Tools ⚒ "),
  subtitle: "Some Cool Tools and Games that I have build !",
  cards: [
    {
      title: "GitHub Visualizer",
      subtitle: "View all details of a GitHub profile in one place",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        { name: "Website", url: "https://rayvikram.github.io/github-visualizer/" },
        { name: "GitHub", url: "https://github.com/rayvikram/github-visualizer" },
      ]
    },
    {
      title: "React Notepad",
      subtitle: "Notepad created with React",
      footerLink: [
        { name: "Website", url: "https://rayvikram.github.io/notepad/" },
        { name: "GitHub", url: "https://github.com/rayvikram/notepad" },
      ]
    },
    {
      title: "Simons Game",
      subtitle: "This is a representation of famous simon game",
      footerLink: [
        { name: "Website", url: "https://rayvikram.github.io/simon-game/" },
        { name: "GitHub", url: "https://github.com/rayvikram/simon-game" },
      ]
    },
    {
      title: "Google Meet Clone",
      subtitle: "Google Meet Clone with WebRTC to make video calls. View and make sure to enable webcam.",
      footerLink: [
        { name: "Website", url: "https://meet-google.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/rayvikram/GoogleMeet-Clone-With-WebRTC" },
      ]
    }    
  ]
};


// Your Achievement Section Include Your Certification Talks and More
const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",

  cards: [
    {
      title: "CS50: CS50's Introduction to Computer Science",
      subtitle: "An introduction to the intellectual enterprises of computer science and the art of programming from EDX",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://courses.edx.org/certificates/8a3056693e2e46e38ccc341cefeda798" },
      ]
    },
    {
      title: "The Complete 2020 Web Development Bootcamp",
      subtitle: "A 50+ hours of Udemy course that is focused on HTML, CSS, Javascript, Node, React, MongoDB and more!",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-FPNPPZ7J/" },
      ]
    },
    {
      title: "React Certification",
      subtitle: "It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
      ]
    },
  ]
};


// Blogs Section | Uncomment if you want to have a blog here
const blogSection = {

  // title: "Blogs",
  // subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ]
};

// NOTE: set your profile pic, bio, location on github to reflect on portfolio
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7974550078",
  email_address: "vik8876@gmail.com"
};


export {
  greeting, socialMediaLinks, skillsSection, techStack,
  workExperiences, openSource, achievementSection, blogSection,
  contactInfo, toolsSection, bigProjectSection, TopMenu
};
