import { IoMdHome,IoMdInformationCircle } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const menu = [
    {
      icon: <IoMdHome color="rgb(148, 188, 217)" size={24} />,
      pt: "Home",
      en: "Home",
      href: "/",
    },
    {
      icon: <IoMdInformationCircle color="rgb(148, 188, 217)" size={24} />,
      pt: "Sobre",
      en: "About",
      href: "#about",
    },
    {
      icon: <BsQuestionCircleFill color="rgb(148, 188, 217)" size={24} />,
      pt: "Perguntas frequentes",
      en: "FAQ",
      href: "/faq",
    },
    {
      icon: <IoExtensionPuzzleSharp color="rgb(148, 188, 217)" size={24} />,
      pt: "Integrações",
      en: "Integrations",
      href: "https://www.throughlinecare.com/",
    },
    {
      icon: <MdEmail color="rgb(148, 188, 217)" size={24} />,
      pt: "Contato",
      en: "Contact",
      href: "/contact",
    },
  ];
  