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
}

export const projects: Iprojects[] = [
  {
    title: "QaPreneur",
    description: "A brief description of the project.",
    image: qa_preneur,
    link: "https://qapreneur.com/",
  },
  {
    title: "Inkapps",
    description: "A brief description of the project.",
    image: ink_apps,
    link: "https://inkapps.io/",
  },
  {
    title: "Inkdesk",
    description: "A brief description of the project.",
    image: ink_desk,
    link: "https://inkdesk.io/",
  },
  {
    title: "Digianafresh",
    description: "A brief description of the project.",
    image: digiana_fresh,
    link: "https://digianafresh.com/",
  },
  {
    title: "Projectsforce",
    description: "A brief description of the project.",
    image: project_force,
    link: "https://projectsforce.com/",
  },
  {
    title: "2 Dogs",
    description: "A brief description of the project.",
    image: twoDogs,
    link: "https://2-dogs.hexalitics.com/",
  },
];
