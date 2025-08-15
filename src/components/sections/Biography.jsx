import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./Biography.css";

const skillsData = [
  { title: "Frontend Development", percentage: 70, tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend Development", percentage: 50, tech: ["Python", "Java", "Node.js", "MySQL"] },
  { title: "Mobile Development", percentage: 38, tech: ["React Native", "Expo", "Java (Android)"] },
  { title: "IT Project Management", percentage: 69, tech: ["Agile and Waterfall Methodologies", "Project Planning and Scheduling", 
    "Risk Management",
    "Stakeholder Communication",
    "ClickUp / Jira / Trello"] }
];

const Biography = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.01 });
  const [animatedSkills, setAnimatedSkills] = useState(Array(skillsData.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    skillsData.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => {
          const newSkills = [...prev];
          newSkills[index] = skill.percentage;
          return newSkills;
        });
      }, index * 400);
    });
    setHasAnimated(true);
  };

  useEffect(() => {
    // Trigger animation when in view OR if the section is already visible on load
    if (!hasAnimated && (inView || window.innerHeight >= document.body.scrollHeight)) {
      startAnimation();
    }
  }, [inView, hasAnimated]);

  return (
    <div className="biography-section">
      <div className="biography-content">
        <h1 className="section-title">BIOGRAPHY</h1>
        <div className="title-underline"></div>

        <p className="bio-description">
          I am a Junior Software Developer passionate about building intelligent, 
          user-focused solutions. With a strong foundation in full-stack development 
          and a Diploma in Information Technology in progress at Richfield, 
          I hold IBM certifications in AI, Agile, Cybersecurity, and Project Management. 
          My technical expertise spans Python, Java, JavaScript, HTML5, CSS3, React.js, 
          React Native, and SQL.
        </p>

        <div className="skills-section" ref={ref}>
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div
                className={`skill-card ${inView ? "visible" : ""}`}
                key={index}
              >
                <div className="skill-inner">
                  {/* FRONT SIDE */}
                  <div className="skill-front">
                    <h3>{skill.title}</h3>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${animatedSkills[index]}%`,
                          minWidth: animatedSkills[index] > 0 ? "4px" : "0" // Prevent disappearing bar
                        }}
                      ></div>
                    </div>
                    <span className="skill-percentage">
                      {animatedSkills[index] > 0 ? (
                        <CountUp
                          start={0}
                          end={animatedSkills[index]}
                          duration={1.5}
                          suffix="%"
                        />
                      ) : "0%"}
                    </span>
                  </div>

                  {/* BACK SIDE */}
                  <div className="skill-back">
                    <h4>Tech Stack</h4>
                    <ul>
                      {skill.tech.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
