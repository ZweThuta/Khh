import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle mediun shade4"></div>
        <div class="circle small shade5"></div>
      </div>
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
