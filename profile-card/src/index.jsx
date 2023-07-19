import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill skills="React" emoji="1" color="red" />
      <Skill skills="JAVA" emoji="1" color="blue" />
      <Skill skills="Js" emoji="1" color="orange" />
    </div>
  );
};
const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skills}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
