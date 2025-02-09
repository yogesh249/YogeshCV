import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { Board: "CBSE", Degree: "Xth", percentage: "66.4" },
  { Board: "CBSE", Degree: "Xth", percentage: "72.8" },
  { Board: "Kurukshetra University", Degree:"B.Tech", percentage: "65.2" }
];

const EducationBarChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Experience Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="Degree" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value, name) => [`${value}`, name]} />
          <Legend />
          <Bar dataKey="percentage" fill="#82ca9d" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EducationBarChart;
