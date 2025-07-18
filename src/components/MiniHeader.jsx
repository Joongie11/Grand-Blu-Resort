import React from 'react';
import { Link } from 'react-router-dom';
import '../css/miniheader.css';

function MiniHeader() {
  return (
    <header className="mini-header">
      <div className="container">
        <div className="mini-title">Grand Blue Hotel</div>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </header>
  );
}

export default MiniHeader;