import React from 'react';
import { motion } from 'framer-motion';

const GameOver = ({ tryAgain }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const explosionVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: [0, 1.2, 1],
            rotate: [0, 180, 0],
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                padding: '2em',
            }}
        >
            <motion.div variants={explosionVariants}>
                <span role="img" aria-label="explosion" style={{ fontSize: '5rem' }}>💥</span>
            </motion.div>
            <motion.h1 variants={itemVariants} style={{ fontSize: '4rem', margin: '20px 0' }}>
                Game Over!
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                Better luck next time!
            </motion.p>
            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: '10px 20px',
                    fontSize: '1.2rem',
                    backgroundColor: '#ff4136',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onTap={tryAgain}
            >
                Try Again
            </motion.button>
        </motion.div>
    );
};

export default GameOver;