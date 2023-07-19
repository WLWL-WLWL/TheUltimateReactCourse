import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
        <SkillList />
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img className="avatar" src="spinaci.jpg" alt="" />;
};
const Intro = () => {
  return (
    <div>
      <h1>Jonas S</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list">
      <ul>
        {skills.map((skillObj) => (
          <Skill skillObj={skillObj} />
        ))}
      </ul>
    </div>
  );
};
const Skill = ({ skillObj: { skill, level, color } }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {level === "beginner" && "👶"}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
