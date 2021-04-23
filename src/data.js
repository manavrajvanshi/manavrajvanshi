import svg1 from "./images/svg/svg-1.svg";
import svg2 from "./images/svg/svg-2.svg";
import svg3 from "./images/svg/svg-3.svg";
import svg4 from "./images/svg/svg-4.svg";

export const infoData = [
  {
    id: "about",
    topLine: "About Me",
    content: [
      {
        headline: "Education",
        description: [
          "Graduate student at San Jose State University.",
          "Pursuing MS in Software Engineering.",
          "Enterprise and Cloud Technology specialization.",
        ],
      },
      {
        headline: "Interests",
        description: [
          "Full-stack development.",
          "Competitive Coding.",
          "Hackathons.",
          "Internet of Things.",
          "Reading about space.",
        ],
      },
    ],

    imgStart: false,
    img: svg1,
    alt: "about",
  },
  {
    id: "experience",
    topLine: "Experience",
    content: [
      {
        headline: "Sikka Software",
        description: [
          " ",
          "✅ Developed and optimized the SikkaOne API platform for healthcare partners.",
          "👨🏻‍💻 ReactJS, C#, .NET Core, MySQL.",
        ],
      },
      {
        headline: "IBM",
        description: [
          " ",
          "✅ Developed an automated dashboard for IBM Cloud offerings and saved 20h/week.",
          "👨🏻‍💻 TypeScript, NextJS, NodeJS, ReactJS, DB2.",
        ],
      },
      {
        headline: "KOBA Insurance",
        description: [
          " ",
          "✅ Developed the policy and quotes module for vehicle insurance.",
          "👨🏻‍💻 NextJS, ReactJS, Strapi CMS, Stripe, MongoDB.",
        ],
      },
      {
        headline: "Mann-India Technologies",
        description: [
          " ",
          "✅ Developed the admin dashboard and login services for the internal tool.",
          "👨🏻‍💻 Java, Spring Boot, MySQL, Angular.",
        ],
      },
    ],
    imgStart: true,
    img: svg2,
    alt: "experience",
  },
  {
    id: "projects",
    topLine: "Projects",
    content: [
      {
        headline: "URL Shortner | Bitly",
        description: [
          "✅ Implemented a highly available URL shortening service over AWS Cloud.",
          "👨🏻‍💻 GoLang, AWS, Docker, RabbitMQ, MySQL, MongoDB, Java Restlet.",
        ],
        link: { url: "https://www.youtube.com/watch?v=5AYUlUQ4aeQ", text: "Demo Video" },
      },
      {
        headline: "Dataverse | Distributed Storage",
        description: [
          "✅ Developed a cloud based distributed storage system with data replication and dynamic addition of nodes. Searched using query flooding for low latency.",
          "👨🏻‍💻 Python, gRPC, AWS, Docker, Algorithms.",
        ],
        link: {
          url:
            "https://github.com/manavrajvanshi/Distributed-File-Storage-System-P2P-Overlay-Network",
          text: "Github",
        },
      },
      {
        headline: "GrubHub | Order Management",
        description: [
          "✅ Designed and developed an N-tiered, highly scalable, distributed full-stack application for restaurants and customers to place food orders.",
          "👨🏻‍💻 NodeJS, ExpressJS, ReactJS, MongoDB, Apache Kafka, Redis, AWS, Docker.",
        ],
        link: {
          url: "https://github.com/manavrajvanshi/grubproto",
          text: "Github",
        },
      },
      {
        headline: "I Arise | Fall Detection System",
        description: [
          "✅ Developed an IoT based affordable device to monitor and analyse the motion of elderly and send out notifications in case of a fall.",
          "👨🏻‍💻 NodeMCU, Kalman Filter, Accelerometer Sensor, GoogleScript, Angular.",
        ],
        link: {
          url:
            "https://github.com/manavrajvanshi/I-Arise-Kalman-Filtered-IMU-Based-Fall-Detection-Classification-",
          text: "Github",
        },
      },
    ],
    img: svg3,
    alt: "projects",
  },
  {
    id: "skills",
    topLine: "Skills",
    content: [
      {
        headline: "Programming Languages",
        description: ["Java", "JavaScript, TypeScript", "GoLang", "Python", "C#"],
      },
      {
        headline: "Web Frameworks",
        description: ["Node.JS, Express.JS", "Next.JS, React.JS", "Angular", "Bootsrap"],
      },
      {
        headline: "Databases",
        description: ["MySQL", "MongoDB"],
      },
      {
        headline: "Others",
        description: [
          "Docker, Kubernetes",
          "RabbitMQ, Apache Kafka",
          "AWS, GCP",
          "gRPC",
          "Terraform",
        ],
      },
    ],
    imgStart: false,
    img: svg4,
    alt: "about",
    dark: true,
  },
];

export const typerData = [
  "I am a Software Engineer. ",
  "I am a Grad Student. ",
  "I am a Full-Stack Developer.",
  "I am a Tech Enthusiast. ",
  "I am a Cloud Developer. ",
];

export const socialData = {
  linkedIn: "https://www.linkedin.com/in/manavrajvanshi/",
  stackExchange: "https://arduino.stackexchange.com/users/29488/manav",
  github: "https://github.com/manavrajvanshi",
  reddit: "https://www.reddit.com/user/manavrajvanshi",
};
