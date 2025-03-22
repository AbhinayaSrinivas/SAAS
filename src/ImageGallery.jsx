import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import FrontPage from "./FrontPage";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  // Handle image selection
  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  // Handle next & previous navigation
  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="app-container">
      {/* Image Gallery (Left Section) */}
      <ImageGallery
        images={images}
        setImages={setImages}
        handleImageClick={handleImageClick}
      />

      {/* FrontPage (Right Section - Displays Selected Image) */}
      <FrontPage
        images={images}
        selectedIndex={selectedIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default App;
