import "./Admin.css";

import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../../components/LoginButton/LoginButton";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

import AdminGift from "../../components/AdminGift/AdminGift";

export default function Admin({ gifts }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const adminGiftMarkUp = gifts.map((gift) => {
    return <AdminGift key={gift._id} gift={gift} />;
  });
  return (
    <main>
      <LoginButton />
      <LogoutButton />
      {isAuthenticated && (
        <div className="container admin-container">{adminGiftMarkUp}</div>
      )}
    </main>
  );
}
