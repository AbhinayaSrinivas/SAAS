import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./App.css";

function FrontPage({ selectedImage, handleNext, handlePrev }) {
  const [selection, setSelection] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState([]); // Store all selected areas

  // Handle mouse down event (start of drag)
  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setIsDragging(true);
    setSelection({ x1: offsetX, y1: offsetY, x2: offsetX, y2: offsetY });
  };

  // Handle mouse move event (during drag)
  const handleMouseMove = (e) => {
    if (isDragging) {
      const { offsetX, offsetY } = e.nativeEvent;
      setSelection((prev) => ({ ...prev, x2: offsetX, y2: offsetY }));
    }
  };

  // Handle mouse up event (end of drag)
  const handleMouseUp = () => {
    setIsDragging(false);
    // Add the current selection to the list of selected areas
    setSelectedAreas((prev) => [...prev, selection]);
  };

  // Calculate the position and size of a selected area
  const getSelectionStyle = (area) => {
    const { x1, y1, x2, y2 } = area;
    const left = Math.min(x1, x2);
    const top = Math.min(y1, y2);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    return {
      position: "absolute",
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
      border: "2px solid red",
      pointerEvents: "none", // Ensure the selection box doesn't interfere with mouse events
    };
  };

  // Clear all selected areas
  const clearSelections = () => {
    setSelectedAreas([]);
  };

  return (
    <div className="frontpage">
      {/* Button and Input Section */}
      <div className="inputs">
        <Button variant="contained" size="small" sx={{ height: 40 }}>
          Save Annotations
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" size="small" sx={{ height: 40 }}>
          Undo
        </Button>
        &nbsp;&nbsp;
        <TextField
          placeholder="Enter your comments"
          size="small"
          variant="outlined"
          sx={{ height: 40 }}
        />
        {/* Button to clear all selections */}
        <Button
          variant="contained"
          size="small"
          sx={{ height: 40, marginLeft: "10px" }}
          onClick={clearSelections}
        >
          Clear Selections
        </Button>
      </div>

      {/* Image Preview Section */}
      <div className="image-container">
        {selectedImage ? (
          <>
            <div
              style={{ position: "relative" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="preview-image"
                draggable={false} // Prevent image dragging
              />
              {/* Render all selected areas */}
              {selectedAreas.map((area, index) => (
                <div key={index} style={getSelectionStyle(area)} />
              ))}
              {/* Render the current selection during drag */}
              {isDragging && <div style={getSelectionStyle(selection)} />}
            </div>
            {/* Arrow container */}
            <div className="arrow-container">
              <ArrowBackIosIcon className="arrow" onClick={handlePrev} />
              <ArrowForwardIosIcon className="arrow" onClick={handleNext} />
            </div>
          </>
        ) : (
          <p className="text">Your selected image will be displayed here</p>
        )}
      </div>
    </div>
  );
}

export default FrontPage;