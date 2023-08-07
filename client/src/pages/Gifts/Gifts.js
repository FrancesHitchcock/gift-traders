import "./Gifts.css";

import Gift from "../../components/Gift/Gift";

const data = [
  {
    _id: "1",
    userName: "Frances",
    address: "",
    location: "",
    type: "electrical",
    giftName: "kettle",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniTFyGbfZ5_kq5raaasJSXwbWTBdQIdhmqg&usqp=CAU",
    description: "Very nice kettle. Fully working.",
    excellentCondition: false,
    donation: 2.5,
  },
  {
    _id: "2",
    userName: "Katie",
    address: "",
    location: "",
    type: "clothing",
    giftName: "trousers",
    img_url:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
    description: "Ladies' trousers, pink, size 12.",
    excellentCondition: false,
    donation: 5.0,
  },
  {
    _id: "3",
    userName: "Chris",
    address: "",
    location: "",
    type: "books",
    giftName: "To Kill A Mockingbird",
    img_url:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "The famous novel by Harper Lee",
    excellentCondition: true,
    donation: 1.5,
  },

  {
    _id: "4",
    userName: "Jezz",
    address: "",
    location: "",
    type: "electrical",
    giftName: "hair dryer",
    img_url:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
    description: "Excellent condition. Includes attachments.",
    excellentCondition: false,
    donation: 30.5,
  },
  {
    _id: "5",
    userName: "Rich",
    address: "",
    location: "",
    type: "clothing",
    giftName: "T-shirt",
    img_url:
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Adults size large, blue. ",
    excellentCondition: true,
    donation: 3.25,
  },
  {
    _id: "6",
    userName: "Tim",
    address: "",
    location: "",
    type: "clothing",
    giftName: "shoes",
    img_url:
      "https://images.unsplash.com/photo-1593548366595-c449f72ccb3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdWUlMjBzaG9lc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Children's shoes size 3. Blue. Good condition.",
    excellentCondition: false,
    donation: 12.5,
  },
];

export default function Gifts() {
  const giftsMarkup = data.map((gift) => {
    return <Gift key={gift._id} gift={gift} />;
  });
  return (
    <main>
      <div className="container gifts-container">
        <h2>I am the gifts page</h2>
        {giftsMarkup}
      </div>
    </main>
  );
}
