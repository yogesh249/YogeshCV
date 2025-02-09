import React from "react";
import Table from "react-bootstrap/Table";
import ExperienceBarChart from "./ExperienceBarChart";
import "./Experience.css"; // Import the CSS file

function Experience() {
  const experienceData = [
    { companyName: "Tech Mahindra", designation: "Technical Specialist", duration: "5 years" },
    { companyName: "HCL Technologies", designation: "Senior Tech Lead", duration: "3 years" },
    { companyName: "IGate", designation: "Tech Lead", duration: "3 years" },
    { companyName: "Nucleus Software", designation: "Senior Software Engineer", duration: "3 years" },
    { companyName: "Infosys", designation: "Software Engineer", duration: "5 years" },
  ];

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
          {experienceData.map((item, index) => (
            <tr key={index}>
              <td>{item.companyName}</td>
              <td>{item.designation}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ExperienceBarChart />
    </div>
  );
}

export default Experience;
