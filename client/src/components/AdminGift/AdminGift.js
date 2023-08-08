import "./AdminGift.css";
import axios from "axios";

export default function AdminGift({ gift }) {
  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:8080/gifts/${id}`);
    console.log(res);
  };

  return (
    <div className="gift-container">
      <div className="gift-edit">
        <button className="edit-gift">Edit</button>
        <button className="delete-gift" onClick={() => handleDelete(gift._id)}>
          Delete
        </button>
      </div>
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
