import React from 'react';

function CustomNameInput() {
  return (
    <div>
      <label htmlFor="customname">Enter custom name:</label>
      <input
        type="text"
        placeholder=""
        // You may add an onChange handler here to capture the custom name if needed.
      />
    </div>
  );
}

export default CustomNameInput;
