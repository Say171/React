import React from 'react';

function convertToStone(pounds) {
  return Math.round(pounds / 14); // 四捨五入を削除
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
