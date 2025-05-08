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

const pollutionData = [
  {
    city: "Jakarta",
    transportPM25: 46,
    otherSources: 54,
  },
  {
    city: "Metro Manila",
    transportPM25: 88,
    otherSources: 12,
  },
];

const StatisticsAir: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-8 sm:p-10 lg:p-12 mt-12">
      <h2 className="text-2xl font-bold mb-2">PM2.5 from Transportation in Southeast Asian Cities</h2>
      <p className="text-gray-600 text-sm mb-4">
        In developing Southeast Asian cities, traffic is a major source of PM2.5 pollution.
        In <strong>Metro Manila</strong>, up to <strong>88%</strong> of PM2.5 comes from transport,
        while in <strong>Jakarta</strong>, it's around <strong>46%</strong>. This is due to old diesel engines,
        lack of emission controls, and dense traffic.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={pollutionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis label={{ value: "PM2.5 Contribution (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="transportPM25" stackId="a" fill="#ef4444" name="From Transportation" />
          <Bar dataKey="otherSources" stackId="a" fill="#9ca3af" name="Other Sources" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsAir;
