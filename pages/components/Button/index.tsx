import { ButtonProps } from "./ButtonTypes";

const ButtonLink: React.FC<ButtonProps> = ({ title, link }) => {
  return <a href={link} className="bg-indigo-600 text-white no-underline hover:no-underline hover:text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">{title}</a>;
};

export default ButtonLink