import "./AddGiftForm.css";

import { useState } from "react";

export default function AddGiftForm() {
  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    location: "",
    type: "",
    giftName: "",
    img_url: "",
    description: "",
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

  return (
    <div className="add-gift-form-container">
      <form className="add-gift-form">
        <input
          type="text"
          placeholder="Your name"
          onChange={handleChange}
          name="userName"
          value={FormData.userName}
        />
        <input
          type="text"
          placeholder="Your address"
          onChange={handleChange}
          name="address"
          value={FormData.address}
        />
        <input
          type="text"
          placeholder="Your town or city"
          onChange={handleChange}
          name="location"
          value={FormData.location}
        />
        <label>
          Department:
          <select onChange={handleChange} name="type" value={FormData.type}>
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
        />
      </form>
    </div>
  );
}
