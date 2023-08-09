import "./Home.css";
import AddGiftForm from "../../components/AddGiftForm/AddGiftForm";
import donateImg from "../../assets/donate.png";

export default function Home() {
  return (
    <main>
      <div className="container home-container">
        <h2>Trade Your Past, Shape Our Future</h2>
        <p>Join Gift Traders in Redefining Generosity and Sustainability!</p>
        <img
          src={donateImg}
          alt="a man holding a box of clothes that says 'donate'."
        />
        <div className="home-info">
          <p>
            Gift Traders, founded by Katy and Frances, is a visionary platform
            that merges generosity with environmental responsibility. Through
            trading gently-used items, we tackle waste and advocate for
            sustainable living, breathing new life into forgotten possessions.
            With the option to donate to charity, our community empowers
            positive change on both ecological and philanthropic fronts. Join us
            in redefining gifting as a force for good, curbing waste, and
            fostering a legacy of sustainability for future generations.
          </p>
        </div>
        <AddGiftForm />
      </div>
    </main>
  );
}
