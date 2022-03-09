import React, { useState } from "react";
import data from "../assets/data.json";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";

export default function Crew() {
  const crews = data.crew;
  let crew = crews.douglas;
  const [image, setImage] = useState(douglas);
  const [name, setName] = useState(crew.name);
  const [role, setRole] = useState(crew.role);
  const [bio, setBio] = useState(crew.bio);

  const updateCrew = (newCrew) => {
    if (newCrew === "anousheh") {
      setImage(anousheh);
      return crews.anousheh;
    } else if (newCrew === "douglas") {
      setImage(douglas);
      return crews.douglas;
    } else if (newCrew === "mark") {
      setImage(mark);
      return crews.mark;
    } else if (newCrew === "victor") {
      setImage(victor);
      return crews.victor;
    }
  };

  const changeData = (newCrew) => {
    crew = updateCrew(newCrew);
    setName(crew.name);
    setRole(crew.role);
    setBio(crew.bio);
  };

  return (
    <main className="crew">
      <div className="crew__heading">
        <span>02</span>Meet your crew
      </div>
      <div className="crew__wrapper">
        <div className="crew__content">
          <div className="crew__btns">
            <span className={`btn${name.startsWith("D") ? " active" : ""}`} onClick={() => changeData("douglas")}></span>
            <span className={`btn${name.startsWith("M") ? " active" : ""}`} onClick={() => changeData("mark")}></span>
            <span className={`btn${name.startsWith("V") ? " active" : ""}`} onClick={() => changeData("victor")}></span>
            <span className={`btn${name.startsWith("A") ? " active" : ""}`} onClick={() => changeData("anousheh")}></span>
          </div>
          <div className="crew__details">
            <h3 className="crew__role">{role}</h3>
            <h2 className="crew__name">{name}</h2>
            <div className="crew__bio">{bio}</div>
          </div>
        </div>
        <div className="crew__image">
          <img src={image} alt={name} />
          <div className="divider hide-for-desktop"></div>
        </div>
      </div>
    </main>
  );
}
