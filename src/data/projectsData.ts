export interface projectsType {
  title: string;
  description: string;
  stack: string[];
  linkSource: string;
  linkDemo: string;
}

export const projects: projectsType[] = [
  {
    title: "My personal website",
    description: "Website created to showcase my skills and some of my work.",
    stack: [
      "React",
      "Typescript",
      "Styled-components",
      "Framer-motion",
      "Tsparticle",
      "React-scroll",
    ],
    linkSource: "https://github.com/Maciejlys/portfolio",
    linkDemo: "",
  },
  {
    title: "Pomodoro-react",
    description: "Pomodoro application that helps you manage your time!",
    stack: [
      "React",
      "Typescript",
      "Styled-components",
      "Axios",
      "React-router",
    ],
    linkSource: "https://github.com/Maciejlys/Pomodoro-react",
    linkDemo: "https://maciejlys.github.io/Pomodoro-react/",
  },
  {
    title: "ProductivityBoost ",
    description:
      "React-native app for mobile devices that helps you track time spent on activities.",
    stack: [
      "React-native",
      "React-navigation",
      "Async-storage",
      "Awesome-alerts",
    ],
    linkSource: "https://github.com/Maciejlys/ProductivityBoost",
    linkDemo: "https://maciejlys.github.io/ProductivityBoost/",
  },
  {
    title: "Github-stats",
    description:
      "Web application that shows basic information about specific given github user.",
    stack: [
      "React",
      "Typescript",
      "Styled-components",
      "Axios",
      "Chart.js",
      "GitHub API",
    ],
    linkSource: "https://github.com/Maciejlys/Github-stats",
    linkDemo: "https://maciejlys.github.io/Github-stats/",
  },
  {
    title: "PythonSmallAuth",
    description: "Authorization app that manages registering and loging in.",
    stack: ["Python", "Flask", "Hashlib", "Python-dotenv", "PostgreSQL"],
    linkSource: "https://github.com/Maciejlys/PythonSmallAuth",
    linkDemo: "",
  },
  {
    title: "Raid-utility-bot",
    description:
      "Discord bot that fetches all nicknames from an event creaded by Raid-Helper and turns it into invite macro.",
    stack: ["Typescript", "Discord.js"],
    linkSource: "https://github.com/Maciejlys/Raid-utility-bot",
    linkDemo: "",
  },
  {
    title: "Shopping-buddy",
    description: "App that allows you to create a shopping list.",
    stack: ["React", "Typescript", "Local-storage"],
    linkSource: "https://github.com/Maciejlys/Shopping-buddy-react",
    linkDemo: "https://maciejlys.github.io/Shopping-buddy-react/",
  },
  {
    title: "Countdown-adding",
    description:
      "App where you can add your own events and a tab with countdown to that event will appear!",
    stack: ["React", "Typescript", "Local-storage", "uuid"],
    linkSource: "https://github.com/Maciejlys/Countdown-react-adding",
    linkDemo: "https://maciejlys.github.io/Countdown-react-adding/",
  },

  {
    title: "Runculator",
    description:
      "My own running calculator that has all needed funcionalities.",
    stack: ["HTML", "CSS", "Javascript", "Parcel"],
    linkSource: "https://github.com/Maciejlys/Runculator",
    linkDemo: "https://maciejlys.github.io/Runculator/",
  },
  {
    title: "Google-homepage",
    description: "Google home page clone.",
    stack: ["HTML", "CSS"],
    linkSource: "https://github.com/Maciejlys/google-homepage",
    linkDemo: "https://maciejlys.github.io/google-homepage/",
  },
];
