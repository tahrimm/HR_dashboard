import React, { useEffect, useState } from "react";
import { LineChart, ResponsiveContainer,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { mockLineData } from "../data/mockData";
const LineChartComponent = () => {

    return mockLineData.length > 0 ? (
      <ResponsiveContainer width="100%" height="100%">
      <LineChart
          data={mockLineData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
  </ResponsiveContainer>
    ) : (
        <div><br /> Loading...</div>
    );
};

export default LineChartComponent;
