import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const MortgageChart = ({ data }) => {

    const maxMonthlySavings = Math.max(...data.map((d) => parseFloat(d.interestSaved)));
  const maxAccumulatedSavings = Math.max(...data.map((d) => parseFloat(d.savingsAccumulator)));

    
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Month", position: "insideBottomRight", offset: -5 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            yAxisId="left"
            domain={[0, Math.ceil(maxMonthlySavings * 1.2)]}
            label={{
              value: "Monthly Savings (£)",
              angle: -90,
              position: "insideLeft",
            }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            yAxisId="right"
            domain={[0, Math.ceil(maxAccumulatedSavings * 1.2)]}
            orientation="right"
            label={{
              value: "Accumulated Savings (£)",
              angle: 90,
              position: "insideRight",
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Legend />
          {/* Bar Chart for Monthly Savings */}
          <Bar
            yAxisId="left"
            dataKey="interestSaved"
            fill="#8884d8"
            name="Monthly Savings"
          />
          {/* Line Chart for Accumulated Savings */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="savingsAccumulator"
            stroke="#82ca9d"
            name="Accumulated Savings"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MortgageChart;
