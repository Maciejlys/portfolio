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
