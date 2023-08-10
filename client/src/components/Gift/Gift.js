import "./Gift.css";

import { Link } from "react-router-dom";

export default function Gift({ gift }) {
  return (
    <Link to={`/gift/${gift._id}`}>
      <div className="gift-container gift-container-2">
        <div className="gift-info-container">
          <h3 className="gift-name">
            Gift:{" "}
            {gift.giftName[0].toUpperCase() +
              gift.giftName.slice(1).toLowerCase()}
          </h3>
          <p className="gift-type">
            Department:{" "}
            {gift.type[0].toUpperCase() + gift.type.slice(1).toLowerCase()}
          </p>
          {gift.excellentCondition && (
            <p className="excellent-condition-p">Excellent Condition!</p>
          )}
        </div>
        <div className="gift-image-container">
          {gift.img_url ? (
            <img
              className="gift-image"
              src={gift.img_url}
              alt={
                gift.giftName[0].toUpperCase() +
                gift.giftName.slice(1).toLowerCase()
              }
            />
          ) : (
            <p className="no-photo-p">Photo not available</p>
          )}
        </div>
      </div>
    </Link>
  );
}
