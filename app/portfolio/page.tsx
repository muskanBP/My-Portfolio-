'use client';

import styles from '/styles/Home.module.css';
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


export default function Home() {
  // Animation Variants for Buttons
  const buttonHover = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-300 via-cyan-500 to-blue-700 text-white">
      <title>My Portfolio</title>

      {/* Header section */}
      <header className="text-gray-600 body-font w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              src="https://img.freepik.com/free-vector/butterfly-logo-design-gradient-colorful-illustration_483537-1355.jpg"
              alt="Butterfly Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-2xl font-bold">Butterfly</span>
          </div>
        </div>
      </header>

      {/* Hero section with Typewriter effect */}
      <section className="flex flex-col items-center text-center my-10">
        <h1 className="text-6xl font-bold">Welcome to My Portfolio!</h1>
        <h2 className="mt-4 text-3xl text-pink-200">
          <Typewriter
            options={{
              strings: ["AI DEVELOPER", "GENERATIVE AI", "CLOUD INITIATIVE AND WEB DEVELOPER"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </section>

      {/* Circle Buttons */}
      <div className="flex space-x-8 mt-10">
        <Link href="/aboutus">
          <motion.div
            className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-center text-xl font-semibold text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all shadow-lg"
            variants={buttonHover}
            whileHover="hover"
          >
            About Us
          </motion.div>
        </Link>

        <Link href="/contact">
          <motion.div
            className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-center text-xl font-semibold text-pink-600 hover:text-white hover:bg-pink-600 transition-all shadow-lg"
            variants={buttonHover}
            whileHover="hover"
          >
            Contact Us
          </motion.div>
        </Link>

        <Link href="/privacypolicy">
          <motion.div
            className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-center text-xl font-semibold text-purple-600 hover:text-white hover:bg-purple-600 transition-all shadow-lg"
            variants={buttonHover}
            whileHover="hover"
          >
            Privacy Policy
          </motion.div>
        </Link>
      </div>

      {/* Typewriter Section */}
      <section className="flex flex-col items-center my-10 text-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://img.freepik.com/free-vector/butterfly-logo-design-gradient-colorful-illustration_483537-1355.jpg"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A New Generation</h1>
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-pink-500">
            <Typewriter
              options={{
                strings: ["AI DEVELOPER", "GENERATIVE AI", "CLOUD INITIATIVE AND WEB DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        
        <p className="mb-8 leading-relaxed text-sm text-black">
          **Introduction to AI Cloud Generative from the Governor's House**
          Welcome to the innovative world of AI Cloud Generative, an initiative launched to harness the power of artificial intelligence...
        </p>

        {/* Subscribe Section */}
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">NEWSETTLER</label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-pink-200 border border-gray-300 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
            />
          </div>
          
          <a href="https://www.youtube.com/@m.akoreandramachannel1022">
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
              SUBSCRIBE
            </button>
          </a>
        </div>
        <p className="text-sm mt-2 text-white mb-8 w-full">WELCOME TO THE REALITY.</p>

        {/* App Download Buttons */}
        <div className="flex space-x-4">
          <div className="flex">
            <button className="bg-yellow-300 inline-flex py-3 px-5 rounded-lg items-center hover:bg-sky-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
              <a href="https://www.youtube.com/@m.akoreandramachannel1022">
                <span className="ml-4 flex items-start flex-col leading-none text-red-500">
                  <span className="text-xs text-pink-600 mb-1">Subscribe My Channel</span>
                  <span className="title-font font-medium">Youtube</span>
                </span>
              </a>
            </button>
          </div>
          <button className="bg-yellow-300 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-sky-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <a href="https://play.google.com/store/apps/details?id=com.google.android.youtube&pcampaignid=web_share">
              <span className="ml-4 flex items-start flex-col text-fuchsia-700 leading-none">
                <span className="text-xs text-pink-600 mb-1">Download on the</span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </a>
          </button>
        </div>




{/* BLOG */}

<div className="container px-5 py-auto mx-auto mt-20 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500">
  <div className="relative flex justify-center items-center">
    {/* Big Circle Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 rounded-full shadow-lg p-16"></div>

    <div className="flex flex-wrap -m-4 relative z-10">
      {/* Box 1 */}
      <div className="p-4 md:w-1/3">
        <div className="bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          {/* Circular Image */}
          <div className="relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                 src="https://i.imgur.com/Sbo9Cjt_d.webp?maxwidth=520&shape=thumb&fidelity=high" 
                 alt="blog" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">TODO LIST</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">npm i stylish-gojo-todo-list</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NPX RUN START TODO LIST</h1>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="p-4 md:w-1/3">
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          <div className="relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                 src="https://i.imgur.com/Sbo9Cjt_d.webp?maxwidth=520&shape=thumb&fidelity=high" 
                 alt="blog" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">ATM</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">npm i gojos-atm</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NPX RUN START ATM</h1>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="p-4 md:w-1/3">
        <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-700 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          <div className="relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                 src="https://i.imgur.com/Sbo9Cjt_d.webp?maxwidth=520&shape=thumb&fidelity=high" 
                 alt="blog" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">CURRENCY</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">npm i gojo-currency-convertor</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NPX RUN START CURRENCY</h1>
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="p-4 md:w-1/3">
        <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-yellow-300 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          <div className="relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                 src="https://i.imgur.com/Sbo9Cjt_d.webp?maxwidth=520&shape=thumb&fidelity=high" 
                 alt="blog" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">CALCULATOR</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">npm i bpgojo_simple-calculator</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NPX RUN START CALCULATOR</h1>
          </div>
        </div>
      </div>

      {/* Box 5 */}
      <div className="p-4 md:w-1/3">
        <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          <div className="relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                 src="https://i.imgur.com/Sbo9Cjt_d.webp?maxwidth=520&shape=thumb&fidelity=high" 
                 alt="blog" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">GUESSING GAME</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">npm i gojosaturobp_cli-number-guessing</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NPX RUN START GUESSING GAME</h1>
          </div>
        </div>
      </div>

      {/* Box 6 */}
      <div className="p-4 md:w-1/3">
        <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          <div className="relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                 src="https://i.imgur.com/Sbo9Cjt_d.webp?maxwidth=520&shape=thumb&fidelity=high" 
                 alt="blog" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">RESUME</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NPX RUN START RESUME</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Feature Section */}

<section className="text-gray-500 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium text-white">Our Features</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We offer a variety of features and services that can help you create amazing projects with ease.</p>
    </div>

    <div className="flex flex-wrap -m-4">
      {/* Feature 1 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4h4m5 2a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">Easy to Use</h2>
            <p className="leading-relaxed">Our tools and components are built for ease of use, allowing you to jump into your project quickly and efficiently.</p>
          </div>
        </div>
      </div>
      
      {/* Feature 2 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 4h3l4 4-4 4h-3v4l-4-4 4-4z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">High Performance</h2>
            <p className="leading-relaxed">All of our features are optimized for performance, so you can build fast, high-performing applications with ease.</p>
          </div>
        </div>
      </div>
      
      {/* Feature 3 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-4l-2-2zm0 0v4h4M6 10h12v10H6z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">Customizable</h2>
            <p className="leading-relaxed">Our features are highly customizable to fit your needs, making it easier to create exactly what you're looking for.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Programming Languages Section */}

<section className="text-gray-500 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium text-white">Programming Languages</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore the various programming languages we work with to build powerful applications.</p>
    </div>

    <div className="flex flex-wrap -m-4">
      {/* Language 1 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h10" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">JavaScript</h2>
            <p className="leading-relaxed">JavaScript is a versatile language for both front-end and back-end development.</p>
          </div>
        </div>
      </div>
      
      {/* Language 2 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4v16h18V4H3zm16 12H5v-8h14v8z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">Python</h2>
            <p className="leading-relaxed">Python is a powerful language known for its readability and wide range of applications.</p>
          </div>
        </div>
      </div>
      
      {/* Language 3 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">Java</h2>
            <p className="leading-relaxed">Java is a robust, object-oriented language used for enterprise applications.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Development Tools Section */}

<section className="text-gray-500 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium text-white">Development Tools</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">These are the tools that help you build applications faster and more efficiently.</p>
    </div>

    <div className="flex flex-wrap -m-4">
      {/* Tool 1 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 11h-4V7l-5 5 5 5v-4h4V11z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">VS Code</h2>
            <p className="leading-relaxed">Visual Studio Code is a powerful code editor used by developers worldwide for coding and debugging.</p>
          </div>
        </div>
      </div>
      
      {/* Tool 2 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l5-5H5l5 5zm1-10V4h8v6h-8zM3 7h8V4H3z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">Git</h2>
            <p className="leading-relaxed">Git is a version control system that helps track code changes and collaborate with other developers.</p>
          </div>
        </div>
      </div>
      
      {/* Tool 3 */}
      <div className="p-4 md:w-1/3">
        <div className="flex border-2 border-gray-200 border-opacity-60 p-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          <div className="flex-shrink-0 text-3xl text-indigo-500">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5l7-7h-4v-4h-6v4H5l7 7z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="font-medium text-lg">Node.js</h2>
            <p className="leading-relaxed">Node.js is a JavaScript runtime built on Chrome's V8 engine, making it easy to build scalable server-side applications.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





        









 {/* our team*/}

 <section className="text-gray-600 body-font relative overflow-hidden rounded-full group shadow-lg hover:shadow-2xl transition-shadow duration-300
 bg-gradient-to-br from-green-50 to-blue-50 py-12">
  <div className="container mx-auto px-5">
    {/* Section Heading */}
    <div className="text-center w-full mb-8">
      {/* "OUR TEAM" Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-widest transition-transform transform hover:scale-110 hover:text-blue-700 duration-300">
        OUR TEAM
      </h1>
      
      {/* "The Creative Innovators" Subheading */}
      <h2 className="text-2xl font-medium text-gray-700 bg-slate-100 inline-block py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-blue-100 hover:text-blue-800 duration-300">
        The Creative Innovators
      </h2>
      
      {/* Description Text */}
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-6 text-gray-700">
        Welcome to our team of visionaries and trailblazers! At Creative Innovators, we believe that the future is shaped by imagination and collaboration. Each member brings a wealth of experience, passion, and expertise to transform bold ideas into reality.
      </p>
    </div>
  </div>
</section>

    <div className="flex mt-10 flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-sky-500 hover:grayscale " src=" https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_640.jpg "/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">JENNY EMILY</h2>
            <h3 className="text-white text-xl text-bold mb-3"> <Typewriter
        options={{
          strings: ["LEAD DEVELOPER"],
          autoStart: true,
          loop: true,
        }}
      /> </h3>
            <p className="mb-4 text-white"> Innovative lead developer with a passion for building scalable solutions and mentoring teams to achieve excellence. </p>
            <span className="inline-flex">
              <a className="text-pink-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-blue-800">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-sky-500 hover:grayscale " src=" https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=1024x1024&w=is&k=20&c=J0E4zF6xZCAaqSbSC3oK76pogD3XekWpW0Rl4OJUonE= "/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">AlPHA KEF</h2>
            <h3 className="text-yellow-500 text-xl mb-3">   <Typewriter
        options={{
          strings: ["PROJECT MANAGER"],
          autoStart: true,
          loop: true,
        }}
      /></h3>
            <p className="mb-4 text-white"> Dynamic lead developer specializing in cutting-edge technologies and driving project success through collaboration and technical expertise. </p>
            <span className="inline-flex">
              <a className="text-pink-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-blue-800">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-sky-500  hover:grayscale " src="https://media.istockphoto.com/id/1446645456/photo/portrait-of-young-beautiful-business-woman-in-the-office.jpg?s=612x612&w=0&k=20&c=hJmiiKNGnclFM8JMqZcAPnNSc4Wo__hnSVaGYeCVG5M=  "/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-black">ANNA ELSA</h2>
            <h3 className="text-pink-500 text-xl mb-3">  <Typewriter
        options={{
          strings: ["DESIGNER"],
          autoStart: true,
          loop: true,
        }}
      /> </h3>
            <p className="mb-4 text-white"> Creative designer with a keen eye for detail, dedicated to crafting visually stunning and user-centered experiences. </p>
            <span className="inline-flex">
              <a className="text-pink-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-blue-800">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-sky-600 hover:grayscale" src=" https://cdn.pixabay.com/photo/2016/11/23/00/32/woman-1851464_1280.jpg  "/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">HENRY LEE</h2>
            <h3 className="text-rose-800 text-xl mb-3">  <Typewriter
        options={{
          strings: ["IDEAS AND LUCK"],
          autoStart: true,
          loop: true,
        }}
      /> </h3>
            <p className="mb-4 text-white"> A visionary thinker who blends innovative ideas with a touch of luck to create unique solutions and seize unexpected opportunities. </p>
            <span className="inline-flex">
              <a className="text-pink-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-blue-800">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  


    <div className="container mt-24">
      <h1 className="heading text-white">HELLO WORLD!</h1>
      <button className="button">nice to meet you!</button>
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

      {/* Add background shapes */}
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
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .heading {
          font-size: 2rem;
          color: #f2a900;
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
  

    <section className="text-gray-600 body-font relative w-full mt-28">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" title="map"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-sky-500 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">PLEASE FIll THIS FORM IF YOU HAVE ANY QUERIES OR COMPLAINS OR IF YOU HAVE ANY MESSAGE FOR US </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">SUBMIT</button>
      
    </div>
  </div>
</section>

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4 py-10">

      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">NewSletter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <a href = " https://github.com/Nikkicyber  ">
       
     <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">SUBSCRIBE NOW</button>
       </a>
        <p className="text-white text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Life Goes On
          <br className="lg:block hidden"/>2025 LISA Bp
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-pink-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-orange-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-indigo-800">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Artificial Intelligence
         —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@LisaBp</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Copyright@ All Right Reserved.</span>
    </div>







    
  









  </div>

</footer>





  

  </section>


  
  


      
    </main>
  );
}
