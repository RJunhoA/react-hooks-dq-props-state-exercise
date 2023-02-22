import React from "react";
import {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const eyeColorMapper = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby
  }

    const [weight, setWeight] = useState(10);

  function handleChangeWeight(e) {
    const newWeight = e.target.name === '+' ? weight + 10 : weight -10
    setWeight(newWeight)

    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
}
  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>{weight}</h3>
      <h3>{props.hobby}</h3>
      <h4>{props.eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eyeColor]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;