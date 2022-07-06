import React from "react";

function About({ data }) {
  return (
    <>
      <section className="m-lg-5 about " id="about">
        <h1 className="fingerpaint about-head">LET'S GET TO KNOW ME</h1>
        <h2
          className={`mt-5 ms-3 trispace about-title ${
            data ? "text-light" : ""
          }`}
        >
          FullStack Web Developer / MERN Stack
        </h2>
        <p className="w-lg-75 w-sm-100  ms-lg-5 ms-4 mt-4 context trispace">
          I seek to work in a competitive field and ready to accept the
          challenges, utilizing my skills, would like to work with a highly
          esteemed company which gives me a platform to use my expertise and
          skills for mutual growth and benefit of company and myself.
        </p>

        <ul className="list trispace">
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>Full Name:</span> Pavithran B
          </li>
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>Born:</span> 20 JUNE 1999
          </li>
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>Department:</span> IT
          </li>
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>Degree:</span> Bachelor of
            Science
          </li>
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>Nationality:</span> Indian
          </li>
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>Language:</span>{" "}
            Tamil,Kannada,English
          </li>
          <li>
            <span style={{ color: "#18d26e" }}>➤ </span>
            <span style={{ fontWeight: "bold" }}>City:</span> Erode, TamilNadu,
            India
          </li>
        </ul>
        <p className="w-lg-75 w-sm-100  ms-lg-5 ms-4 mt-4 context trispace">
          I Started off my self-learning journey with online tutorials Google,
          YouTube, Learnmall, SoloLearn, etc and take a step further and
          Enrolled in the GUVI IIT MADRAS Fullstack developer Nanodegree Program
          which involved extensive programming and real world projects. Later, I
          learned MERN Stack From Guvi and built an Website using React JS,
          Node, Express Js, MongoDB.
        </p>
      </section>
    </>
  );
}

export default About;