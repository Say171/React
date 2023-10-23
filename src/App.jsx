import React, { useState } from 'react';
import MakeStory from './comp/MakeStory';
import RadioButtons from './comp/RadioButtons';
import Name from './comp/Name';

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [ukus, setUkus] = useState("us");

  const generateRandomStory = () => {
    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away",
    ];

    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));
    setShowStory(true);
  };

  return (
    <>
      <Name />
      <RadioButtons ukus={ukus} setUkus={setUkus} />
      <MakeStory showStory={generateRandomStory} xItem={xItem} yItem={yItem} zItem={zItem} />
    </>
  );
}
