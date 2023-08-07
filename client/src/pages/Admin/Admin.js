import "./Admin.css";

import AdminGift from "../../components/AdminGift/AdminGift";
import AddGiftForm from "../../components/AddGiftForm/AddGiftForm";

export default function Admin() {
  return (
    <main>
      <div className="container admin-container">
        <h2>I am the admin page</h2>
        <AdminGift />
        <AdminGift />
        <AdminGift />
        <AddGiftForm />
      </div>
    </main>
  );
}
