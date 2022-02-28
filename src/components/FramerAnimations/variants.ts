export const fadeInFromBottom = {
  initial: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const woobleVariant = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    scaleY: [1, 1.3, 0.8, 1, 1],
    color: "red",
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const listItem = {
  hidden: { opacity: 0, y: -20, scaleY: 0 },
  show: { opacity: 1, y: 0, scaleY: 1 },
};

export const heroArrow = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export const projectContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const projectItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
