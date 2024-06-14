import { IBoxprops } from "@/@Types/comman";
import Frontend from "/public/svg/01.gif";
import Backend from "/public/svg/02.gif";
import Cms from "/public/svg/03.gif";
import Ux from "/public/svg/04.gif";
import Cs from "/public/svg/05.gif";
import Dm from "/public/svg/06.gif";

export const Skillsinfo: IBoxprops[] = [
  {
    heading: "Frontend",
    description:
      "I have in-depth knowledge of front-end technologies, including HTML, CSS, and JavaScript with type safety provided by TypeScript. I am proficient in using front-end frameworks and libraries such as React.js and Next.js, and have experience with CSS libraries like Tailwind CSS, Bootstrap, and Material UI. Additionally, I am skilled in using Framer Motion for creating animations and enhancing user interfaces.",
    images: Frontend,
  },
  {
    heading: "Backend",
    description:
      "I also have basic backend knowledge with frameworks such as Laravel and Express.js, and am familiar with server-side programming using both PHP and JavaScript. Additionally, I have experience with database management, working with both SQL and NoSQL databases, including MongoDB and MySQL. My understanding of backend technologies allows me to create robust and scalable server-side applications, manage efficient data storage solutions, and ensure seamless integration with front-end interfaces.",
    images: Backend,
  },
  {
    heading: "CMS",
    description:
      "I also have 2 years of experience in WordPress, one of the most popular CMS platforms, where I have worked on various projects both as a freelancer and in professional roles. Additionally, I have in-depth knowledge of other CMS software like Wix and Shopify. My expertise allows me to handle and resolve a wide range of challenges in CMS-based websites, ensuring robust and efficient website management.",
    images: Cms,
  },
  {
    heading: "UX & UI",
    description:
      "Currently, I am also learning the fundamentals of UX/UI design to enhance my design skills. I am using Figma to learn features like prototyping and am also familiarizing myself with wireframing and sketching to understand client requirements better. Additionally, I am studying high-fidelity and low-fidelity wireframes to refine my design processes further.",
    images: Ux,
  },
  {
    heading: "Computer Science & Tools",
    description:
      "As a B.Tech graduate, I am well-versed in various computer science subjects including operating systems, databases, and SDLC (Software Development Life Cycle). Furthermore, I possess proficiency in essential tools such as Git for version control, Postman for API testing, and frontend debugging using developer tools.",
    images: Cs,
  },
  {
    heading: "Digital Marketing",
    description:
      "In 2022, I completed a 6-month training program in digital marketing where I gained expertise in various areas including social media management, advertising, analytics, basic graphic design, and video editing. I also started my first job in the digital marketing field during my college days. With years of experience, I have developed a deep understanding and proficiency in digital marketing strategies and techniques.",
    images: Dm,
  },
];
