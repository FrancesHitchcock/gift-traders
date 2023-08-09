import "./About.css";
import vision from "../../assets/vision.png";
import about from "../../assets/about2.png";

export default function About() {
  return (
    <main>
      <div className="container about-container">
        <h2>About Us:</h2>
        <img src={about} alt="a sign on the beach saying 'love the earth'." />
        <h3> Unleash Generosity, Empower Change</h3>
        <p>
          Welcome to Gift Traders, where sustainability meets generosity!
          Founded by Katy and Frances, two passionate advocates for
          environmental preservation, Gift Traders is a platform that redefines
          the way we give, receive, and contribute to a better world. Our
          mission is simple yet impactful: to reduce waste and promote
          sustainable living through the art of gifting.
        </p>
        <h2>Our Vision:</h2>
        <img
          src={vision}
          alt="a lady holding a box of clothes that says 'donate'."
        />
        <h3>Crafting a Sustainable Legacy</h3>
        <p>
          In a world inundated with excess and waste, Katy and Frances
          envisioned a platform that would empower individuals to make a
          positive difference. They understood the critical connection between
          the items we no longer need and the burgeoning environmental crisis.
          Thus, Gift Traders was born – a hub for like-minded individuals to
          unite in their shared commitment to preserving our planet for future
          generations.
        </p>
        <h3>Recycle, Reclaim, Revitalize</h3>
        <p>
          Every year, millions of items that still hold value and utility are
          discarded, contributing to the mounting waste problem. Gift Traders
          believes in the power of recycling to breathe new life into these
          items. By trading your gently-used goods on our platform, you're not
          only reducing waste but also offering someone else the chance to
          cherish and utilize what was once part of your life.
        </p>
        <h3>Making an Impact, One Gift at a Time</h3>
        <p>
          At Gift Traders, we understand that every gift holds the potential to
          spark joy and change lives. That's why we've integrated an option for
          the recipient to donate to charity when claiming an item. This dual
          impact – on both the environment and philanthropic causes – amplifies
          the positive ripple effect of your generosity.
        </p>
        <h3>Championing Environmental Responsibility</h3>
        <p>
          The environmental impact of waste cannot be ignored. By participating
          in Gift Traders, you become a conscious consumer who is actively
          combatting the throwaway culture. Our platform promotes responsible
          consumption and encourages individuals to see value in the items they
          no longer need, while fostering a sense of community dedicated to
          minimizing our ecological footprint.
        </p>
        <h3>Join the Gift Traders Movement</h3>
        <p>
          Whether you're seeking to declutter your space, find unique treasures,
          or contribute to a greener planet, Gift Traders is your gateway. Katy
          and Frances invite you to join our growing community of eco-conscious
          gift traders. Together, we can redefine the way we give, reduce waste,
          and create a legacy of sustainability for generations to come.
        </p>
        <h3>Gift Thoughtfully. Trade Sustainably. Inspire Change.</h3>
        <p>
          Embrace the power of your old items and be a part of the Gift Traders
          revolution. Start trading today and let your generosity shape a
          brighter, more sustainable future.
        </p>
      </div>
    </main>
  );
}
