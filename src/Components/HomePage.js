import React from "react";
import "./HomePage.css";
import Button from "./Button";

function Main() {
  return (
    <main className="main">
      <div className="banner">
        <div className="banner-overlay">
          <h2>
            Welcome to <span> Little Lemon</span>
          </h2>
          <p>Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button text="Reserve a Table"></Button>
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
