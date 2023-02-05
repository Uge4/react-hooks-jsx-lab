import React from "react";
import { image } from "../data/data";


function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I'm sitting in bed coding wondering whether I'll be any good at coding!</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
