import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export const easing = [0.6, -0.05, 0.01, 0.99];

export const animationContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      easing,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
      }}
      whileTap={{ scale: 0.9, y: 5 }}>
      {children}
    </motion.div>
  );
};
