// src/components/FlippingPage.jsx
import React from 'react';

const FlippingPage = ({ flipDirection, flippingPageContentFront, flippingPageContentBack }) => (
  <div className={`page-flip-container ${flipDirection} flipping`}>
    <div className={`page-flip-front ${flipDirection}`}>
      {/* Content for the front of the flipping page */}
      {flippingPageContentFront}
    </div>
    <div className={`page-flip-back ${flipDirection}`}>
      {/* Content for the back of the flipping page */}
      {flippingPageContentBack}
    </div>
  </div>
);

export default FlippingPage;
