import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { company: "Tech Mahindra", duration: 5, years: "5 years" },
  { company: "HCL Technologies", duration: 3, years: "3 years" },
  { company: "IGate", duration: 3, years: "3 years" },
  { company: "Nucleus Software", duration: 3, years: "3 years" },
  { company: "Infosys", duration: 5, years: "5 years" },
];

const ExperienceBarChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Experience Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="company" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value, name) => [`${value} years`, name]} />
          <Legend />
          <Bar dataKey="duration" fill="#82ca9d" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExperienceBarChart;
