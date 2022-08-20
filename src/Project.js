import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { project, projects } from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project({ data }) {
    useEffect(()=>{
        AOS.init({delay: 800});
      },[])
  return (
    <>
      <section className="m-lg-5 about " id="about">
        <h1
          className={`fingerpaint about-head ${data ? "textColor-dark" : ""}`}
        >
          PROJECTS
        </h1>

        <div className="container ">
          <div className="row">
            {projects.map((project) => {
              return (
                <div className={`${data ? "textColor-dark" : ""}  col m-4`} data-aos="flip-down">
                  <div className={`${data ? "bg-transparent" : ""} card`} style={{ width: "18rem" }}>
                    <Player
                      className="player"
                      autoplay
                      loop
                      src={project.src}
                      style={{ height: "200px", width: "200px" }}
                      controls={true}
                    ></Player>

                    <div class="card-body">
                      <h5 class="card-title">{project.projectName}</h5>
                      {/* <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p> */}
                      <a href="#" class={`${data ? "textColor-dark" : ""} btn btn-secondary m-2`}>
                        View Project
                      </a>
                      <a href="#" class={`${data ? "textColor-dark" : ""} btn btn-secondary m-2`}>
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
