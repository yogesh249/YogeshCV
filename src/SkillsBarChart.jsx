import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const skillsData = [
  { title: "Java 8", text: "10+ years of experience in Java 8", experience: 10 },
  { title: "Spring boot", text: "5 year of experience", experience: 5 },
  { title: "Rest webservices", text: "5 year of experience", experience: 5 },
  { title: "React JS", text: "1 year of experience", experience: 1 },
  { title: "Node.js", text: "1 year of experience", experience: 1 },
  { title: "Javascript", text: "3 year of experience", experience: 3 },
  { title: "PL/SQL, Oracle", text: "5 year of experience", experience: 5 },
  { title: "Tomcat/wildfly", text: "3 year of experience", experience: 3 },
  { title: "Python", text: "1 year of experience", experience: 1 },
  { title: "VBS", text: "1 year of experience", experience: 1 },
  { title: "Excel Macros", text: "1 year of experience", experience: 1 },
  { title: "Git", text: "5 year of experience", experience: 5 },
  { title: "SVN", text: "3 year of experience", experience: 3 },
  { title: "IBM Clearcase", text: "2 year of experience", experience: 2 },
  

  // Add more skills as needed
];

const SkillsBarChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Skills Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="title" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value, name) => [`${value} years`, name]} />
          <Legend />
          <Bar dataKey="experience" fill="#82ca9d" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsBarChart;
