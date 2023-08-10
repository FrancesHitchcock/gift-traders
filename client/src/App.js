import "./reset.css";
import "./App.css";

import axios from "axios";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Gifts from "./pages/Gifts/Gifts";
import GiftById from "./pages/GiftById/GiftById";
import Admin from "./pages/Admin/Admin";

function App() {
  const [gifts, setGifts] = useState([]);

  // test added from here
  const [targetGift, setTargetGift] = useState();
  const [mapUrl, setMapUrl] = useState("");
  const [giftReserved, setGiftReserved] = useState(false);

  const [mapAvailable, setMapAvailable] = useState(false);

  async function getTargetGift(paramsId) {
    const res = await axios.get(
      `https://gift-traders.onrender.com/gifts/${paramsId}`
    );
    setTargetGift(res.data[0]);
    getLocation(res.data[0].location);
  }

  async function getLocation(city) {
    try {
      const api = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json`;

      const response = await axios.get(api);
      const locationData = response.data[0];
      handleMap(locationData);
      setMapAvailable(true);
    } catch (error) {
      console.log(error);
    }
  }

  function handleMap(locationData) {
    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=10`;

    setMapUrl(url);
  }

  async function handleDelete(id) {
    const res = axios.delete(`https://gift-traders.onrender.com/gifts/${id}`);
    // setTargetGift();
    setGiftReserved(true);
  }

  function clearAll() {
    setTargetGift();
    setGiftReserved(false);
    setMapUrl("");
    setMapAvailable(false);
  }

  // to here

  useEffect(() => {
    getGifts();
  }, [giftReserved]);

  async function getGifts() {
    const res = await axios.get("https://gift-traders.onrender.com/gifts");
    setGifts(res.data);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gifts" element={<Gifts gifts={gifts} />} />
          <Route
            path="/gift/:id"
            element={
              <GiftById
                getTargetGift={getTargetGift}
                targetGift={targetGift}
                clearAll={clearAll}
                mapUrl={mapUrl}
                giftReserved={giftReserved}
                handleDelete={handleDelete}
                mapAvailable={mapAvailable}
              />
            }
          />
          <Route path="/admin" element={<Admin gifts={gifts} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// Server url: https://gift-traders.onrender.com/
// http://localhost:8080/
