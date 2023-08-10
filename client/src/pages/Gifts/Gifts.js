import "./Gifts.css";

import Gift from "../../components/Gift/Gift";

export default function Gifts({ gifts }) {
  const giftsMarkup = gifts.map((gift) => {
    return <Gift key={gift._id} gift={gift} />;
  });
  return (
    <main>
      <div className="container gifts-container">
        <h2 className="gifts-h2">Click on a gift to find out more about it!</h2>
        <form className="filter-form">
          <select className="filter-select">
            <option value="">All Gifts</option>
            <option value="electrical">Electrical</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </form>
        <div className="gifts-wrapper">{giftsMarkup}</div>
      </div>
    </main>
  );
}
