const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bp.json());

const Gift = require("./models/Gifts");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("this is the root route");
});

// Get All Gifts

app.get("/gifts", async (request, response) => {
  try {
    const allGifts = await Gift.find(request.query);
    response.status(200).json(allGifts);
  } catch (error) {
    response.status(404).json(error);
  }
});

// Get One Gift

app.get("/gifts/:id", async (request, response) => {
  console.log(request);
  try {
    const aGift = await Gift.find({ _id: request.params.id });
    response.status(200).json(aGift);
  } catch (error) {
    response.status(404).json(error);
  }
});

//Create Gift
app.post("/gifts", async (request, response) => {
  try {
    const newGift = await Gift.create(request.body);
    response.status(200).json(newGift);
  } catch (error) {
    response.status(500).json(error);
  }
});

//Update Gift

app.put("/gifts/:id", async (request, response) => {
  console.log(request.params.id);
  try {
    await Gift.findByIdAndUpdate(request.params.id, request.body);
    response.status(204).send();
  } catch (error) {
    response.send(error);
  }
});

// Delete Gift

app.delete("/gifts/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedGift = await Gift.findByIdAndDelete(id);
    response.status(200).send(deletedGift);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
