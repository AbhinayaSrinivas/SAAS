import "./App.css";
import LoopIcon from '@mui/icons-material/Loop';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ImageGallery from "./ImageGallery";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  function SideBar({ images, onImageSelect, onImageUpload }) {
    return (
      <div className="sidebar">
        <ImageGallery
          images={images}
          onImageSelect={onImageSelect}
          onImageUpload={onImageUpload}
        />
      </div>
    );
  }

export default SideBar;