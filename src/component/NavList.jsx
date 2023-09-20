import { AiFillContacts } from "react-icons/ai";
import { FaCode,  FaTools, FaUser } from "react-icons/fa";
import {RiGraduationCapLine} from 'react-icons/ri'
export const options = [
    {
      name: "ABOUT",
      link: "about",
      icon: <FaUser/>
    },
    {
      name: "SKILLS",
      link: "skills",
      icon: <FaTools/>
    },
    {
      name: "PROJECTS",
      link: "projects",
      icon: <FaCode/>
    },
    {
      name: "CONTACT",
      link: "contact",
      icon: <AiFillContacts/>
    },
    {
      name: "EDUCATION",
      link: "education",
      icon: <RiGraduationCapLine/>
    },
  ];