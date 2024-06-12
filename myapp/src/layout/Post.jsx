import React, { useEffect } from "react";
import Photo from "../Foto/fataky-peachcat.gif";
import { useNavigate } from "react-router-dom";

const Post = () => {
    const navigate = useNavigate();
    const yesHander = () =>{
        navigate("/page3")
    }
  useEffect(() => {
    const btn = document.querySelector('button.n-btn');
    const moveHover = () => {
      const i = Math.floor(Math.random() * 300) + 1;
      const j = Math.floor(Math.random() * 300) + 1;

      btn.style.left = i + "px";
      btn.style.top = j + "px";
    };

    if (btn) {
      btn.addEventListener("mouseover", moveHover);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("mouseover", moveHover);
      }
    };
  }, []); 
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
        <div className="post-bg2">
          <img className="post-img" src={Photo} alt="photopic" />
          <p className="post-text2">Do You Love Me?</p>
        </div>
        <div className="btn-bg">
          <button className="y-btn" onClick={yesHander}>Yes</button>
          <button className="y-btn n-btn">No</button>
        </div>
      </section>
    </>
  );
};

export default Post;
