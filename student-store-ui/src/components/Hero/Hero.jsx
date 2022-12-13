import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="intro">
          Welcome to Clothing Swap!
          <br /> <br /> For college students by college students !
        </h1>
        {/* <h1 className="twointro">Find Your Merch!</h1> */}
        <p className="para">
          At the Clothing Swap we supply affordable clothing for students who want to switch up their style but dont want to pay expensive prices! College students are also able to sell their clothes that they dont want or may fit anymore !
        </p>
      </div>
      <img
        src="https://webstockreview.net/images/clipart-clothes-animated-15.png"
        className="hero-img"
      ></img>
    </div>
  );
}
