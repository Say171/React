// StoryGenerator.js
import React, { useState } from 'react';
import NameInput from './NameInput';
import RadioButtons from './RadioButtons';
import Story from './Story';

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function generateRandomStory(setXItem, setYItem, setZItem, setShowStory, customName) {
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
}

export default function StoryGenerator() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [ukus, setUkus] = useState("us");
  const [customName, setCustomName] = useState(""); // 初期値を "Bob" に設定

  const handleCustomNameChange = (e) => {
    setCustomName(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUkus(e.target.value);
  };

  return (
    <>
      <NameInput customName={customName} onNameChange={handleCustomNameChange} />
      <RadioButtons ukus={ukus} onUnitChange={handleUnitChange} />
      <div>
        <button onClick={() => generateRandomStory(setXItem, setYItem, setZItem, setShowStory, customName)}>
          Generate random story
        </button>
      </div>
      <Story showStory={showStory} xItem={xItem} yItem={yItem} zItem={zItem} ukus={ukus} customName={customName} />
    </>
  );
}
