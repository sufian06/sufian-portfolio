import { DiJavascript1 } from "react-icons/di";
import {
  FaCss3, FaFigma, FaHtml5, FaLinkedin, FaMapMarkerAlt, FaNodeJs, FaPaperPlane, FaPhoneAlt, FaReact,
  FaSass, FaUser
} from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import work1 from "./assets/works/1.png";
import work2 from "./assets/works/2.png";
import work3 from "./assets/works/3.png";
import work4 from "./assets/works/4.png";
import work5 from "./assets/works/5.png";
import work6 from "./assets/works/6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <VscGithub />,
  <FaLinkedin />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Abu Sufian",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+8801717601006",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "sufian4se@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript1 />,
  <TbBrandTailwind />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm",
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm",
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm",
  },
];
export const finishes = [
  {
    id: 1,
    number: "6+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Gazipur, Bangladesh",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "sufian4se@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+8801717601006",
  },
];
