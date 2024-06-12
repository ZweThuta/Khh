import React from "react";
import Photo from "../Foto/dance.gif";
import Myaudio from "../assets/somebody_to_you.mp3"
export const Yes = () => {
  return (
    <>
    
      <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle mediun shade4"></div>
        <div class="circle small shade5"></div>
      </div>
      <section className="post-bg">
    <div>
    <p className="post-text text2">
      Yayyyy
    </p>
      <img className="post-img" src={Photo} alt="photopic" />
      <audio className="y-audio" controls autoPlay loop>
        <source src={Myaudio} />
      </audio>
      <p className="post-text">I Love You More Bae❤️</p>
    </div>
  </section>

    </>
  );
};
