import { motion } from "framer-motion";
import { ease } from "../../lib/motion";

// Fades + lifts its children into view once, when scrolled into the viewport.
const Reveal = ({ as = "div", delay = 0, y = 24, className, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
