import Image from 'next/image';
import React from 'react';
import heroImage from '../assets/hero.png';

import Education from './edu';
import Project from './project';
import VideoResume from './vresume';
import Footer from './footer';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Subtle Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-black opacity-[0.03] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gray-900 opacity-[0.02] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/80 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm font-bold tracking-[0.3em] text-black">AMIT KUMAR</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#education" className="hover:text-black transition-colors">Education</a>
              <a href="#projects" className="hover:text-black transition-colors">Projects</a>
              <a href="#resume" className="hover:text-black transition-colors">Resume</a>
            </div>
          </div>
        </nav>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 py-20 md:pt-32 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left Content */}
            <div className="space-y-8 order-2 md:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-black/10 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold tracking-wider text-gray-700">AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] tracking-tight">
                  Software
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
                    Engineer
                  </span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-black"></div>
                  <p className="text-lg font-medium text-gray-600">Amit Kumar</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Building scalable, efficient, and robust software solutions. Specialized in backend systems, data structures, and algorithms with a passion for system design and performance optimization.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/resume.pdf"
                  download="Amit_Kumar_Resume.pdf"
                  className="group relative px-8 py-4 bg-black text-white font-bold text-sm tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">DOWNLOAD RESUME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-black text-black font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                >
                  VIEW PROJECTS
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-black">4+</div>
                  <div className="text-sm text-gray-500 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">B.Tech</div>
                  <div className="text-sm text-gray-500 mt-1">CS (AI & DS)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">2025</div>
                  <div className="text-sm text-gray-500 mt-1">Graduate</div>
                </div>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-black/5 to-gray-900/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-tl from-black/5 to-gray-900/5 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>

                {/* Image Container */}
                <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <Image
                    src={heroImage}
                    alt="Amit Kumar"
                    layout="fill"
                    objectFit="cover"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white border-4 border-gray-100 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="text-xs font-semibold text-gray-500 mb-1">BASED IN</div>
                  <div className="text-lg font-bold text-black">India 🇮🇳</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-semibold text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </div>

      <Education />
      <Project />
      <VideoResume />
      <Footer />
    </>
  );
};

export default Hero;
