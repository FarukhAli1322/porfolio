import React from "react";
import Image from "next/image";

const VResume = () => {
  return (
    <div id="resume" className="relative bg-white text-black py-32 px-6 lg:px-20">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="h-[2px] w-12 bg-black"></div>
          <span className="text-sm font-bold tracking-[0.3em] text-gray-500">VIDEO INTRODUCTION</span>
          <div className="h-[2px] w-12 bg-black"></div>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
          Video Resume
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Get to know me better through this brief introduction showcasing my journey, skills, and aspirations.
        </p>
      </div>

      {/* Video Container */}
      <div className="max-w-5xl mx-auto">
        <div className="group relative bg-gradient-to-br from-gray-50 to-white p-4 border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl">

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Video Embed */}
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lxonQUjAjvM?si=coLqowhkvUCi24Ec"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="https://youtu.be/lxonQUjAjvM"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn px-8 py-4 bg-black text-white font-bold text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <span>WATCH ON YOUTUBE</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">↗</span>
          </a>
          <a
            href="/resume.pdf"
            download="Amit_Kumar_Resume.pdf"
            className="px-8 py-4 border-2 border-black text-black font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
          >
            DOWNLOAD PDF RESUME
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center p-6 border-2 border-gray-200 hover:border-black transition-colors">
          <div className="text-4xl font-black text-black mb-2">500+</div>
          <div className="text-sm text-gray-600">LeetCode Problems</div>
        </div>
        <div className="text-center p-6 border-2 border-gray-200 hover:border-black transition-colors">
          <div className="text-4xl font-black text-black mb-2">10+</div>
          <div className="text-sm text-gray-600">Technologies</div>
        </div>
        <div className="text-center p-6 border-2 border-gray-200 hover:border-black transition-colors">
          <div className="text-4xl font-black text-black mb-2">4+</div>
          <div className="text-sm text-gray-600">Major Projects</div>
        </div>
        <div className="text-center p-6 border-2 border-gray-200 hover:border-black transition-colors">
          <div className="text-4xl font-black text-black mb-2">100%</div>
          <div className="text-sm text-gray-600">Dedication</div>
        </div>
      </div>
    </div>
  );
};

export default VResume;
