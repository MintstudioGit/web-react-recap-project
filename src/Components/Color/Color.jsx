import React, { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({ color, deleteColor, updateColor }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedColor) => {
    updateColor(updatedColor);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <ColorForm
          initialColor={color}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => deleteColor(color.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
