import "./GiftById.css";
import axios from "axios";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GiftById({ gifts }) {
  const [targetGift, setTargetGift] = useState();
  const [mapUrl, setMapUrl] = useState("");
  const [giftReserved, setGiftReserved] = useState(false);

  const paramsId = useParams().id;

  useEffect(() => {
    getTargetGift();
  }, []);

  function handleMap(locationData) {
    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=10`;

    setMapUrl(url);
  }

  async function getTargetGift() {
    const res = await axios.get(`http://localhost:8080/gifts/${paramsId}`);
    setTargetGift(res.data[0]);
    getLocation(res.data[0].location);
  }

  async function handleDelete(id) {
    const res = axios.delete(`http://localhost:8080/gifts/${id}`);
    // setTargetGift();
    setGiftReserved(true);
  }

  async function getLocation(city) {
    // console.log(city);
    const api = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json`;

    const response = await axios.get(api);

    const locationData = response.data[0];
    // console.log(locationData.lat);
    // console.log(locationData.lon);

    handleMap(locationData);
  }

  function clearAll() {
    setTargetGift();
    setGiftReserved(false);
    setMapUrl("");
  }

  return (
    <main>
      {targetGift && !giftReserved && (
        <div className="container gift-by-id-container">
          <h2 className="selected-gift-h2">Gift: {targetGift.giftName}</h2>
          <h3>Department: {targetGift.type}</h3>
          <img src={targetGift.img_url} alt={targetGift.giftName} />
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
          <img src={mapUrl} alt="map" />
          <Link to={"/"}>
            <button onClick={clearAll}>OK</button>
          </Link>
        </div>
      )}
    </main>
  );
}
