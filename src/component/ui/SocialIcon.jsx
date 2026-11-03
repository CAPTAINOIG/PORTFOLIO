import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  x: RiTwitterXLine,
  mail: FiMail,
};

const SocialIcon = ({ name, ...props }) => {
  const Icon = icons[name] ?? FiGithub;
  return <Icon aria-hidden="true" {...props} />;
};

export default SocialIcon;
