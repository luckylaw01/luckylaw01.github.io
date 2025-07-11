// src/components/BookPages.jsx
import React from 'react';
import Page from './Page';

const BookPages = ({ currentPageIndex, portfolioSections, showContent, handlePrevPage, handleNextPage, isFlipping }) => (
  <div className={`flex h-full rounded-lg overflow-hidden ${showContent ? 'opacity-100' : 'opacity-0'} ${isFlipping ? 'invisible' : ''}`}>
    {/* Left Page */}
    <Page
      content={portfolioSections[currentPageIndex]}
      pageNumber={currentPageIndex * 2 + 1}
      isLeftPage={true}
    />

    {/* Right Page */}
    <Page
      content={portfolioSections[currentPageIndex]}
      pageNumber={currentPageIndex * 2 + 2}
      isLeftPage={false}
    />

    {/* Navigation Buttons */}
    <div className="absolute inset-y-0 left-0 flex items-center">
      <button
        onClick={handlePrevPage}
        disabled={currentPageIndex === 0 || isFlipping}
        className={`bg-gray-700 text-white p-2 rounded-r-full shadow-lg transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500
          ${currentPageIndex === 0 || isFlipping ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center">
      <button
        onClick={handleNextPage}
        disabled={currentPageIndex === portfolioSections.length - 1 || isFlipping}
        className={`bg-gray-700 text-white p-2 rounded-l-full shadow-lg transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500
          ${currentPageIndex === portfolioSections.length - 1 || isFlipping ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

export default BookPages;
