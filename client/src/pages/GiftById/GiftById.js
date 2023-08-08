import "./GiftById.css";
import axios from "axios";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function GiftById({ gifts }) {
  const [targetGift, setTargetGift] = useState();

  const paramsId = useParams().id;

  useEffect(() => {
    getTargetGift();
  }, []);

  async function getTargetGift() {
    const res = await axios.get(`http://localhost:8080/gifts/${paramsId}`);
    // console.log(res.data[0]);
    setTargetGift(res.data[0]);
    getLocation();
  }

  async function handleDelete(id) {
    console.log(id);
    const res = axios.delete(`http://localhost:8080/gifts/${id}`);
    console.log(res);
    setTargetGift();
  }

  async function getLocation() {
    const location = "norwich";
    const api = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${location}&format=json`;

    const response = await axios.get(api);

    const locationData = response.data[0];
    // console.log(locationData);
  }

  return (
    <main>
      {targetGift && (
        <div className="container gift-by-id-container">
          <h2 className="selected-gift-h2">Gift: {targetGift.giftName}</h2>
          <h3>Department: {targetGift.type}</h3>
          <img src={targetGift.img_url} alt={targetGift.giftName} />
          <p>{targetGift.description}</p>
          <h3>Suggested donation: £{targetGift.donation.toFixed(2)}</h3>
          <h3>Pick-up location: {targetGift.address}</h3>
          <button onClick={() => handleDelete(targetGift._id)}>
            Claim gift
          </button>
        </div>
      )}
    </main>
  );
}
