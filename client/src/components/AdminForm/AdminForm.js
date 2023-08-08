import "./AdminForm.css";
import axios from "axios";

import { useState } from "react";

export default function AddGiftForm({ closeModal }) {
  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    location: "",
    type: "misc",
    giftName: "",
    img_url: "",
    description: "",
    excellentCondition: false,
    donation: 1,
  });

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
    const res = await axios.post("http://localhost:8080/gifts", formData);
  }

  return (
    <div className="add-gift-form-container">
      <form className="add-gift-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          onChange={handleChange}
          name="userName"
          value={FormData.userName}
          required
        />
        <input
          type="text"
          placeholder="Your address"
          onChange={handleChange}
          name="address"
          value={FormData.address}
          required
        />
        <input
          type="text"
          placeholder="Your town or city"
          onChange={handleChange}
          name="location"
          value={FormData.location}
          required
        />
        <label>
          Department:
          <select onChange={handleChange} name="type" value={FormData.type}>
            <option value="misc" selected>
              Miscellaneous
            </option>
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
          value={FormData.giftName}
          required
        />
        <input
          type="text"
          placeholder="image url"
          onChange={handleChange}
          name="img_url"
          value={FormData.img_url}
        />
        <textarea
          placeholder="brief description of gift"
          onChange={handleChange}
          name="description"
          value={FormData.description}
          required
        />
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="excellentCondition"
            checked={formData.excellentCondition}
          />
          Tick if excellent condition{" "}
        </label>
        <label>
          Suggested Donation:
          <input
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
      <button onClick={closeModal}>Close Form</button>
    </div>
  );
}
