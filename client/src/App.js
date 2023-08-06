import "./reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Gifts from "./pages/Gifts/Gifts";
import GiftById from "./pages/GiftById/GiftById";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Gifts />
      <GiftById />
      <Admin />
      <Footer />
    </div>
  );
}

export default App;
