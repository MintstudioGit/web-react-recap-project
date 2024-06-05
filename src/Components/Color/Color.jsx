import "./Color.css";
import "../ColorForm/ColorForm";
import "../ColorInput/ColorInput";

export default function Color({ color, deleteColor }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <button className="delete-button" onClick={() => deleteColor(color.id)}>
        Delete
      </button>
    </div>
  );
}
