import "./Admin.css";

import AdminGift from "../../components/AdminGift/AdminGift";
// import AddGiftForm from "../../components/AddGiftForm/AddGiftForm";

export default function Admin({ gifts }) {
  const adminGiftMarkUp = gifts.map((gift) => {
    return <AdminGift key={gift._id} gift={gift} />;
  });
  return (
    <main>
      <div className="container admin-container">
        {adminGiftMarkUp}
        {/* <h2>I am the admin page</h2>
        <AdminGift />
        <AdminGift />
        <AdminGift />
        <AddGiftForm /> */}
      </div>
    </main>
  );
}
