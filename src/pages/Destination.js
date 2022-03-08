import React, { useState } from "react";
import data from "../assets/data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

export default function Destination() {
  const planets = data.destinations;
  let planet = planets.moon;
  const [image, setImage] = useState(moon);
  const [title, setTitle] = useState(planet.name);
  const [description, setDescription] = useState(planet.description);
  const [distance, setDistance] = useState(planet.distance);
  const [travel, setTravel] = useState(planet.travel);

  const updatePlanet = (destination) => {
    if (destination === "moon") {
      setImage(moon);
      return planets.moon;
    } else if (destination === "mars") {
      setImage(mars);
      return planets.mars;
    } else if (destination === "europa") {
      setImage(europa);
      return planets.europa;
    } else if (destination === "titan") {
      setImage(titan);
      return planets.titan;
    }
  };

  const changeData = (destination) => {
    planet = updatePlanet(destination);
    setTitle(planet.name);
    setDescription(planet.description);
    setDistance(planet.distance);
    setTravel(planet.travel);
  };
  return (
    <div className="destination">
      <div className="destination__subheading">
        <span>01</span> Pick your destination
      </div>
      <div className="destination__wrapper">
        <img src={image} alt="" className="destination__image" />
        <div className="destination__content">
          <div className="destination__btns">
            <span className={`btn${title === "Moon" ? " active" : ""}`} onClick={() => changeData("moon")}>
              Moon
            </span>
            <span className={`btn${title === "Mars" ? " active" : ""}`} onClick={() => changeData("mars")}>
              Mars
            </span>
            <span className={`btn${title === "Europa" ? " active" : ""}`} onClick={() => changeData("europa")}>
              Europa
            </span>
            <span className={`btn${title === "Titan" ? " active" : ""}`} onClick={() => changeData("titan")}>
              Titan
            </span>
          </div>
          <h3 className="destination__heading">{title}</h3>
          <div className="destination__body">{description}</div>
          <div className="divider"></div>
          <div className="travel">
            <div className="destination__distance">
              <div className="head">Avg. distance</div>
              <h5 className="distance">{distance}</h5>
            </div>
            <div className="destination__time">
              <div className="head">Est. Travel Time</div>
              <h5 className="time">{travel}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
