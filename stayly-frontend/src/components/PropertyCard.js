import React from 'react';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <div className="property-image">
      <span style={{ fontSize: '4rem' }}>{property.emoji}</span>
      <div className="property-badge">{property.badge}</div>
    </div>
    <div className="property-content">
      <div className="property-price">{property.price}<span style={{ fontSize: '1rem', color: '#888' }}>{property.period}</span></div>
      <div className="property-title">{property.title}</div>
      <div className="property-location">📍 {property.location}</div>
      <div className="property-features">
        <span>🛏️ {property.beds} Beds</span>
        <span>🚿 {property.baths} Baths</span>
        <span>📐 {property.sqft} sqft</span>
      </div>
      <div className="property-footer">
        <div className="property-type">{property.type}</div>
        <button className="view-btn">View Details</button>
      </div>
    </div>
  </div>
);

export default PropertyCard;
