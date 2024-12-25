'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonHover = {
  hover: { scale: 1.05, backgroundColor: '#5c8ef7' },
};

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background Shapes */}
      <div className={`${styles.backgroundShape} ${styles.shape1}`} />
      <div className={`${styles.backgroundShape} ${styles.shape2}`} />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Website!
      </motion.h1>

      {/* Navigation */}
      <nav className={styles.nav}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/aboutus">About Us</Link> | <Link href="/contact">Contact Us</Link> |{' '}
          <Link href="/privacypolicy">Privacy Policy</Link>
        </motion.div>
      </nav>

      {/* Ball Container with Animations */}
      <div className={styles.ballContainer}>
        <motion.div
          className={styles.ball}
          initial={{ y: -20 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
        >
          <span className={styles.ballText}>Hello</span>
        </motion.div>
        <motion.div
          className={styles.ball}
          initial={{ y: -20 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
        >
          <span className={styles.ballText}>World</span>
        </motion.div>
        <motion.div
          className={styles.ball}
          initial={{ y: -20 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'mirror' }}
        >
          NICE TO MEET YOU
        </motion.div>
      </div>

      {/* New Animated Intro Section at the Bottom */}
      <motion.div
        className={styles.introSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <div className={`${styles.animatedShape} ${styles.shape3}`} />
        <div className={`${styles.animatedShape} ${styles.shape4}`} />
        <p className={styles.introText}></p>
      </motion.div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Hello, I'm Nikki!</h1>
        <p>Full-Stack Developer with a passion for creating beautiful web experiences.</p>
        <button>View My Work</button>
      </section>

      {/* Full-Screen Hero Section */}
      <motion.div
        className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-center rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center p-8 rounded-full bg-white bg-opacity-20 shadow-2xl">
          <motion.h1
            className="text-6xl font-extrabold text-white mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm NIKKI
          </motion.h1>
          <motion.p
            className="text-3xl text-white mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            A Web Developer & Designer
          </motion.p>

          <div className="flex gap-6">
            <motion.a
              href="https://www.youtube.com/@m.akoreandramachannel1022"
              className="px-10 py-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              View My Youtube
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Header Section */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <motion.a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-16 h-16 text-white p-4 bg-transparent rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C10.343 2 9 3.343 9 5C9 6.657 10.343 8 12 8C13.657 8 15 6.657 15 5C15 3.343 13.657 2 12 2ZM4 10C4 10 4.5 11 6 12C7.5 13 4 14 4 14C4 14 5 15.5 7 16.5C9 17.5 12 16 12 16C12 16 15 17.5 17 16.5C19 15.5 20 14 20 14C20 14 16.5 13 17 12C17.5 11 17 10 17 10C17 10 14 9 12 9C10 9 4 10 4 10Z" />
            </svg>
            <span className="ml-3 text-3xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Butterfly
            </span>
          </motion.a>

          <motion.button
            className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 rounded text-white mt-4 md:mt-0"
            variants={buttonHover}
            whileHover="hover"
          >
            <a href="https://www.youtube.com/@m.akoreandramachannel1022">SUBSCRIBE NOW</a>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </header>
    </div>
  );
}
