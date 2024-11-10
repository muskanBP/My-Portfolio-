'use client';

import React from 'react';
import { motion } from 'framer-motion';  // Import motion

export default function ContactUs() {
  return (
    <div className="container">
      {/* Contact Us Section */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="heading"
      >
        HELLO WEBSITE
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="button"
      >
        WEBSITE LOGIC
      </motion.button>

      <p className="description">
        Contact us if you have any queries, questions, or requests...
      </p>

      <section className="contact-section">
        <div className="form-container">
          <h2 className="section-title">Contact Me</h2>
          <form className="form">
            <input type="text" placeholder="Your Name" className="input" />
            <input type="email" placeholder="Your Email" className="input" />
            <textarea placeholder="Your Message" className="textarea"></textarea>
            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Background Shapes */}
      <div className="backgroundShape shape1"></div>
      <div className="backgroundShape shape2"></div>

      {/* Styles */}
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf3e0, #e3e8ff);
          width: 100vw; /* Full width */
          height: 100vh; /* Full height */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .heading {
          font-size: 2rem;
          color: #f2a900;
          margin-top: 20px;
        }

        .button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #ff4b1f;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .button:hover {
          background-color: #e43f00;
          transform: scale(1.1);
        }

        .description {
          margin-top: 20px;
          font-size: 1.1rem;
          color: #555;
        }

        .contact-section {
          padding: 60px 20px;
          background-color: #f0f8ff;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .form-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .form {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .input, .textarea {
          width: 100%;
          padding: 10px;
          border: 2px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        .textarea {
          height: 120px;
        }

        .submit-btn {
          padding: 12px 20px;
          background-color: #ff4b1f;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #e43f00;
          transform: scale(1.05);
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
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, #ffe5e0, #ffafbd);
          top: 15%;
          left: -10%;
          animation-delay: 0s;
        }

        .shape2 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, #daf7dc, #a0e4ff);
          bottom: 10%;
          right: -15%;
          animation-delay: 10s;
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          .button, .submit-btn {
            font-size: 1rem;
            padding: 12px 24px;
          }

          .form-container {
            padding: 20px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .input, .textarea {
            font-size: 1rem;
          }

          .contact-section {
            padding: 40px 10px;
          }

          .backgroundShape.shape1 {
            width: 350px;
            height: 350px;
            top: 10%;
          }

          .backgroundShape.shape2 {
            width: 400px;
            height: 400px;
            bottom: 5%;
          }
        }
      `}</style>
    </div>
  );
}
