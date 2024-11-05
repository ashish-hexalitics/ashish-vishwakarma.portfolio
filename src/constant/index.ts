import qa_preneur from "../assets/images/qa_preneur.png";
import ink_desk from "../assets/images/ink_desk.png";
import ink_apps from "../assets/images/ink_apps.png";
import digiana_fresh from "../assets/images/digiana_fresh.png";
import project_force from "../assets/images/project_force.png";
import twoDogs from "../assets/images/2dogs.png";

export interface Iprojects {
  title: string;
  description: string;
  image: string;
  link: string;
  technolodgy_used: string;
  sub_title: string;
  features:string
}

export const projects: Iprojects[] = [
  {
    title: "QaPreneur",
    technolodgy_used: `utilized React, Node.js, MongoDB, Payment Gateway EasyBuzz Integration`,
    sub_title: `QAPreneur - EdTech Platform`,
    description: `Developed a comprehensive EdTech platform designed for students, colleges, and companies. Responsible for integrating the EasyBuzz payment gateway, creating backend APIs, and enabling functionalities like course posting, student assessments, and job applications based on test performance.`,
    features: `Developed an education portal website with an admin interface, enabling features like course posting and tests by admins, student test-taking functionality, and job applications based on performance.`,
    image: qa_preneur,
    link: "https://qapreneur.com/",
  },
  {
    title: "Inkapps",
    technolodgy_used: `HTML, CSS, JavaScript, React.js, Node.js, React-Native`,
    sub_title: `Inkapps - Accounting Platform`,
    description: `Developed a full-featured accounting platform for InkApps Digital Solutions, including a React.js web application and a React Native mobile app. The platform includes robust customer management and accounting functionalities tailored for businesses.`,
    features: `Implemented advanced accounting features for managing vendors and debtors, similar to Tally software, allowing users to track balances, generate invoices, and manage payments efficiently. The app includes both a React Native mobile application and a React.js web app for comprehensive, multi-platform accessibility.`,
    image: ink_apps,
    link: "https://inkapps.io/",
  },  
  {
    title: "Inkdesk",
    technolodgy_used: `Remix.js, MongoDB, Prisma ORM , Tailwind CSS`,
    sub_title: `Ink Desk - Marketplace Platform`,
    description: `Created an online marketplace platform designed to connect niche publications with brands for collaboration on sponsored content campaigns. Focused on generating scalable revenue streams through innovative digital advertising solutions.`,
    features: "",
    image: ink_desk,
    link: "https://inkdesk.io/",
  },
  {
    title: "Digianafresh",
    technolodgy_used: `Node.js, MongoDB, React Native, Payment Gateway Payubiz Integration`,
    sub_title: `Digiana Fresh - Online Grocery Shopping Mart`,
    description: `Developed an online grocery shopping mart for Digiana Fresh, which includes a React Native mobile application alongside a web platform. The project focuses on streamlining product listings, enabling seamless online shopping, and integrating payment gateways for secure transactions.`,
    features: `Created a user-friendly e-commerce site featuring a secure Payubiz payment gateway. The admin panel allows management of product listings, customer interactions, and transaction processing, ensuring a smooth experience for both customers and administrators.`,
    image: digiana_fresh,
    link: "https://digianafresh.com/",
  },  
  {
    title: "Projectsforce",
    technolodgy_used: `Material UI, React, Node.js, Cube.js, MySQL, Remix.js, Prisma, Next.js`,
    sub_title: `Projectsforce - Project Management Platform`,
    description: `Developed Projectsforce, a project management tool designed to support cross-functional teams in planning, tracking, and collaborating on projects efficiently. The platform features a modern UI built with Material UI, enhancing user experience and interface design.`,
    features: `Created dynamic widget functionality for the dashboard, allowing users to customize their views and access relevant project information easily. Implemented features such as task assignment, progress tracking, and project timelines to facilitate team collaboration and ensure project success.`,
    image: project_force,
    link: "https://projectsforce.com/",
  },  
  {
    title: "2 Dogs",
    technolodgy_used: `React, Node.js, MongoDB, Tailwind CSS, Payment Gateway Payubiz Integration`,
    sub_title: `2 Dogs - Pet Services Platform`,
    description: `Created an interactive platform for 2 Dogs, enabling users to explore and book various pet-related services. The website features a fully responsive design built with Tailwind CSS, ensuring a seamless user experience across devices.`,
    features: `Users can create dynamic tags for their pets, allowing for personalized service offerings.`,
    image: twoDogs,
    link: "https://2-dogs.hexalitics.com/",
  }  
];

