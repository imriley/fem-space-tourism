import React, { useState } from "react";
import data from "../assets/data.json";

export default function Technology() {
  let tech = data.technology;
  const [title, setTitle] = useState(tech.lv.name);
  const [description, setDescription] = useState(tech.lv.description);

  const changeData = (newTech) => {
    setTitle(newTech.name);
    setDescription(newTech.description);
  };
  return (
    <main className="technology">
      <div className="technology__heading">
        <span>03</span>Space Launch 101
      </div>
      <div className="technology__wrapper">
        <div className="technology__image" data-image={title}></div>
        <div className="technology__content">
          <div className="technology__btns">
            <div className={`btn${title.toLowerCase() === "launch vehicle" ? " active" : ""}`} onClick={() => changeData(tech.lv)}>
              <span>1</span>
            </div>
            <div className={`btn${title.toLowerCase() === "spaceport" ? " active" : ""}`} onClick={() => changeData(tech.sp)}>
              <span>2</span>
            </div>
            <div className={`btn${title.toLowerCase() === "space capsule" ? " active" : ""}`} onClick={() => changeData(tech.sc)}>
              <span>3</span>
            </div>
          </div>
          <div className="technology__details">
            <div className="technology__subheading">The terminology...</div>
            <div className="technology__title">{title}</div>
            <div className="technology__description">{description}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
