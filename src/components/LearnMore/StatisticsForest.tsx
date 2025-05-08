import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const forestLossData = [
  { year: 2002, areaLost: 6 },
  { year: 2005, areaLost: 10 },
  { year: 2008, areaLost: 15 },
  { year: 2011, areaLost: 22 },
  { year: 2014, areaLost: 38 },
  { year: 2017, areaLost: 50 },
  { year: 2020, areaLost: 65 },
  { year: 2023, areaLost: 83 }, // Approximate cumulative trend
];

const StatisticsForest: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-8 sm:p-10 lg:p-12 mt-12">
      <h2 className="text-2xl font-bold mb-2">Philippines Humid Primary Forest Loss</h2>
      <p className="text-gray-600 text-sm mb-4">
        From 2002 to 2023, the Philippines lost 190 thousand hectares of humid primary forest — 
        making up 13% of its total tree cover loss. The total forest area decreased by 4.1%.
        <span className="text-primary underline ml-1">
          (Source: Global Forest Watch)
        </span>
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={forestLossData}>
          <defs>
            <linearGradient id="forestGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: "kha", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="areaLost"
            stroke="#10b981"
            fill="url(#forestGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsForest;
