import "./Gift.css";

export default function Gift({ gift }) {
  return (
    <div className="gift-container">
      <h3 className="gift-name">
        Gift: {gift.giftName[0].toUpperCase() + gift.giftName.slice(1)}
      </h3>
      <p className="gift-type">
        Department: {gift.type[0].toUpperCase() + gift.type.slice(1)}
      </p>
      <div className="gift-image-container">
        <img
          className="gift-image"
          src={gift.img_url}
          alt={gift.giftName[0].toUpperCase() + gift.giftName.slice(1)}
        />
      </div>
    </div>
  );
}
