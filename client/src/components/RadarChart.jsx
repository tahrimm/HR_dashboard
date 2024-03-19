import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { mockDataContacts } from "../data/mockData";
const RadarChartComponent = () => {

    

    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={100} data={mockDataContacts}>
            <PolarGrid />
            <PolarAngleAxis dataKey="country" />
            <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
            <Radar name="Intensity" dataKey="intensity" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Relevance" dataKey="relevance" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Radar name="Likelihood" dataKey="likelihood" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
    );
};

export default RadarChartComponent;
