import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import changePage from "../redux/action";

export default function Home() {
  let dispatch = useDispatch();
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__subheading">So, you want to travel to</div>
        <h1 className="home__heading">Space</h1>
        <div className="home__body">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out
          of this world experience!
        </div>
      </div>
      <div className="home__btn">
        <Link to="/destination" onClick={() => dispatch(changePage("destination"))}>
          explore
        </Link>
      </div>
    </div>
  );
}
