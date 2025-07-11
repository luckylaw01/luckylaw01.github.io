// src/data/portfolioSections.js

// Define the structure for portfolio sections
export const portfolioSections = [
  {
    title: "Welcome",
    leftContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Hello!</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Welcome to my interactive portfolio. Here, you'll find a curated collection of my work, skills, and experiences, presented in a unique, book-like format.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-3">
          Use the navigation arrows to flip through the pages and discover more about my journey and projects.
        </p>
      </>
    ),
    rightContent: (
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src="https://placehold.co/200x200/A78BFA/ffffff?text=Your+Photo"
          alt="Your Profile"
          className="rounded-full w-28 h-28 sm:w-40 sm:h-40 object-cover shadow-lg mb-4"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/A78BFA/ffffff?text=Your+Photo"; }}
        />
        <p className="text-xl sm:text-2xl font-semibold text-indigo-700">Your Name</p>
        <p className="text-md sm:text-lg text-gray-600">Creative Developer</p>
      </div>
    ),
  },
  {
    title: "About Me",
    leftContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I am a passionate and innovative developer with a knack for creating engaging and user-friendly web experiences. My journey in development began with a curiosity for how things work, evolving into a dedication to building robust and beautiful applications.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-3">
          With a strong foundation in front-end technologies and a growing interest in full-stack development, I thrive on solving complex problems and bringing ideas to life through code.
        </p>
      </>
    ),
    rightContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">My Philosophy</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I believe in clean code, intuitive design, and continuous learning. Every project is an opportunity to explore new technologies and refine my craft. I am always eager to collaborate on exciting ventures and contribute to impactful solutions.
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mt-4">
          <li>Problem Solver</li>
          <li>Detail-Oriented</li>
          <li>Collaborative Spirit</li>
          <li>Lifelong Learner</li>
        </ul>
      </>
    ),
  },
  {
    title: "Projects",
    leftContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Alpha</h2>
        <img
          src="https://placehold.co/300x150/6D28D9/ffffff?text=Project+Alpha"
          alt="Project Alpha"
          className="w-full h-auto rounded-lg shadow-md mb-4"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x150/6D28D9/ffffff?text=Project+Alpha"; }}
        />
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-2">
          A dynamic web application built with React and Node.js, designed to streamline project management for small teams. Features include task tracking, user authentication, and real-time updates.
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
          <li>Tech Stack: React, Express, MongoDB, Tailwind CSS</li>
          <li>Key Features: User Authentication, CRUD operations, Responsive UI</li>
        </ul>
        <a href="#" className="text-indigo-600 hover:underline mt-3 inline-block">View Project</a>
      </>
    ),
    rightContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Beta</h2>
        <img
          src="https://placehold.co/300x150/4F46E5/ffffff?text=Project+Beta"
          alt="Project Beta"
          className="w-full h-auto rounded-lg shadow-md mb-4"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x150/4F46E5/ffffff?text=Project+Beta"; }}
        />
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-2">
          An interactive data visualization tool developed using D3.js, showcasing complex datasets in an easily digestible format. It allows users to filter and explore data points dynamically.
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
          <li>Tech Stack: D3.js, HTML, CSS, JavaScript</li>
          <li>Key Features: Interactive Charts, Data Filtering, Responsive Design</li>
        </ul>
        <a href="#" className="text-indigo-600 hover:underline mt-3 inline-block">View Project</a>
      </>
    ),
  },
  {
    title: "Skills",
    leftContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Frontend Expertise</h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed">
          <li>React.js, Next.js</li>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>HTML5, CSS3, Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>UI/UX Principles</li>
        </ul>
        <img
          src="https://placehold.co/250x120/10B981/ffffff?text=Frontend+Skills"
          alt="Frontend Skills"
          className="w-full h-auto rounded-lg shadow-md mt-4"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/250x120/10B981/ffffff?text=Frontend+Skills"; }}
        />
      </>
    ),
    rightContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Backend & Tools</h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed">
          <li>Node.js, Express.js</li>
          <li>MongoDB, PostgreSQL</li>
          <li>Git, GitHub</li>
          <li>RESTful APIs</li>
          <li>Basic Cloud (Firebase)</li>
        </ul>
        <img
          src="https://placehold.co/250x120/EF4444/ffffff?text=Backend+Skills"
          alt="Backend Skills"
          className="w-full h-auto rounded-lg shadow-md mt-4"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/250x120/EF4444/ffffff?text=Backend+Skills"; }}
        />
      </>
    ),
  },
  {
    title: "Contact",
    leftContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-indigo-600 hover:underline">your.email@example.com</a>
        </p>
        <p className="text-base sm:text-lg text-gray-700 mt-2">
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/yourprofile</a>
        </p>
      </>
    ),
    rightContent: (
      <>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
          I'm available for freelance work and full-time positions. If you have a project in mind or just want to say hello, don't hesitate to send a message.
        </p>
        <img
          src="https://placehold.co/250x120/F59E0B/ffffff?text=Contact+Me"
          alt="Contact Me"
          className="w-full h-auto rounded-lg shadow-md mt-4"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/250x120/F59E0B/ffffff?text=Contact+Me"; }}
        />
      </>
    ),
  },
];