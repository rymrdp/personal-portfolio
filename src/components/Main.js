import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import "./styles/Main.css";
import reymarpic from "./assets/reymar-portfolio-photo.png";
import { HashLink } from "react-router-hash-link";
import TypeAnimation from "react-type-animation";
import FadeIn from "react-fade-in";

const Main = () => {
  return (
    <section id="main">
      <div className="main">
        <FadeIn>
          <div className="main__container">
            <div className="main__content">
              <div className="text">
                <p>Hello!</p>
                <h1>
                  My name is <span className="reymar">Reymar</span>.
                </h1>
                <div style={{ height: "2.5em" }}>
                  <TypeAnimation
                    cursor={true}
                    sequence={["Software Engineer | Web Developer", 1000, ""]}
                    wrapper="p"
                    repeat={Infinity}
                  />
                </div>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/reymar-dela-paz-0a26a0196/">
                    <LinkedIn className="icon" />
                  </a>
                  <a href="https://github.com/rymrdp">
                    <GitHub className="icon" />
                  </a>
                  <a href="mailto:contactme.reymar@gmail.com">
                    <Email className="icon" />
                  </a>
                </div>
                <div className="buttons">
                  {/* <HashLink smooth to="/#about">
                    <button> My Techstack </button>
                  </HashLink> */}
                  <HashLink smooth to="/#contact">
                    <button>Say Hi!</button>
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="main__image">
              <img src={reymarpic} alt="profile_picture" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Main;
