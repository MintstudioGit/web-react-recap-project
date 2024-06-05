import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

function ColorForm({ addColor, initialColor, handleSave, handleCancel }) {
  const [colorHex, setColorHex] = useState("#000000");
  const [role, setRole] = useState("");
  const [contrast, setContrast] = useState("#000000");

  useEffect(() => {
    if (initialColor) {
      setColorHex(initialColor.hex);
      setRole(initialColor.role);
      setContrast(initialColor.contrastText);
    }
  }, [initialColor]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Refreshing the Page
    const newColor = {
      id: initialColor ? initialColor.id : nanoid(),
      hex: colorHex,
      contrastText: contrast,
      role: role,
    };
    if (handleSave) {
      handleSave(newColor);
    } else {
      addColor(newColor);
    }
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
      <button type="submit">{handleSave ? "Save Color" : "Add Color"}</button>
      {handleCancel && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default ColorForm;
