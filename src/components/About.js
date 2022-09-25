import React from "react";
import Links from "./Links";

function About({bio,links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {//if the bio exists, and is not equal to an empty string, show bio. otherwise, show null
        bio && bio !==""?
      <p>{bio}</p>
      :
      null
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githubLink={links.github} linkedInLink={links.linkedin} />
    </div>
  );
}

export default About;
