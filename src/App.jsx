import React, { useState, useEffect } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  // Initialize colors state from localStorage, or use initialColors if none found
  const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem("colors");
    return savedColors ? JSON.parse(savedColors) : initialColors;
  });

  // Save colors to localStorage whenever colors state changes
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

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
        {colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            deleteColor={deleteColor}
            updateColor={updateColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
