import "./Home.css";
import AddGiftForm from "../../components/AddGiftForm/AddGiftForm";
import donateImg from "../../assets/donate.png";

export default function Home() {
  return (
    <main>
      <div className="container home-container">
        <h2>Trade Your Past, Shape Our Future:</h2>
        <p>Join Gift Traders in Redefining Generosity and Sustainability!</p>
        <img
          src={donateImg}
          alt="a man holding a box of clothes that says 'donate'."
        />
        <AddGiftForm />
      </div>
    </main>
  );
}
