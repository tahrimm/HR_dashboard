import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { mockPieData } from '../data/mockData';
const PieChartComponent = () => {
  

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={mockPieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="count"
        >
          {mockPieData.map((entry, index) => (
            <Cell key={`cell-${index}`}  />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
