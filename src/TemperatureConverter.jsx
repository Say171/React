// TemperatureConverter.js
import React from 'react';

function convertToCentigrade(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function TemperatureConverter({ ukus, temperature }) {
  const convertedTemperature = ukus === "us" ? temperature : convertToCentigrade(temperature).toFixed(2);

  return (
    <nobr>
      {ukus === "us" ? `${temperature} Fahrenheit` : `${convertedTemperature} Centigrade`}
    </nobr>
  );
}

export default TemperatureConverter;
