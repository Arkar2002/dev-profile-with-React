import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillLists />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./avatar.jpg" className="avatar" alt="Arkar Chan Myae" />;
}

function Intro() {
  return (
    <div>
      <h1>Arkar Chan Myae</h1>
      <p>
        I'm trying to be Full-Stack Web Developer.When not coding, I'd like to
        play games and listen to some good songs. And I love to solve error even
        it is boring and complicated stuff but I enjoy doing it.Fun Fact: do not
        ask how my code works. Just Kidding!. I'd love to understand how codes
        work , also share with others about tech and new stuff whenever I can
        get my hands on or not.
      </p>
    </div>
  );
}

function SkillLists() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="👍" color="#123456" />
      <Skill skill="JAVASCRIPT" emoji="👍" color="orangered" />
      <Skill skill="Tailwind" emoji="👶" color="steelblue" />
      <Skill skill="React" emoji="👶" color="skyblue" />
      <Skill skill="PHP" emoji="👶" color="#AEB2D5" />
      <Skill skill="MYSQL" emoji="👍" color="#00758f" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
