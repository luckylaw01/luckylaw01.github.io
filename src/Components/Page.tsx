// src/components/Page.jsx
import React from 'react';

const Page = ({ content, pageNumber, isLeftPage }) => (
  <div className={`w-1/2 bg-white p-4 sm:p-8 flex flex-col justify-between ${isLeftPage ? 'border-r border-gray-300' : ''}`}>
    <div key={`page-content-${pageNumber}`}> {/* Key to re-render content */}
      <h3 className="text-xl font-semibold text-gray-500 mb-4 border-b pb-2 border-gray-200">
        {content.title}
      </h3>
      {isLeftPage ? content.leftContent : content.rightContent}
    </div>
    <div className={`text-xs sm:text-sm text-gray-400 mt-4 ${isLeftPage ? '' : 'text-right'}`}>
      Page {pageNumber}
    </div>
  </div>
);

export default Page;
