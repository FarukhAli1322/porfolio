"use client";
import { createContext } from "react";
import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div id="education" className="relative bg-white text-black py-32 px-6 lg:px-20">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-black"></div>
          <span className="text-sm font-bold tracking-[0.3em] text-gray-500">BACKGROUND</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
          Education & Strengths
        </h2>
      </div>

      {/* Education Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

        {/* University */}
        <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-1 h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-black">MAHARAJA AGRASEN INSTITUTE</h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">2021 - 2023</p>
              </div>
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <span className="text-xl">🎓</span>
              </div>
            </div>
            <p className="text-lg font-medium text-gray-700">
              Master's of Computer Applications
            </p>
            <p className="text-sm text-gray-600">
              Specialization: Data Structure & DBMS
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-2">KEY COURSEWORK</p>
              <div className="flex flex-wrap gap-2">
                {['DSA', 'Web Development', 'Machine Learning'].map((course, i) => (
                  <span key={i} className="px-3 py-1 bg-black/5 text-xs font-semibold text-gray-700 rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-1 h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-black">KURUKSHETRA UNIVERSITY</h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">2018 - 2021</p>
              </div>
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <span className="text-xl">📚</span>
              </div>
            </div>
            <p className="text-lg font-medium text-gray-700">
              Bachelor of computer applications
            </p>
            <p className="text-sm text-gray-600">
              Foundation in Web Development & Mathematics
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-2">KEY SUBJECTS</p>
              <div className="flex flex-wrap gap-2">
                {['Web Development'].map((subject, i) => (
                  <span key={i} className="px-3 py-1 bg-black/5 text-xs font-semibold text-gray-700 rounded-full">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Strengths Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] w-12 bg-black"></div>
          <span className="text-sm font-bold tracking-[0.3em] text-gray-500">CORE COMPETENCIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Adaptability */}
          <div className="group relative bg-black text-white p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold">Adaptability & Fast Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Highly adaptable with the ability to quickly learn and implement new technologies. Excel in dynamic environments by grasping concepts efficiently and applying them effectively.
              </p>
            </div>
          </div>

          {/* Problem-Solving */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                <span className="text-2xl group-hover:grayscale-0 transition-all">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Problem-Solving Mindset</h3>
              <p className="text-gray-700 leading-relaxed">
                Tackle complex problems with logical and creative solutions. Strong foundation in data structures and algorithms enables effective optimization and elegant problem-solving.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
