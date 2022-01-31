import { motion } from "framer-motion";
import React from "react";

export const FadeInWhenVisible: React.FC = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, staggerChildren: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 100, scale: 0.9 },
      }}>
      {children}
    </motion.div>
  );
};

export const OnHoverScaleMotion: React.FC = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

export const OnHoverScaleWithTopMotion: React.FC = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -5,
      }}>
      {children}
    </motion.div>
  );
};

export const OnHoverScaleWithTopMotionClickable: React.FC = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -5,
      }}
      whileTap={{ scale: 0.9, y: 5 }}>
      {children}
    </motion.div>
  );
};
