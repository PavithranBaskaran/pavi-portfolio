import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import dash from "./img/menu-bar.png";
import animationData from "./animation/63004-profile-password-unlock.json";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  var [display, setDisplay] = useState(false);

  let changeStyle = () => {
    let style = document.getElementById("style");
    let mainBg = document.getElementById("main-bg");
    if (display === true) {
      style.innerText = "🌙";
      
      document.body.style.backgroundColor = "#ffff";
      display = false;
      setDisplay(display);
      // console.log(display);
    } else {
      style.innerText = "☀️";
      document.body.style.backgroundColor = "#444f5a";
      display = true;
      setDisplay(display);
      // console.log(display);
    }
  };

  return (
    <>
      <section id="main-bg ">
        <Navbar data={display}/>
        <span className="d-flex justify-content-end fixed-bottom m-3 ">
          <a
            id="style"
            href="#"
            className={`fs-2 text-decoration-none border border rounded-circle ${
              display ? "bg-light" : "bg-dark"
            }  p-0 m-0`}
            onClick={() => changeStyle()}
          >
            🌙
          </a>
        </span>

        {/* Home section */}
        
        <Home data={display}/>
        {/* Horizontal Line */}
        <div className=" d-flex justify-content-center">
        <hr className=" border opacity-50 mt-5 line "/>
        </div>
       
       {/* About section */}
        
        <About data={display}/>
        {/* Horizontal Line */}
        <div className=" d-flex justify-content-center">
        <hr className=" border opacity-50 mt-5 line "/>
        </div>
        {/* Skills section */}
        <Skills/>
         {/* Horizontal Line */}
         <div className=" d-flex justify-content-center">
        <hr className=" border opacity-50 mt-5 line "/>
        </div>
        <section className="" id="project">Project
        <h1>IN PROGRESS</h1></section>
        {/* Horizontal Line */}
        <div className=" d-flex justify-content-center">
        <hr className=" border opacity-50 mt-5 line "/>
        </div>
        <section className="" id="contact">Contact
        <h1>IN PROGRESS</h1></section>
        {/* Horizontal Line */}
        <div className=" d-flex justify-content-center">
        <hr className=" border opacity-50 mt-5 line "/>
        </div>
      </section>
    </>
  );
}

export default App;
