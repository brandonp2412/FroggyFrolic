import React from "react";
import { motion } from "framer-motion";

const YouWon = ({ playAgain }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const confettiVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: [0, 1, 1, 0],
      y: [0, -200, -300, -400],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#4caf50",
        color: "#ffffff",
        padding: "2em",
        textAlign: "center",
      }}
    >
      <motion.div
        variants={confettiVariants}
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <span role="img" aria-label="confetti" style={{ fontSize: "3rem" }}>
          🎉
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        style={{ fontSize: "4rem", marginBottom: "20px" }}
      >
        You Won!
      </motion.h1>

      <motion.p
        variants={itemVariants}
        style={{ fontSize: "1.5rem", marginBottom: "20px" }}
      >
        Congratulations on your victory!
      </motion.p>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          backgroundColor: "#ffeb3b",
          color: "#000000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onTap={playAgain}
      >
        Play Again
      </motion.button>
    </motion.div>
  );
};

export default YouWon;
