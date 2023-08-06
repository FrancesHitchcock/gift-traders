import "./Gifts.css";

import Gift from "../../components/Gift/Gift";

export default function Gifts() {
  return (
    <main>
      <div className="container gifts-container">
        <h2>I am the gifts page</h2>
        <Gift />
        <Gift />
        <Gift />
      </div>
    </main>
  );
}
