import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        />

        <div className="home__row">
          <Product
            title="Cat plushie"
            price={299.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={5}
          />
          <Product
            title="Cat ploshie"
            price={29.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Cat plashie"
            price={29.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={3}
          />
          <Product
            title="Cat plyshie"
            price={29.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={2}
          />
          <Product
            title="Cat pleshie"
            price={29.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            title="Cat plushie"
            price={29.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
