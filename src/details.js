import profilepic from "./img/profilepic.jpg";

export const data = {
  img: profilepic,
  name: "Gino Colman",
  tag: "MERN Stack Web Developer",
  cv_link:
    "https://drive.google.com/file/d/1wYQXwRUDTnY7rLMVuF_gJbqJNqg65Zku/view?usp=sharing",
  about:
    "Hello! I'm Gino -- Entry Level MERN Stack Web Developer.",
  email: "gdcolman95@gmail.com",
  mobile: "5613015519",
  address: "North Miami Beach, FL",
  language: "English, Spanish",
  hobbies: "Playing Soccer, Exercising, Cooking, Traveling, and Gaming",
  projects: [
    {
      p_name: "tripiter",
      from: "Mar 2022",
      to: "April 2022",
      github: "https://github.com/Snackonevil/tripiter",
      link: "https://tripiter.herokuapp.com/login",
      details:
        "This React web-based app gives users a personalized way to create a unique profile about their world adventures. They log all their desirable trips by location and add the best highlights about that trip to share with friends and family."
    },
    {
      p_name: "Between The Covers",
      from: "Feb 2022",
      to: "Mar 2022",
      github: "https://github.com/acuson/between-the-covers",
      link: "https://between-the-covers.herokuapp.com/",
      details:
        "Between the Covers is a book club application where users can create book clubs, explore book clubs, and explore new books. Technologies Used: Javascript, EJS, Bootstrap, MySQL, REST API, Nodejs, Expressjs, CSS"
    },
    {
      p_name: "Deezer Music Generator",
      from: "Dec 2021",
      to: "Dec 2021",
      github: "https://github.com/ginocorp/deezer-music-generator",
      link: "https://ginocorp.github.io/deezer-music-generator/",
      details:
        "As a music lover, my team and I created an app using a REST API to get the top 20 tracks from an artist that is searched, along with an image that corresponds with that artist. Technologies Used: Javascript, HTML, CSS, Bootstrap, REST API, ajax"
    }
  ],
  experience: [
    {
      role: "Georgia Tech MERN Stack Bootcamp",
      from: "Oct 2021",
      to: "Apr 2022",
      company: "GTBC",
      details:
        "I attended the Georgia Tech Bootcamp to get my first step into web development. I learned all the basics of web development, from front end to back end development. Technologies Used: React, Nodejs, Expressjs, JavaScript, Handlebars, EJS, MongoDB, MySQL, HTML, CSS, Bootstrap and more."
    },
    {
      role: "Assistant Manager at Amazon",
      from: "Mar 2020",
      to: "Oct 2021",
      company: "Amazon Logistics",
      details:
        "Coordinate daily sortation assignments for 50+ employees to unload, sort, package, and load 50,000 packages or more onto delivery trucks in 10 hours. During sortation I documented, trained, and developed any underperforming employees. At the end of the day I recorded and evaluated our performance and compared it to our planned goals before the shift in order to make improvements on the following day."
    },
    {
      role: "Medical Scribe",
      from: "Apr 2017",
      to: "Jul 2018",
      company: "Scribe America",
      details:
        "Documented doctors notes on all patients they evaluated in the ER. Patient evaluation required patient history, present complaint, physical examination, and follow-up care/discharge information."
    }
  ],
  education: [
    {
      stream: "MERN Stack Web Development",
      institute: "Georgia Institute of Technology Bootcamp",
      from: "Oct 2021",
      to: "Apr 2022",
      grade: "A",
      board: ""
    },

    {
      stream: "BS Biologal Sciences",
      institute: "Florida Atlantic University",
      from: "Aug 2013",
      to: "May 2017",
      grade: "3.14 GPA",
      board: ""
    },
    {
      stream: "2 years of Medical School",
      institute: "Ross University School of Medicine",
      from: "Aug 2018",
      to: "Apr 2020",
      grade: "Did not complete",
      board: ""
    }
  ],
  skills: {
    "Web Development":
      "Reactjs, Nodejs, Expressjs, JavaScript, HTML5, CSS3, Bootstrap",
    "Essential Skills": "Bilingual(English/Spanish), MS Office, iWork Apps, Google Docs, Business Environment Knowledge, Leadership, Supervision and Training, Excellent Communication and Interpersonal Skills",
    "Database": "MySQL, NoSQL, MongoDB",
    "Others & Certifications": "Git, Linux, Data Structure"
  }
};
