import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm font-bold tracking-[0.3em]">AMIT KUMAR</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Development Engineer passionate about building scalable solutions and solving complex problems.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.2em] mb-4">QUICK LINKS</h3>
            <div className="space-y-3">
              <a href="#education" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Education
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#resume" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Video Resume
              </a>
              <a href="/resume.pdf" download className="block text-gray-400 hover:text-white transition-colors text-sm">
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.2em] mb-4">GET IN TOUCH</h3>
            <a
              href="mailto:amitk.developer23@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <FaEnvelope className="text-sm" />
              </div>
              <span className="text-sm">amitk.developer23@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-between gap-8 py-8 border-t border-white/10">
          <div className="flex gap-4">
            <a
              href="https://leetcode.com/amitk2308"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="LeetCode"
            >
              <SiLeetcode className="text-lg" />
            </a>
            <a
              href="https://github.com/amitkumar2308"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/amitkumar-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://www.youtube.com/@thejuniorengineer2308"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="YouTube"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Amit Kumar. All rights reserved.
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xs text-gray-600 tracking-wider">
            DESIGNED & DEVELOPED WITH PASSION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
