import React, { useState } from 'react';

const BlogForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Other form fields */}

      <div
        className="image-upload-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('imageInput').click()}
      >
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="image-preview" />
        ) : (
          <>
            <div className="upload-icon">📁</div>
            <div className="image-upload-text">
              Click or drag and drop to upload featured image
            </div>
          </>
        )}
        <div className="image-requirements">
          Recommended: JPG, PNG • Max size: 2MB • Min dimensions: 800x400px
        </div>
      </div>

      {/* Submit button and other elements */}
    </div>
  );
};

export default BlogForm;