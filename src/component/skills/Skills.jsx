// CSS Style
import "./skills.css";
// import React
import React, { useEffect, useState } from "react";
import MainTitle from "../MainTitle";

const mySkills = [
  {
    id: 1,
    name: "Graphic Design",
    percentage: 91,
    color: "#6b3df5",
    startValue: 0,
  },
  {
    id: 2,
    name: "Animation",
    percentage: 85,
    color: "#dec11a",
    startValue: 0,
  },
  {
    id: 3,
    name: "Video Editing",
    percentage: 95,
    color: "#0dbab0",
    startValue: 0,
  },
];

export default function Skills() {
  const [skills, setSkills] = useState([...mySkills]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        const intervalDuration = 100; // Adjust as needed
        const percentageIncreasePerInterval = 1; // Adjust as needed

        const progress = setInterval(() => {
          setSkills((prevSkills) => {
            const updatedSkills = prevSkills.map((skill) => {
              const newStartValue = Math.min(
                skill.startValue + percentageIncreasePerInterval,
                skill.percentage
              );

              return {
                ...skill,
                startValue: newStartValue,
              };
            });

            // Check if all skills have reached their percentage
            const allSkillsComplete = updatedSkills.every(
              (skill) => skill.startValue >= skill.percentage
            );

            if (allSkillsComplete) {
              clearInterval(progress);
            }

            return updatedSkills;
          });
        }, intervalDuration);

        return () => clearInterval(progress);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div className="skills" id="skills">
      <MainTitle title="Skills" />
      <div className="container">
        <div className="cards">
          {skills.map((x) => {
            return (
              <div key={x.id} className="card">
                <div
                  className="circular-progress"
                  style={{
                    backgroundImage: `conic-gradient(${x.color} ${x.startValue * 3.6}deg, var(--main-color-white)  0deg)`,
                  }}
                >
                  <span className="progress-value" style={{ color: x.color }}>
                    %{x.startValue}
                  </span>
                </div>
                <div className="test" style={{ color: x.color }}>
                  {x.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
