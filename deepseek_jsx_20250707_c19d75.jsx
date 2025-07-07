import React, { useState } from 'react';

export default function CreativeStudio() {
  const [variants, setVariants] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAds = async (image) => {
    setIsGenerating(true);
    const formData = new FormData();
    formData.append('image', image);

    const response = await fetch('/api/ai/generate-ads', {
      method: 'POST',
      body: formData
    });

    const results = await response.json();
    setVariants(results.variants);
    setIsGenerating(false);
  };

  return (
    <div className="creative-studio">
      <h3><i className="fas fa-robot"></i> AI Creative Studio</h3>
      
      <div className="upload-area">
        <input 
          type="file" 
          id="productImage" 
          onChange={(e) => generateAds(e.target.files[0])}
          accept="image/*"
        />
        <label htmlFor="productImage">
          {isGenerating ? (
            <span>Generating... <i className="fas fa-spinner fa-spin"></i></span>
          ) : (
            <span><i className="fas fa-cloud-upload-alt"></i> Upload Product Image</span>
          )}
        </label>
      </div>

      {variants.length > 0 && (
        <div className="variants-grid">
          {variants.map((variant, index) => (
            <div key={index} className="ad-variant">
              <img src={variant.image} alt={`Ad Variant ${index + 1}`} />
              <div className="ad-copy">
                <h4>{variant.headline}</h4>
                <p>{variant.description}</p>
                <div className="cta-buttons">
                  <button className="btn-meta">Use on Meta</button>
                  <button className="btn-google">Use on Google</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}