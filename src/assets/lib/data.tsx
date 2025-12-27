import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";

// ✅ NEW PNG IMAGE IMPORTS (REPLACE WEBP)
import ecomartPNG from "../../assets/img/projects/ecomart.png";
import stegashieldPNG from "../../assets/img/projects/stegashield.png";
import firesentinelPNG from "../../assets/img/projects/firesentinel.png";
import pmcPNG from "../../assets/img/projects/pmc-dashboard.png";

// ✅ BACKGROUND VIDEO IMPORT
import helloVideo from "../../assets/img/projects/hello.mp4";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Varad",
    en: "Hi, I'm Varad",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Ich bin Varad, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Varad, a fullstack developer from VIT Pune with the goal of advancing my career and participating in inspiring projects. Here I present my work - from microservices to ML wildfire detection. Let's shape digital solutions together!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
  backgroundVideo: helloVideo, // ✅ BACKGROUND VIDEO ADDED
} as const;

export const projectsData = [
  {
    title: "EcoMart",
    description:
      "Full-stack e-commerce platform with 3 backend microservices (Spring Boot + MySQL, Node.js + MongoDB) and 2 React frontends. Features JWT auth, OTP email verification, cart management, and order processing.",
    description_EN:
      "Full-stack e-commerce platform with 3 backend microservices (Spring Boot + MySQL, Node.js + MongoDB) and 2 React frontends. Features JWT auth, OTP email verification, cart management, and order processing.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Java", icon: javascripticon },
      { name: "Spring Boot", icon: expressicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "MySQL", icon: apiicon },
      { name: "REST Api", icon: apiicon },
      { name: "GitHub", icon: netlifyicon },
    ],
    image: ecomartPNG,
    deploymenturl: "https://github.com/varad15/E-commerce-site",
    githuburl: "https://github.com/varad15/E-commerce-site",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "StegaShield",
    description:
      "PDF Steganography toolkit to hide/extract messages & files using metadata/annotations. Features RSA-2048 digital signing with SHA-256 tamper detection using Python & Streamlit.",
    description_EN:
      "PDF Steganography toolkit to hide/extract messages & files using metadata/annotations. Features RSA-2048 digital signing with SHA-256 tamper detection using Python & Streamlit.",
    technologies: [
      { name: "Python", icon: javascripticon },
      { name: "Streamlit", icon: reacticon },
      { name: "PyMuPDF", icon: apiicon },
      { name: "Cryptography", icon: jwticon },
      { name: "GitHub", icon: netlifyicon },
    ],
    image: stegashieldPNG,
    deploymenturl: "https://github.com/varad15/StegaShield1",
    githuburl: "https://github.com/varad15/StegaShield1",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "FireSentinel",
    description:
      "YOLOv8-based real-time wildfire detection system for aerial/surveillance footage. Custom-trained model with Python, OpenCV & NumPy. Published in IEEE ICIDCI 2024.",
    description_EN:
      "YOLOv8-based real-time wildfire detection system for aerial/surveillance footage. Custom-trained model with Python, OpenCV & NumPy. Published in IEEE ICIDCI 2024.",
    technologies: [
      { name: "Python", icon: javascripticon },
      { name: "YOLOv8", icon: reacticon },
      { name: "OpenCV", icon: apiicon },
      { name: "NumPy", icon: apiicon },
      { name: "REST Api", icon: apiicon },
      { name: "GitHub", icon: netlifyicon },
    ],
    image: firesentinelPNG,
    deploymenturl: "https://github.com/varad15/FireSentinel-Smart-Surveillance-for-Forest-Hazard-Detection",
    githuburl: "https://github.com/varad15/FireSentinel-Smart-Surveillance-for-Forest-Hazard-Detection",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "PMC Project",
    description: "Analysed complaint data and delivered highly important data insights using Power BI dashboards and ML models. Details available under NDA.",
    description_EN: "Analysed complaint data and delivered highly important data insights using Power BI dashboards and ML models. Details available under NDA.",
    technologies: [
      { name: "Power BI", icon: figmaicon },
      { name: "ML Models", icon: reacticon },
      { name: "Data Analysis", icon: apiicon },
    ],
    image: pmcPNG,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#8B5A2B",
    },
    confidential: true,
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on GitHub",
  },
} as const;

// ✅ REORGANIZED SKILLS - ALL SKILLS KEPT, BETTER CATEGORIZED
export const skillsDataFrontend = [
  {
    skillsTitle: "Frontend Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Tailwind CSS",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
    ],
  },
] as const;

export const skillsDataBackend = [
  {
    skillsTitle: "Backend Development",
    skills: [
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Java",
        hash: "#Java",
        icon: javascripticon,
        color: "#F1662A",
      },
      {
        title: "Spring Boot",
        hash: "#SpringBoot",
        icon: expressicon,
        color: "#6DB33F",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: javascripticon,
        color: "#3776AB",
      },
      {
        title: "Django",
        hash: "#Django",
        icon: reacticon,
        color: "#092E20",
      },
      {
        title: "REST API",
        hash: "#RESTApi",
        icon: apiicon,
        color: "#000000",
      },
    ],
  },
] as const;

export const skillsDataDatabase = [
  {
    skillsTitle: "Database & Storage",
    skills: [
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: apiicon,
        color: "#007ACC",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design Tools",
    skills: [
      {
        title: "Figma",
        hash: "#Figma",
        icon: figmaicon,
        color: "#F24E1E"
      },
    ],
  },
] as const;

export const skillsDataTools = [
  {
    skillsTitle: "Development Tools",
    skills: [
      {
        title: "Git/GitHub",
        hash: "#GitHub",
        icon: netlifyicon,
        color: "#000000",
      },
      {
        title: "Vite",
        hash: "#Vite",
        icon: reacticon,
        color: "#646CFF",
      },
      {
        title: "Power BI",
        hash: "#PowerBI",
        icon: figmaicon,
        color: "#F2C811",
      },
    ],
  },
] as const;

// ✅ LEGACY EXPORT FOR BACKWARD COMPATIBILITY (if needed)
export const skillsDataWeb = [
  {
    skillsTitle: "All Technologies",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Java",
        hash: "#Java",
        icon: javascripticon,
        color: "#F1662A",
      },
      {
        title: "Spring Boot",
        hash: "#SpringBoot",
        icon: expressicon,
        color: "#6DB33F",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: javascripticon,
        color: "#3776AB",
      },
      {
        title: "Django",
        hash: "#Django",
        icon: reacticon,
        color: "#092E20",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind CSS",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: apiicon,
        color: "#007ACC",
      },
      {
        title: "REST API",
        hash: "#RESTApi",
        icon: apiicon,
        color: "#000000",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Tools",
    skills: [
      {
        title: "Git/GitHub",
        hash: "#GitHub",
        icon: netlifyicon,
        color: "#000000",
      },
      {
        title: "Vite",
        hash: "#Vite",
        icon: reacticon,
        color: "#646CFF",
      },
      {
        title: "Power BI",
        hash: "#PowerBI",
        icon: figmaicon,
        color: "#F2C811",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:varadjumbad15@gmail.com",
  text: "varadjumbad15@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://linkedin.com/in/varad-jumbad-a02b57256",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/varad15",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:varadjumbad15@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    author: "Winston Churchill",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"Code is like humor. When you have to explain it, it's bad."`,
    author: "Cory House",
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "B.Tech Computer Engineering",
      description:
        "VIT Pune | CGPA 8.61 | Class of 2026. Passionate about full-stack development, ML applications, and environmental tech solutions.",
      icon: hardwareicon,
    },
    {
      title: "Research & Patents",
      description:
        "Published papers in IEEE ICIDCI 2024 & Springer ICICDS 2025. Patent filed for MineGuard Pro smart helmet for coal miners.",
      icon: caricon,
    },
    {
      title: "Bike Riding",
      description:
        "Exploring scenic routes and mountain trails. I maintain my own bike - long rides clear the mind for better coding focus.",
      icon: caricon,
    },
    {
      title: "Photography",
      description:
        "Capturing nature, cityscapes, and candid moments. Visual storytelling complements my technical projects.",
      icon: travelicon,
    },
    {
      title: "Travel",
      description:
        "Exploring new places fuels creativity and broadens perspectives for innovative problem-solving.",
      icon: travelicon,
    },
    {
      title: "Lifelong Learning",
      description:
        "Always learning everything and anything - from new frameworks to diverse domains. Curiosity drives innovation.",
      icon: hardwareicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "B.Tech Computer Engineering",
      description:
        "VIT Pune | CGPA 8.61 | Class of 2026. Passionate about full-stack development, ML applications, and environmental tech solutions.",
      icon: hardwareicon,
    },
    {
      title: "Research & Patents",
      description:
        "Published papers in IEEE ICIDCI 2024 & Springer ICICDS 2025. Patent filed for MineGuard Pro smart helmet for coal miners.",
      icon: caricon,
    },
    {
      title: "Bike Riding",
      description:
        "Exploring scenic routes and mountain trails. I maintain my own bike - long rides clear the mind for better coding focus.",
      icon: caricon,
    },
    {
      title: "Photography",
      description:
        "Capturing nature, cityscapes, and candid moments. Visual storytelling complements my technical projects.",
      icon: travelicon,
    },
    {
      title: "Travel",
      description:
        "Exploring new places fuels creativity and broadens perspectives for innovative problem-solving.",
      icon: travelicon,
    },
    {
      title: "Lifelong Learning",
      description:
        "Always learning everything and anything - from new frameworks to diverse domains. Curiosity drives innovation.",
      icon: hardwareicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you within 2-3 days.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Varad meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Varad may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Privacy Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I'll reply within 2-3 business days",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Email sending failed. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};