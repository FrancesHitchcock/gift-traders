import "./GiftById.css";

import { useParams } from "react-router";

export default function GiftById({ gifts }) {
  const paramsId = useParams().id;

  const targetGift = gifts.find((gift) => gift._id === paramsId);

  // const location = targetGift.location
  const location = "Halesworth";

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
