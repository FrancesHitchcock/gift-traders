const mongoose = require("mongoose");

const { Schema } = mongoose;

const giftSchema = new Schema({
  userName: String,
  address: String,
  location: String,
  type: String,
  giftName: String,
  img_url: String,
  description: String,
  excellentCondition: Boolean,
  donation: number,
});

const Gift = moongoose.model("Gift", giftSchema);

module.exports.Gift;