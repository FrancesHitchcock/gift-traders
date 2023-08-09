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
  // const [targetGift, setTargetGift] = useState();
  // const [mapUrl, setMapUrl] = useState("");
  // const [giftReserved, setGiftReserved] = useState(false);

  const paramsId = useParams().id;

  useEffect(() => {
    getTargetGift(paramsId);
  }, []);

  // function handleMap(locationData) {
  //   const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=10`;

  //   setMapUrl(url);
  // }

  // async function getTargetGift() {
  //   const res = await axios.get(`http://localhost:8080/gifts/${paramsId}`);
  //   setTargetGift(res.data[0]);
  //   getLocation(res.data[0].location);
  // }

  // async function handleDelete(id) {
  //   const res = axios.delete(`http://localhost:8080/gifts/${id}`);
  //   // setTargetGift();
  //   setGiftReserved(true);
  // }

  // async function getLocation(city) {
  //   const api = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json`;

  //   const response = await axios.get(api);
  //   const locationData = response.data[0];
  //   handleMap(locationData);
  // }

  // function clearAll() {
  //   setTargetGift();
  //   setGiftReserved(false);
  //   setMapUrl("");
  // }

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
