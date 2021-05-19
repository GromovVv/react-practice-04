import React from 'react';

import './BookPreview.css';

const BookPreview = ({ imgUrl, title }) => {
  return (
    <div className="card">
      <div className="thumb">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="body">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};

export default BookPreview;
