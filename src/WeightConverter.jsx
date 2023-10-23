// WeightConverter.js
import React from 'react';

function convertToStone(pounds) {
  return (pounds / 14).toFixed(2);
}

function WeightConverter({ ukus, weight }) {
  const convertedWeight = ukus === "us" ? `${weight} pounds` : `${convertToStone(weight)} stone`;

  return (
    <nobr>
      {convertedWeight}
    </nobr>
  );
}

export default WeightConverter;
