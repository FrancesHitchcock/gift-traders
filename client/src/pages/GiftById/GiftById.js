import "./GiftById.css";
import axios from "axios";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GiftById({
  getTargetGift,
  targetGift,
  clearAll,
  giftReserved,
  mapUrl,
  handleDelete,
  mapAvailable,
}) {
  const paramsId = useParams().id;

  useEffect(() => {
    getTargetGift(paramsId);
  }, []);

  return (
    <main>
      <Link to={"/gifts"}>
        <button>Back to Gifts</button>
      </Link>
      {targetGift && !giftReserved && (
        <div className="container gift-by-id-container">
          <h2 className="selected-gift-h2">Gift: {targetGift.giftName}</h2>
          <h3>Department: {targetGift.type}</h3>
          {targetGift.excellentCondition && (
            <p
              className="target-gift-excellent-condition-p"
              style={{ color: "red", fontWeight: "bold" }}
            >
              Excellent Condition!
            </p>
          )}
          {targetGift.img_url ? (
            <img src={targetGift.img_url} alt={targetGift.giftName} />
          ) : (
            <p className="target-gift-no-photo-p">Photo not available</p>
          )}
          <p>{targetGift.description}</p>
          <h3>Suggested donation: £{targetGift.donation.toFixed(2)}</h3>
          <h3>
            Pick-up location: {targetGift.address}, {targetGift.location}
          </h3>
          <button onClick={() => handleDelete(targetGift._id)}>
            Claim gift
          </button>
        </div>
      )}
      {targetGift && giftReserved && (
        <div>
          <h3>
            Thank you for reserving the {targetGift.giftName}. Please pick up
            your gift from {targetGift.address}, {targetGift.location}
          </h3>
          {mapAvailable ? (
            <img src={mapUrl} alt="map" />
          ) : (
            <p className="map-unavailable-p">
              Map not available for this location.
            </p>
          )}
          <Link to={"/gifts"}>
            <button onClick={clearAll}>OK</button>
          </Link>
        </div>
      )}
    </main>
  );
}
