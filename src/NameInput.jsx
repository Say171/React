// NameInput.js
import React from 'react';

function NameInput({ customName, onNameChange }) {
  return (
    <div>
      <label htmlFor="customname">Enter custom name:</label>
      <input
        type="text"
        placeholder=""
        value={customName}
        onChange={onNameChange}
      />
    </div>
  );
}

export default NameInput;
