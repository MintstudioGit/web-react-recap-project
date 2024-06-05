// src/Components/ColorForm/ColorForm.jsx
import React, { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

function ColorForm({ addColor }) {
  const [colorHex, setColorHex] = useState("#000000");
  const [role, setRole] = useState("");
  const [contrast, setContrast] = useState("#000000");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Refreshing the Page
    const newColor = {
      id: nanoid(),
      hex: colorHex,
      contrastText: contrast,
      role: role,
    }; // New Card added to the List
    addColor(newColor); // Submit Button to Add a Color
    setColorHex("#000000"); // Reset the input after submission
    setRole(""); // Reset the role input after submission
    setContrast("#000000"); // Reset the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <ColorInput value={colorHex} onChange={setColorHex} />
      <ColorInput value={contrast} onChange={setContrast} />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Enter role"
      />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default ColorForm;
