import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const match = useLocation();
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${match.pathname}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          background: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> SHOW NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;