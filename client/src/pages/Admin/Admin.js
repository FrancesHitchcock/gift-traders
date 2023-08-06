import "./Admin.css";

import AdminGift from "../../components/AdminGift/AdminGift";

export default function Admin() {
  return (
    <main>
      <div className="container admin-container">
        <h2>I am the admin page</h2>
        <AdminGift />
        <AdminGift />
        <AdminGift />
      </div>
    </main>
  );
}
