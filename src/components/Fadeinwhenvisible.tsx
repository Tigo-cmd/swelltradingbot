// src/components/FadeInWhenVisible.tsx
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}
