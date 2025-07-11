// src/components/BookCover.jsx
import React from 'react';

const BookCover = ({ handleOpenBook }) => (
  <div
    className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-900 rounded-lg flex flex-col items-center justify-center text-white p-8 z-20 transform-gpu shadow-2xl"
    style={{ transformOrigin: 'left center', transition: 'transform 1.5s ease-in-out' }}
  >
    <svg className="w-24 h-24 sm:w-32 sm:h-32 text-white mb-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-wide">
      My Digital Portfolio
    </h1>
    <p className="text-lg sm:text-xl text-center mb-8 opacity-90">
      A Curated Collection of My Work
    </p>
    <button
      onClick={handleOpenBook}
      className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
    >
      Open Book
    </button>
  </div>
);

export default BookCover;
