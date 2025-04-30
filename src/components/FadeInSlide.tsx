// FadeInSlideOnScroll.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInSlideOnScrollProps {
  children: ReactNode;
  direction?: "left" | "right";
}

const FadeInSlideOnScroll = ({ children, direction = "left" }: FadeInSlideOnScrollProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const xInitial = direction === "left" ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInitial }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: xInitial }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSlideOnScroll;
