import "./App.css";
import React from "react";

const ImageCard = ({ imageUrl, onDelete, onClick }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt="Uploaded" className="image" onClick={onClick} />
      <button className="delete-btn" onClick={onDelete}>
        ✖
      </button>
      {/* Add a "Select" button */}
      <button className="select-btn" onClick={onClick}>
        Select
      </button>
    </div>
  );
};

export default ImageCard;