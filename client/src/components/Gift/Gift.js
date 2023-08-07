import "./Gift.css";

export default function Gift({ gift }) {
  return (
    <div className="gift-container">
      <h3>{gift.giftName}</h3>
      <p className="gift-type">{gift.type}</p>
      <div className="gift-image-container">
        <img src={gift.img_url} alt={gift.giftName} />
      </div>
    </div>
  );
}
