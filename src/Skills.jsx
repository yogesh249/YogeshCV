import React from "react";
import Card from "react-bootstrap/Card";
import "./Skills.css"; // Import the CSS file
import SkillsBarChart from "./SkillsBarChart";

function Skills() {
  const skillsData = [
    {
      title: "Java 8",
      text: "10+ years of experience in Java 8",
      experience: 10,
      imgSrc: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
    },
    { title: "Spring boot", text: "5 year of experience", experience: 5, imgSrc: "https://img.icons8.com/color/96/000000/spring-logo.png" },
    { title: "Rest webservices", text: "5 year of experience", experience: 5, imgSrc: "https://img.icons8.com/color/96/000000/api-settings.png" },
    { title: "React JS", text: "1 year of experience", experience: 1, imgSrc: "https://img.icons8.com/color/96/000000/react-native.png" },
    { title: "Node.js", text: "1 year of experience", experience: 1, imgSrc: "https://img.icons8.com/color/96/000000/nodejs.png" },
    { title: "Javascript", text: "3 year of experience", experience: 3, imgSrc: "https://img.icons8.com/color/96/000000/javascript.png" },
    { title: "PL/SQL, Oracle", text: "5 year of experience", experience: 5 , imgSrc: "https://img.icons8.com/color/96/000000/oracle-logo.png"},
    { title: "Tomcat/wildfly", text: "3 year of experience", experience: 3 , imgSrc: "https://img.icons8.com/color/96/000000/tomcat.png"},
    { title: "Python", text: "1 year of experience", experience: 1, imgSrc: "https://img.icons8.com/color/96/000000/python.png" },
    { title: "VBS", text: "1 year of experience", experience: 1, imgSrc: "https://img.icons8.com/color/96/000000/visual-basic.png" },
    { title: "Excel Macros", text: "1 year of experience", experience: 1, imgSrc: "https://img.icons8.com/color/96/000000/microsoft-excel-2019.png" },
    { title: "Git", text: "5 year of experience", experience: 5, imgSrc:  "https://img.icons8.com/color/96/000000/git.png" },
    { title: "SVN", text: "3 year of experience", experience: 3, imgSrc: "https://img.icons8.com/color/96/000000/svn.png" },
    { title: "IBM Clearcase", text: "2 year of experience", experience: 2, imgSrc: "https://img.icons8.com/color/96/000000/ibm.png" },
  ];

  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <Card key={index} className="mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={skill.imgSrc} alt={skill.title} />
            <Card.Title>{skill.title}</Card.Title>
            <Card.Text>{skill.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Skills;
