import { useState } from "react";
import "./AdminGift.css";
import axios from "axios";
import AdminForm from "../AdminForm/AdminForm";

export default function AdminGift({ gift }) {
  const [modal, setModal] = useState(false);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `https://gift-traders.onrender.com/gifts/${id}`
    );
    console.log(res);
  };

  function handleModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className="gift-container admin-gift-container">
      <div className="gift-edit">
        <button className="edit-gift" onClick={handleModal}>
          Edit
        </button>
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
      {modal && (
        <div className="admin-form-modal">
          <AdminForm closeModal={closeModal} gift={gift} />
        </div>
      )}
    </div>
  );
}
