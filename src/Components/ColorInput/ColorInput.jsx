// src/Components/ColorInput/ColorInput.jsx
import React from "react";

function ColorInput({ value, onChange }) {
  const handleTextChange = (event) => {
    onChange(event.target.value);
  };

  const handleColorChange = (event) => {
    onChange(event.target.value);
  };

  //const handleColorContrastChange = (event) => {onChange(event.target.value);};

  return (
    <div>
      <input type="text" value={value} onChange={handleTextChange} />
      <input type="color" value={value} onChange={handleColorChange} />
    </div>
  );
}

export default ColorInput;
