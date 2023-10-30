import React from 'react';

function convertToCentigrade(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9); // 四捨五入を削除
}

function TemperatureConverter({ ukus, temperature }) {
  const convertedTemperature = ukus === "us" ? temperature : convertToCentigrade(temperature);

  return (
    <nobr>
      {ukus === "us" ? `${temperature} Fahrenheit` : `${convertedTemperature} Centigrade`}
    </nobr>
  );
}

export default TemperatureConverter;
