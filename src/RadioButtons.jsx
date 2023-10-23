// RadioButtons.js
import React from 'react';

function RadioButtons({ ukus, onUnitChange }) {
  return (
    <div>
      <label htmlFor="us">US</label>
      <input
        type="radio"
        value="us"
        checked={ukus === "us"}
        onChange={onUnitChange}
      />
      <label htmlFor="uk">UK</label>
      <input
        type="radio"
        value="uk"
        checked={ukus === "uk"}
        onChange={onUnitChange}
      />
    </div>
  );
}

export default RadioButtons;
