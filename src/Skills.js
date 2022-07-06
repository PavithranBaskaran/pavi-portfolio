import React from "react";
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

function Skills() {
  return (
    <section className="m-lg-5 " id="skills">
    <h1 className="fingerpaint about-head">THINGS I CODE WITH</h1>
    <div className="container-fluid  ">
      <div className="row row-cols-lg-2 row-cols-sm-1 flex-lg-row flex-column ">
        <div className="col-6  ">
          <div className="mw-50 m-auto profile col d-lg-inline d-md-none d-none  ">
            <Coding />
          </div>
          <div className="d-lg-none d-md-block profile2">
            <Coding2 />
          </div>
        </div>
        <div className="col-6   ">
          <div className="container-fluid">
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
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Skills;
