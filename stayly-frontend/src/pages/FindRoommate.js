import React from 'react';

const FindRoommate = () => (
  <div className="container" style={{ marginTop: '120px' }}>
    <div className="form-container">
      <h1 className="page-title">Find Your Perfect Roommate</h1>
      <p className="page-subtitle">Connect with compatible people looking to share a space</p>
      <form className="property-form">
        <div className="form-section">
          <h3 className="form-section-title">About You</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="First and last name" required />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" required />
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="btn-secondary">Cancel</button>
          <button type="submit" className="btn-primary">Create Profile</button>
        </div>
      </form>
    </div>
  </div>
);

export default FindRoommate;
