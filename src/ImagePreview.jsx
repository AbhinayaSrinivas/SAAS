import React from "react";

const ImagePreview = ({ images, selectedIndex, handleNext, handlePrev }) => {
  if (selectedIndex === null) {
    return <p>Your selected image will be displayed here</p>;
  }

  return (
    <div className="image-preview-container">
      <button onClick={handlePrev} disabled={selectedIndex === 0}>⬅️</button>
      <img src={images[selectedIndex]} alt="Selected Preview" className="preview-image" />
      <button onClick={handleNext} disabled={selectedIndex === images.length - 1}>➡️</button>
    </div>
  );
};

export default ImagePreview;