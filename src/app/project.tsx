import React from 'react';

const projects = [
  {
    name: 'ConnX.in',
    description: 'A video-based freelance platform where freelancers can showcase their work through short videos, making it easier for clients to discover and hire them.',
    features: [
      'Freelancers upload short video portfolios',
      'Clients can directly connect from posts',
      'Video engagement boosts visibility for freshers',
      'Secure in-app messaging & hiring process',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'WebRTC'],
    link: 'https://connx.in',
  },
  {
    name: 'Campus Reveal',
    description: 'An anonymous college review platform where students can share their experiences and opinions without revealing their identity.',
    features: [
      'Users can post college reviews anonymously',
      'Secure and spam-free environment',
      'Real-time upvotes and comments',
      'Helps prospective students make informed decisions',
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://campusreveal.vercel.app',
  },
  {
    name: 'AnnouncePro',
    description: 'A Python-based automated announcement management system that delivers announcements accurately and runs 24/7.',
    features: [
      'Automates university-wide announcements',
      'Runs continuously 24x7 without manual intervention',
      'Scheduled notifications and real-time updates',
      'Desktop-based application with intuitive UI',
    ],
    techStack: ['Python', 'Tkinter', 'SQLite', 'Windows Services'],
    link: 'https://announcepro.vercel.app/',
  },
  {
    name: 'Recommender System',
    description: 'An AI-powered content-based recommendation system that suggests relevant content based on user behavior and interests.',
    features: [
      'Uses NLP techniques for content analysis',
      'TF-IDF vectorization for similarity computation',
      'User-friendly interface built with Streamlit',
      'Predicts recommendations based on user preferences',
    ],
    techStack: ['Python', 'TensorFlow', 'Flask', 'Streamlit'],
    link: 'https://github.com/amitkumar2308/Content-based-recommendation',
  },
];

const Project = () => {
  return (
    <div id="projects" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32 px-6 lg:px-20">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-black"></div>
          <span className="text-sm font-bold tracking-[0.3em] text-gray-500">PORTFOLIO</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          A collection of projects showcasing my expertise in full-stack development, system design, and problem-solving.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            <div className="p-8 space-y-6">
              {/* Project Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black group-hover:text-black transition-colors">
                    {project.name}
                  </h3>
                  <div className="h-[2px] w-12 bg-gray-300 group-hover:bg-black group-hover:w-20 transition-all duration-300 mt-2"></div>
                </div>
                <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:rotate-45 transition-all duration-300">
                  <span className="text-lg group-hover:text-white">→</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              {project.features && (
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-wider text-gray-500">KEY FEATURES</p>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <p className="text-xs font-bold tracking-wider text-gray-500">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/5 hover:bg-black hover:text-white text-xs font-semibold text-gray-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:gap-4 transition-all duration-300 group/link"
              >
                <span>VIEW PROJECT</span>
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <div className="inline-flex flex-col items-center gap-4 p-8 border-2 border-gray-200 hover:border-black transition-colors">
          <p className="text-sm font-bold tracking-wider text-gray-500">WANT TO SEE MORE?</p>
          <a
            href="https://github.com/amitkumar2308"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white font-bold text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            VISIT MY GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
