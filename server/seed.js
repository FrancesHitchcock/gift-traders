const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const Gift = require("./models/Gifts");

async function seed() {
  await Gift.create({
    userName: "Frances",
    address: "123 Fake Street",
    location: "Halesworth",
    type: "electrical",
    giftName: "kettle",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniTFyGbfZ5_kq5raaasJSXwbWTBdQIdhmqg&usqp=CAU",
    description: "Very nice kettle. Fully working.",
    excellentCondition: false,
    donation: 2.5,
  });

  await Gift.create({
    userName: "Katie",
    address: "42 Imaginary Road",
    location: "Norwich",
    type: "clothing",
    giftName: "trousers",
    img_url:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
    description: "Ladies' trousers, pink, size 12.",
    excellentCondition: false,
    donation: 5.0,
  });

  await Gift.create({
    userName: "Chris",
    address: "Fuel Studios",
    location: "Norwich",
    type: "books",
    giftName: "To Kill a Mockingbird",
    img_url:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "The famous novel by Harper Lee",
    excellentCondition: true,
    donation: 1.5,
  });

  await Gift.create({
    userName: "Jezz",
    address: "1 Cloud Street",
    location: "Fakenham",
    type: "electrical",
    giftName: "hair dryer",
    img_url:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
    description: "Excellent condition. Includes attachments.",
    excellentCondition: false,
    donation: 10,
  });

  await Gift.create({
    userName: "Rich",
    address: "27 Duck Bill Lane",
    location: "Lowestoft",
    type: "clothing",
    giftName: "T-shirt",
    img_url:
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Adults size large, blue. ",
    excellentCondition: true,
    donation: 3.5,
  });

  await Gift.create({
    userName: "Tim",
    address: "Fuel Studios",
    location: "Norwich",
    type: "clothing",
    giftName: "shoes",
    img_url:
      "https://images.unsplash.com/photo-1593548366595-c449f72ccb3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdWUlMjBzaG9lc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Children's shoes size 3. Blue. Good condition.",
    excellentCondition: false,
    donation: 9.5,
  });

  await Gift.create({
    userName: "Sam",
    address: "10 Penny Lane",
    location: "Liverpool",
    type: "electrical",
    giftName: "iron",
    img_url:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    description: "Used a handleful of times. In working order.",
    excellentCondition: true,
    donation: 10,
  });

  console.log("Let there be gifts");
  mongoose.disconnect();
}

seed();
