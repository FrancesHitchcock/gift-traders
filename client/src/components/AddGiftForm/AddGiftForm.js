import "./AddGiftForm.css";
import axios from "axios";

import { useState } from "react";

export default function AddGiftForm() {
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
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/gifts", formData);
    setFormData({
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
  }

  return (
    <div className="add-gift-form-container">
      <form className="add-gift-form" onSubmit={handleSubmit}>
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
        <label>
          Department:
          <select onChange={handleChange} name="type" value={formData.type}>
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
          type="text"
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
    </div>
  );
}
