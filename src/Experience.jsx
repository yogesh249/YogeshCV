import React from "react";
import Table from "react-bootstrap/Table";
import ExperienceBarChart from "./ExperienceBarChart";
import "./Experience.css"; // Import the CSS file

function Experience() {
  const experienceData = [
    { companyName: "Tech Mahindra", designation: "Technical Specialist", duration: "5 years", logo: "https://www.techmahindra.com/themes/custom/techm/techm_logo.svg"},
    { companyName: "HCL Technologies", designation: "Senior Tech Lead", duration: "3 years", logo: "https://www.hcltech.com/themes/custom/hcltech/images/hcltech-new-logo.svg" },
    { companyName: "IGate", designation: "Tech Lead", duration: "3 years" ,  logo: "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"},
    { companyName: "Nucleus Software", designation: "Senior Software Engineer", duration: "3 years", logo: "https://www.nucleussoftware.com/wp-content/themes/Nucleus/assets/images/logo_dark.svg" },
    { companyName: "Infosys", designation: "Software Engineer", duration: "5 years"},
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
              {item.logo ? <td><img src={item.logo} style={{ width: "20%", height: "auto" }}></img></td> : <td>{item.companyName}</td>}
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
