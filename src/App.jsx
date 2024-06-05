import React, { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const updateColor = (updatedColor) => {
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      <div className="flex-container">
        {colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              deleteColor={deleteColor}
              updateColor={updateColor}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
