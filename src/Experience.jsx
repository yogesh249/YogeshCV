import React from "react";
import Table from "react-bootstrap/Table";
import ExperienceBarChart from "./ExperienceBarChart";
import "./Experience.css"; // Import the CSS file

function Experience() {
  return (
    <div className="experience-container">
      <Table striped bordered hover className="experience-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Designation</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Mahindra</td>
            <td>Technical Specialist</td>
            <td>5 years</td>
          </tr>
          <tr>
            <td>HCL Technologies</td>
            <td>Senior Tech Lead</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>IGate</td>
            <td>Tech Lead</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>Nucleus Software</td>
            <td>Senior Software Engineer</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>Infosys</td>
            <td>Software Engineer</td>
            <td>5 years</td>
          </tr>
        </tbody>
      </Table>
      <ExperienceBarChart />
    </div>
  );
}

export default Experience;
