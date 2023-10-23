import React from 'react';

function RadioButtons({ ukus, setUkus }) {
  return (
    <div>
      <label htmlFor="us">US</label>
      <input
        type="radio"
        value="us"
        checked={ukus === "us"}
        onChange={() => setUkus("us")}
      />
      <label htmlFor="uk">UK</label>
      <input
        type="radio"
        value="uk"
        checked={ukus === "uk"}
        onChange={() => setUkus("uk")}
      />
    </div>
  );
}

export default RadioButtons;
