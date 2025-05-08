import { AreaChart, Area, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { date: "2010", temperature: 0.72 },
  { date: "2012", temperature: 0.78 },
  { date: "2014", temperature: 0.87 },
  { date: "2016", temperature: 1.02 },
  { date: "2018", temperature: 0.93 },
  { date: "2020", temperature: 1.01 },
  { date: "2022", temperature: 1.15 },
  { date: "2024", temperature: 1.47 },
];

const StatisticsHeat: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-8 sm:p-10 lg:p-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Global Surface Temperature Change</h2>
          <p className="text-gray-600 text-sm mb-4">
            This graph shows the change in global surface temperature compared to the long-term
            average from 1951 to 1980. Earth’s average surface temperature in 2024 was the warmest
            on record since recordkeeping began in 1880 (source: NASA/GISS). Overall, Earth was
            about 1.47°C warmer in 2024 than in the late 19th-century (1850–1900) preindustrial
            average. The 10 most recent years are the warmest on record.
            <br />
            <span className="text-primary hover:text-primary/80 text-sm inline-block mt-2">
              Source: NASA/GISS
            </span>
          </p>
        </div>
      </div>

      <div className="pt-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#ef4444"
              fill="url(#tempGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsHeat;
