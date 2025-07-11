// src/App.tsx
import React, { useState, useEffect } from 'react';
import BookCover from './components/BookCover';
import BookPages from './components/BookPages';
import FlippingPage from './components/FlippingPage';
import { portfolioSections } from './data/portfolioSections'; // Import your content data

// Book Component (Main Container)
const App = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<string | null>(null); // Explicit type for flipDirection
  const [flippingPageContentFront, setFlippingPageContentFront] = useState<React.ReactNode | null>(null); // Explicit type for ReactNode
  const [flippingPageContentBack, setFlippingPageContentBack] = useState<React.ReactNode | null>(null); // Explicit type for ReactNode

  const animationDuration = 1000;

  const handleOpenBook = () => {
    setIsBookOpen(true);
    setTimeout(() => setShowContent(true), 1000);
  };

  const handleNextPage = () => {
    if (currentPageIndex < portfolioSections.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setFlippingPageContentFront(portfolioSections[currentPageIndex].rightContent);
      setFlippingPageContentBack(portfolioSections[currentPageIndex + 1].leftContent);

      setTimeout(() => {
        setCurrentPageIndex((prevIndex) => prevIndex + 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setFlippingPageContentFront(null);
        setFlippingPageContentBack(null);
      }, animationDuration);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setFlippingPageContentFront(portfolioSections[currentPageIndex].leftContent);
      setFlippingPageContentBack(portfolioSections[currentPageIndex - 1].rightContent);

      setTimeout(() => {
        setCurrentPageIndex((prevIndex) => prevIndex - 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setFlippingPageContentFront(null);
        setFlippingPageContentBack(null);
      }, animationDuration);
    }
  };

  // Styles for the book opening and page flip animations
  const bookAnimationStyles = `
    /* Initial book opening animation */
    @keyframes openBook {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(-180deg); }
    }

    .book-cover-open {
      animation: openBook 1.5s forwards;
    }

    /* Content fade-in after book opens */
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    .fade-in-content {
      animation: fadeIn 1s ease-in forwards;
      animation-delay: 1s; /* Start fading in after book opens */
      opacity: 0; /* Initially hidden */
    }

    /* Page Flip Animations */
    .page-flip-container {
      position: absolute;
      top: 0;
      width: 50%; /* Half the book width */
      height: 100%;
      transform-style: preserve-3d;
      pointer-events: none; /* Allow clicks to pass through */
      z-index: 30; /* Above regular pages */
    }

    /* Positioning and origin based on flip direction */
    .page-flip-container.next {
      right: 0; /* Position over the right page */
      transform-origin: left center; /* Rotate from the left edge of this half-page */
    }

    .page-flip-container.prev {
      left: 0; /* Position over the left page */
      transform-origin: right center; /* Rotate from the right edge of this half-page */
    }

    .page-flip-front, .page-flip-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden; /* For Safari */
      background-color: white; /* Match page color */
      padding: 2rem; /* Match page padding */
      box-sizing: border-box;
      box-shadow: 0 0 15px rgba(0,0,0,0.2); /* Soft shadow for depth */
      overflow: hidden; /* Hide overflowing content during flip */
    }

    /* Border radius based on flip direction */
    .page-flip-front.next {
      border-radius: 0 0.5rem 0.5rem 0; /* Right edge rounded */
    }
    .page-flip-back.next {
      transform: rotateY(180deg);
      border-radius: 0.5rem 0 0 0.5rem; /* Left edge rounded */
    }

    .page-flip-front.prev {
      border-radius: 0.5rem 0 0 0.5rem; /* Left edge rounded */
    }
    .page-flip-back.prev {
      transform: rotateY(-180deg); /* Rotate -180 to face correctly when parent is at 180 */
      border-radius: 0 0.5rem 0.5rem 0; /* Right edge rounded */
    }


    /* Animation keyframes */
    .page-flip-container.flipping.next { /* Apply animation to the container */
      animation: flipNext ${animationDuration / 1000}s forwards ease-in-out;
    }

    .page-flip-container.flipping.prev { /* Apply animation to the container */
      animation: flipPrev ${animationDuration / 1000}s forwards ease-in-out;
    }

    @keyframes flipNext {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(-180deg); }
    }

    @keyframes flipPrev {
      0% { transform: rotateY(0deg); } /* Start from flat */
      100% { transform: rotateY(180deg); } /* Flip to 180 degrees */
    }
  `;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 font-inter text-gray-900">
      <style>{bookAnimationStyles}</style>

      {/* Book Container */}
      <div
        className={`relative w-full max-w-[1200px] h-[600px] sm:h-[750px] bg-gray-200 rounded-lg shadow-2xl transition-all duration-1000 transform-gpu ${
          isBookOpen ? 'scale-105' : ''
        }`}
        style={{ perspective: '1500px' }}
      >
        {/* Front Cover */}
        {!isBookOpen && (
          <BookCover handleOpenBook={handleOpenBook} />
        )}

        {/* Inner Book Pages */}
        {isBookOpen && (
          <BookPages
            currentPageIndex={currentPageIndex}
            portfolioSections={portfolioSections}
            showContent={showContent}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            isFlipping={isFlipping}
          />
        )}

        {/* Page Flipping Element (rendered on top during animation) */}
        {isFlipping && (
          <FlippingPage
            flipDirection={flipDirection}
            flippingPageContentFront={flippingPageContentFront}
            flippingPageContentBack={flippingPageContentBack}
          />
        )}
      </div>
    </div>
  );
};

export default App;