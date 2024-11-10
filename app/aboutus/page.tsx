'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="about-container">
      {/* Background Shapes */}
      <div className="backgroundShape shape1" />
      <div className="backgroundShape shape2" />

      {/* About Section */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="about-title"
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="about-description"
      >
        We are passionate creators bringing you the best in Kpop. Our mission is to connect fans with their favorite stars through exclusive content and community. Join us as we celebrate the vibrant world of Kpop and beyond!
      </motion.p>

      {/* Call to Action */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="cta-button"
      >
        Join Us
      </motion.button>

      {/* Additional Content */}
      <section className="about-content">
        <div className="content">
          <h2>Our Story</h2>
          <p>
            We started as a small group of Kpop enthusiasts who wanted to create a platform where fans could share their love for Kpop in a unique way. Today, we are a thriving community dedicated to promoting the latest Kpop trends, music, and idols.
          </p>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .about-container {
          text-align: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ff8a80, #ff80ab);
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .about-title {
          font-size: 3rem;
          color: #fff;
          margin-top: 20px;
          position: relative;
          z-index: 1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .about-title:hover {
          color: #ff4081;
          padding: 10px 20px;
          background: #ffffff;
          border-radius: 8px;
        }

        .about-description {
          font-size: 1.3rem;
          color: #f1f1f1;
          margin-top: 20px;
          max-width: 800px;
          line-height: 1.6;
        }

        .cta-button {
          margin-top: 30px;
          padding: 14px 28px;
          background: linear-gradient(145deg, #ff1744, #d500f9);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: linear-gradient(145deg, #d500f9, #ff1744);
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Background Shapes */
        .backgroundShape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
          z-index: 0;
          animation: float 20s ease-in-out infinite;
        }

        .shape1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #f8bbd0, #f06292);
          top: -10%;
          left: -15%;
          animation-delay: 2s;
        }

        .shape2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ffe0b2, #ffcc80);
          bottom: -15%;
          right: -15%;
          animation-delay: 4s;
        }

        .about-content {
          background-color: #fff3e0;
          padding: 60px 20px;
          margin-top: 50px;
          width: 100%;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .content h2 {
          font-size: 2.2rem;
          font-weight: bold;
          color: #f50057;
        }

        .content p {
          font-size: 1.1rem;
          color: #666;
          margin-top: 20px;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .about-container {
            padding: 10px;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .cta-button {
            padding: 10px 20px;
            font-size: 1rem;
          }

          .content h2 {
            font-size: 1.6rem;
          }

          .content p {
            font-size: 1rem;
          }

          .shape1 {
            width: 300px;
            height: 300px;
            top: -10%;
            left: -10%;
          }

          .shape2 {
            width: 300px;
            height: 300px;
            bottom: -10%;
            right: -10%;
          }
        }
      `}</style>
    </div>
  );
}
