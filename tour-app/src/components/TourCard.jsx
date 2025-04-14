import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <h3>{name}</h3>
      <h4 className="price">${price}</h4>
      <img src={image} alt={name} className="tour-img" />

      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="read-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>

      <button className="btn-remove" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default TourCard;