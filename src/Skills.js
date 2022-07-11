import React, { useEffect } from "react";
import Coding from "./Coding";
import Coding2 from "./Coding2";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoNpm, IoLogoGithub } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills({ data }) {
  useEffect(()=>{
    AOS.init({delay: 800});
  },[])
  return (
    <section className="m-lg-5 " id="skills">
    <h1 className={`fingerpaint about-head ${
            data ? "textColor-dark" : ""
          }`}>THINGS I CODE WITH</h1>
    <div className="container-fluid  ">
      <div className="row row-cols-lg-2 row-cols-sm-1 flex-lg-row flex-column ">
        <div className="col-6  ">
          <div data-aos="zoom-in" className="mw-50 m-auto profile col d-lg-inline d-md-none d-none  ">
            <Coding  />
          </div>
          <div data-aos="zoom-in" className="d-lg-none d-md-block profile2">
            <Coding2 />
          </div>
        </div>
        <div className="col-6 section-title   ">
        <div className="pad container-fluid">
              <h2 data-aos="fade-left" className={`fingerpaint about-head ${
            data ? "textColor-dark" : "text-dark"
          }`}>My Skills</h2>
              <div className="skill row row-cols-3 trispace">
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(148, 89, 21)" }}
                >
                  HTMl
                  <TiHtml5 color="orange" size={35} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(12, 58, 128)", gap: "3px" }}
                >
                  CSS
                  <SiCss3 color="white" size={25} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(133, 134, 38)", gap: "3px" }}
                >
                  JavaScript
                  <SiJavascript color="rgb(245, 221, 7)" size={25} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(87, 70, 105)", gap: "3px" }}
                >
                  Bootstrap
                  <SiBootstrap color="#080135" size={30} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(28, 92, 97)", gap: "3px" }}
                >
                  React
                  <SiReact color="#61DBFB" size={27} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(61, 21, 21)", gap: "3px" }}
                >
                  Node
                  <SiNodedotjs color="#8f8f8f" size={30} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(28, 61, 21)", gap: "3px" }}
                >
                  Express
                  <SiExpress color="#9da39f" size={30} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(48, 131, 32)", gap: "3px" }}
                >
                  Mongodb
                  <SiMongodb color="#103d0e" size={30} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(185, 0, 0)", gap: "3px" }}
                >
                  <IoLogoNpm color="#fffffff" size={50} />
                </div>
                <div data-aos="flip-up"
                  className="skill-cintainer col"
                  style={{ backgroundColor: "rgb(133, 105, 105)", gap: "3px" }}
                >
                  Github
                  <IoLogoGithub color="#171515" size={30} />
                </div>
              </div>
            </div>
          {/* <div className="container-fluid">
            <div className="row row-cols-3  skill-icon trispace fs-5 ">
              <div className="sicon col d-inline-block">
                <TiHtml5 className="html " color="orange" />
                
              </div>

              <div className="sicon col d-inline-block">
                <SiCss3 className="css " color="#FFA500" />
                
              </div>

              <div className="sicon col d-inline-block">
                <SiJavascript className="js " color="rgb(245, 221, 7)" />
               
              </div>

              <div className="sicon col d-inline-block">
                <SiBootstrap className="bs " color="#080135" />
                
              </div>

              <div className="sicon col d-inline-block">
                <SiReact className="react " color="#61DBFB" />
               
              </div>

              <div className="sicon col d-inline-block">
                <SiNodedotjs className="node " color="#8f8f8f" />
               
              </div>

              <div className="sicon col d-inline-block">
                <SiExpress className="ex " color="#9da39f" />
                
              </div>

              <div className="sicon col d-inline-block">
                <SiMongodb className="mdb " color="#103d0e" />
                
              </div>

              <div className="sicon col d-inline-block">
                <IoLogoNpm className="npm " color="#fffffff" />
              </div>

              <div className="sicon col d-inline-block">
                <IoLogoGithub className="git " color="#171515" />{" "}
                
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  );
}

export default Skills;
