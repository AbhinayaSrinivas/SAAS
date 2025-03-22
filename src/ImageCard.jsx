import "./App.css";
import React from "react";

const ImageCard = ({ imageUrl, onDelete }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt="Uploaded" className="image" imageCard/>
      <button className="delete-btn" onClick={onDelete}>✖</button>
    </div>
  );
};

export default ImageCard;