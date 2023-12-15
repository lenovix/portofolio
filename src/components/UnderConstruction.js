import React from 'react';
import './UnderConstruction.css';
import underConstruction from '../images/construction-icon.png';

const UnderConstruction = () => {
  return (
    <div className="under-construction-container">
      <div className="construction-content">
        <h1>Under Construction</h1>
        <p>
          Sorry, the page is currently under construction. I working hard to
          bring you something awesome!
        </p>
        <img src={underConstruction} alt="Under Construction" />
      </div>
    </div>
  );
};

export default UnderConstruction;
