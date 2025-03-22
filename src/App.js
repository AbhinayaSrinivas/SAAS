import React, { useState } from 'react';
import './App.css';
import SideBar from './SideBar';
import FrontPage from './FrontPage';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle image selection
  const handleImageSelect = (index) => {
    setSelectedIndex(index);
    setSelectedImage(images[index]);
  };

  // Handle image upload
  const handleImageUpload = (newImages) => {
    setImages(newImages);
  };

  // Handle next image
  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  // Handle previous image
  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  return (
    <div className="App">
      <div>
        <SideBar
          images={images}
          onImageSelect={handleImageSelect}
          onImageUpload={handleImageUpload}
        />
      </div>
      <div>
        <FrontPage
          selectedImage={selectedImage}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default App;