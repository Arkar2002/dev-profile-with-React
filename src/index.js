import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

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
      {skills.map((skill) => (
        <Skill skills={skill} />
      ))}
    </div>
  );
}

function Skill({ skills }) {
  return (
    <div className="skill" style={{ backgroundColor: skills.color }}>
      <span>{skills.skill}</span>
      <span>
        {skills.level === "beginner" && "👶"}
        {skills.level === "intermediate" && "👍"}
        {skills.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
