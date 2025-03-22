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

function SideBar() {
    return(
      <div className="sidebar">
          {/* <div className="middle">
             <Button component="label" role={undefined} variant="contained" tabIndex={-1}> Choose files
               <VisuallyHiddenInput type="file" multiple/>
             </Button>  &nbsp;&nbsp;
             <LoopIcon fontSize='large' color='white' className="Round"/>
          </div> */}

          <div>
            <ImageGallery/>
          </div>
      </div>
    );
}

export default SideBar;