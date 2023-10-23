// Story.js
import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import WeightConverter from './WeightConverter';

function Story({ showStory, xItem, yItem, zItem, ukus, customName}) {
  return (
    showStory && (
      <>
        <p>
          It was <TemperatureConverter ukus={ukus} temperature={94} /> outside, so {xItem} went for a walk. When they
           got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {customName || 'Bob'} saw the whole thing, but was not surprised — {xItem} weighs <WeightConverter ukus={ukus} weight={300} />,
           and it was a hot day.
        </p>
      </>
    )
  );
}

export default Story;
