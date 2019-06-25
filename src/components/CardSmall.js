import React from 'react';

import './components.css';

const CardSmall = ({ title, list }) => {
  return (
    <div className="card-small">
      <div className="card-small-title">{title}</div>
      <ul className="card-small-list">
        {list.map((item, idx) => (
          <li key={idx} className="card-small-list-item">{`* ${item}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardSmall;
