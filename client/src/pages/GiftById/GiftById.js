import "./GiftById.css";

import { useParams } from "react-router";

export default function GiftById({ gifts }) {
  const paramsId = useParams().id;

  const targetGift = gifts.find((gift) => gift._id === paramsId);

  return (
    <main>
      <div className="container gift-by-id-container">
        <h2>{targetGift.giftName}</h2>
      </div>
    </main>
  );
}
