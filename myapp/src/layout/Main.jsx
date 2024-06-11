import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to={"/page2"}>
        <section className="card-bg">
          <div className="heart-bg">
            <div class="heart">
              <div class="heartbeat">❤️</div>
              <div class="heartecho">❤️</div>
            </div>
          </div>
          <div className="card-innerbg">
            <p className="card-text">Click to open!</p>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Main;
