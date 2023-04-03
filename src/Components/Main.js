import React from "react";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <div className="banner">
        <img src="/banner.jpg" alt="Restaurant Banner" />
        <div className="banner-overlay">
          <h2>Welcome to Restaurant Name</h2>
          <p>We offer delicious food and a great atmosphere for dining.</p>
        </div>
      </div>
      <div className="offers">
        <div className="offer">
          <img src="/offer1.jpg" alt="Offer 1" />
          <h3>Offer 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="offer">
          <img src="/offer2.jpg" alt="Offer 2" />
          <h3>Offer 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="offer">
          <img src="/offer3.jpg" alt="Offer 3" />
          <h3>Offer 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
