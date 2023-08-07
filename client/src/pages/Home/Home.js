import "./Home.css";
import AddGiftForm from "../../components/AddGiftForm/AddGiftForm";

export default function Home() {
  return (
    <main>
      <div className="container home-container">
        <h2>I am the home page</h2>
        <AddGiftForm />
      </div>
    </main>
  );
}
