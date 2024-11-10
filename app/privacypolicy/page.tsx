'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        Privacy Policy
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="description"
      >
        Welcome to the Kpop World! Your privacy is very important to us. This Privacy Policy outlines how we collect, use, and protect your personal information. By using our website, you agree to the terms described here.
      </motion.p>

      {/* Call to Action */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="cta-button"
      >
        Learn More
      </motion.button>

      {/* Background Shapes */}
      <div className="backgroundShape shape1" />
      <div className="backgroundShape shape2" />
      
      {/* Additional Content */}
      <section className="content-section">
        <div className="content">
          <h2>Your Privacy Matters</h2>
          <p>
            We value your trust. Our team is committed to protecting your privacy. This Privacy Policy explains the types of information we collect, how we use it, and your rights.
          </p>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(  135deg, #ff8a80, #ff80ab );
          width: 100vw; /* Full width of the screen */
          height: 100vh; /* Full height of the screen */
          display: flex;
          flex-direction: column;
          justify-content: center; /* Center content vertically */
          align-items: center; /* Center content horizontally */
        }

        .title {
          font-size: 3rem;
          color: #ffffff;
          margin-top: 20px;
        }

        .description {
          font-size: 1.2rem;
          color: #f0f0f0;
          margin-top: 20px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          margin-top: 30px;
          padding: 12px 20px;
          background-color: #ff4b1f;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #ff7320;
        }

        /* Background Shapes */
        .backgroundShape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.2;
          z-index: 0;
          animation: float 20s linear infinite;
        }

        .shape1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ff9a8b, #ff6a00);
          top: 10%;
          left: -10%;
        }

        .shape2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ff9a8b, #ffc3a0);
          bottom: 10%;
          right: -15%;
        }

        .content-section {
          background-color: #f0f8ff;
          padding: 60px 20px;
          margin-top: 50px;
          min-height: 50vh; /* Ensure this section takes up at least half of the screen */
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .content h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .content p {
          font-size: 1.1rem;
          color: #555;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          .title {
            font-size: 2rem;
          }

          .description {
            font-size: 1rem;
          }

          .cta-button {
            padding: 10px 15px;
            font-size: 1rem;
          }

          .content h2 {
            font-size: 1.5rem;
          }

          .content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
