import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { FiRefreshCcw } from "react-icons/fi"; // Import refresh icon
import "./ImageGallery.css";
import ImagePreview from "./ImagePreview";

const ImageGallery = ({ images, onImageSelect, onImageUpload, selectedIndex, handleNext, handlePrev }) => {
  const [localImages, setLocalImages] = useState(images || []); // Local state for images (fallback to prop)

  // Handle image deletion
  const handleDelete = (index) => {
    const updatedImages = localImages.filter((_, i) => i !== index);
    setLocalImages(updatedImages);
    if (selectedIndex === index) {
      onImageSelect(null); // Notify parent that no image is selected
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...localImages, imageUrl];
      setLocalImages(updatedImages);
      onImageUpload(updatedImages); // Notify parent of the updated images
      if (selectedIndex === null) {
        onImageSelect(0); // Select the first image if none is selected
      }
    }
  };

  // Handle refresh (clear all images)
  const handleRefresh = () => {
    setLocalImages([]);
    onImageSelect(null); // Notify parent that no image is selected
    onImageUpload([]); // Notify parent that images are cleared
  };

  return (
    <div className="gallery-container">
      {/* Upload & Refresh Section */}
      <div className="upload-container">
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose Files
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
          className="file-input"
        />
        <button className="refresh-btn" onClick={handleRefresh}>
          <FiRefreshCcw size={20} />
        </button>
      </div>

      {/* Image Gallery */}
      <div className="image-gallery">
        {localImages.map((image, index) => (
          <ImageCard
            key={index}
            imageUrl={image}
            onDelete={() => handleDelete(index)}
            onClick={() => onImageSelect(index)} // Use the passed onImageSelect prop
          />
        ))}
      </div>

      {/* Pass props to ImagePreview */}
      <ImagePreview
        images={localImages}
        selectedIndex={selectedIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default ImageGallery;