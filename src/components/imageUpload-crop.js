import React, { useState, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import '../components/ImageUploadcrop.css';
import { Button } from '@mui/material';

export const ImageUploadcrop =  ({ setCroppedImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // const [croppedImage, setCroppedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImg = useCallback(async () => {
    try {
      const image = document.createElement('img');
      image.src = selectedImage;

      const canvas = document.createElement('canvas');
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      const dataURL = canvas.toDataURL('image/jpeg');
      return dataURL;
    } catch (error) {
      console.error('Error generating cropped image:', error);
      return null;
    }
  }, [selectedImage, croppedAreaPixels]);

  const handleSave = useCallback(async () => {
    const croppedImageURL = await getCroppedImg();
    setCroppedImage(croppedImageURL);
  }, [getCroppedImg, setCroppedImage]);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSave();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleSave]);

  return (
    <div className="crop-image">
      <div className="crop-container">
        {selectedImage && (
          <Cropper
            image={selectedImage}
            crop={crop}
            zoom={zoom}
            aspect={4 / 4}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            restrictPosition={false}
          />
        )}
      </div>
      <div className="controls">
        <input type="file" accept="image/*" onChange={handleImageSelect} id="upload-image-btn" />
        <Button onClick={handleSave} variant="outlined">
          Save
        </Button>
        <label variant="outlined" htmlFor="upload-image-btn">
          Upload
        </label>

        <input
          type="range"
          value={zoom}
          min={1}
          max={5}
          step={0.01}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value);
          }}
          className="zoom-range"
        />
      </div>
      {/* {croppedImage && (
        <div className="cropped-image-container">
          <img alt="Cropped_Image" src={croppedImage} style={{ maxWidth: '100%' }} />
          <a href={croppedImage} download="croppedImage.jpeg">
            Download Cropped Image
          </a>
        </div>
      )} */}
    </div>
  );
};
