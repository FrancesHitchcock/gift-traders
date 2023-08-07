import "./GiftById.css";
import axios from "axios";

import { useParams } from "react-router";
import { useEffect } from "react";

export default function GiftById({ gifts }) {
  const paramsId = useParams().id;

  const targetGift = gifts.find((gift) => gift._id === paramsId);

  // const location = targetGift.location

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const location = "norwich";
    const api = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${location}&format=json`;

    const response = await axios.get(api);

    const locationData = response.data[0];
    console.log(locationData);
  }

  return (
    <main>
      <div className="container gift-by-id-container">
        <h2 className="selected-gift-h2">Gift: {targetGift.giftName}</h2>
        <h3>Department: {targetGift.type}</h3>
        <img src={targetGift.img_url} alt={targetGift.giftName} />
        <p>{targetGift.description}</p>
        <h3>Suggested donation: £{targetGift.donation.toFixed(2)}</h3>
        <h3>Pick-up location: {targetGift.address}</h3>
      </div>
    </main>
  );
}
