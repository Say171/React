import React from 'react';

function RandomStoryGenerator({ showStory, xItem, yItem, zItem }) {
  return (
    <>
      <div>
        <button onClick={showStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 Fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          Bob saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}

export default RandomStoryGenerator;
