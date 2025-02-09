import React from 'react'
import { Container, Row, Col, Tab, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import Table from "react-bootstrap/Table";
import ExperienceBarChart from "./ExperienceBarChart";
import "./Experience.css"; // Import the CSS file
import EducationBarChart from "./EducationBarChart";

function Education() {
  const educationData = [
    { universityBoard: "CBSE", degree: "Xth", percentage: "66.4" },
    { universityBoard: "CBSE", degree: "12th", percentage: "72.8" },
    { universityBoard: "Kurukshetra University", degree: "B.Tech", percentage: "65.2" },
  ];

  return (
    <div className="education-container">
      <Table striped bordered hover className="education-table">
        <thead>
          <tr>
            <th>University/Board</th>
            <th>Degree</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item, index) => (
            <tr key={index}>
              <td>{item.universityBoard}</td>
              <td>{item.degree}</td>
              <td>{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EducationBarChart />
    </div>
  );
}

export default Education