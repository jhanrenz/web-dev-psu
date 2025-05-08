import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const accessData = [
  {
    category: "Access to Safe Water",
    access: 55, // in millions
    noAccess: 60,
  },
  {
    category: "Access to Safe Sanitation",
    access: 72, // 115 - 43
    noAccess: 43,
  },
];

const StatisticsWater: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-8 sm:p-10 lg:p-12 mt-12">
      <h2 className="text-2xl font-bold mb-2">Water and Sanitation Access in the Philippines</h2>
      <p className="text-gray-600 text-sm mb-4">
        Out of a population of 115 million, around <strong>60 million lack access to safe water</strong>
        and <strong>43 million lack access to safe sanitation</strong>. Urbanization and economic growth
        continue to challenge equitable access. In 2010, the government committed to achieving universal
        access by 2028.
        <span className="text-primary underline ml-1">
          (Source: Water.org)
        </span>
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={accessData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis label={{ value: "Population (millions)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="access" stackId="a" fill="#3b82f6" name="With Access" />
          <Bar dataKey="noAccess" stackId="a" fill="#ef4444" name="Without Access" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsWater;
