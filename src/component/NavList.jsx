import { AiFillContacts } from "react-icons/ai";
import { FaCode,  FaTools, FaUser } from "react-icons/fa";
import {RiGraduationCapLine} from 'react-icons/ri'
export const options = [
    {
      name: "About",
      link: "about",
      icon: <FaUser/>
    },
    {
      name: "Skills",
      link: "skills",
      icon: <FaTools/>
    },
    {
      name: "Projects",
      link: "projects",
      icon: <FaCode/>
    },
    {
      name: "Contact",
      link: "contact",
      icon: <AiFillContacts/>
    },
    {
      name: "Education",
      link: "education",
      icon: <RiGraduationCapLine/>
    },
  ];