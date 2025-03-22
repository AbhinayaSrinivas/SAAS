import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// side arrows
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./App.css";

function FrontPage({ selectedImage, handleNext, handlePrev }) {
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
      </div>

      {/* Image Preview Section */}
      <div className="image-container">
        {selectedImage ? (
          <>
            <ArrowBackIosIcon className="arrow" onClick={handlePrev} />
            <img src={selectedImage} alt="Selected" className="preview-image" />
            <ArrowForwardIosIcon className="arrow" onClick={handleNext} />
          </>
        ) : (
          <p className="text">Your selected image will be displayed here</p>
        )}
      </div>
    </div>
  );
}

export default FrontPage;
