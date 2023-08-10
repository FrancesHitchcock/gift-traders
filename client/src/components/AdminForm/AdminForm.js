import "./AdminForm.css";
import axios from "axios";

import { useState } from "react";

export default function AddGiftForm({ closeModal, gift }) {
  const [formData, setFormData] = useState({
    userName: gift.userName,
    address: gift.address,
    location: gift.location,
    type: gift.type,
    giftName: gift.giftName,
    img_url: gift.img_url,
    description: gift.description,
    excellentCondition: gift.excellentCondition,
    donation: gift.donation,
  });
  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const res = await axios.put(
      `https://gift-traders.onrender.com/gifts/${gift._id}`,
      formData
    );
    closeModal();
  }

  return (
    <div className="add-gift-form-container">
      <form className="add-gift-form edit-form form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          onChange={handleChange}
          name="userName"
          value={formData.userName}
          required
        />
        <input
          type="text"
          placeholder="Your address"
          onChange={handleChange}
          name="address"
          value={formData.address}
          required
        />
        <input
          type="text"
          placeholder="Your town or city"
          onChange={handleChange}
          name="location"
          value={formData.location}
          required
        />
        <label className="align-left">
          Department:
          <select
            className="department-select"
            onChange={handleChange}
            name="type"
            value={formData.type}
          >
            <option value="misc">Miscellaneous</option>
            <option value="electrical">Electrical</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Gift name"
          onChange={handleChange}
          name="giftName"
          value={formData.giftName}
          required
        />
        <input
          type="url"
          placeholder="image url"
          onChange={handleChange}
          name="img_url"
          value={formData.img_url}
        />
        <textarea
          placeholder="brief description of gift"
          onChange={handleChange}
          name="description"
          value={formData.description}
          required
        />
        <label className="align-left">
          <input
            className="condition-input"
            type="checkbox"
            onChange={handleChange}
            name="excellentCondition"
            checked={formData.excellentCondition}
          />
          Tick if excellent condition{" "}
        </label>
        <label className="align-left">
          Suggested Donation:
          <input
            className="donation-input"
            type="number"
            step="0.5"
            min="1"
            max="10"
            onChange={handleChange}
            name="donation"
            value={formData.donation}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button className="close-button" onClick={closeModal}>
        Close Form
      </button>
    </div>
  );
}
