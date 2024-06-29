"use client";

import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Traits() {
  const data = [
    { day: "Critical thinking", amount: 130 },
    { day: "Problem solving", amount: 150 },
    { day: "Achievement motivation", amount: 140 },
    { day: "Protectiveness", amount: 120 },
    { day: "Teamwork", amount: 110 },
  ];

  return (
    <div className="flex justify-evenly w-full md:w-1/3 items-center">
      <div className="h-full w-1/2 flex flex-col justify-around">
        <p className="w-full md:text-center">Data Doodads</p>

        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="60%">
              <PolarGrid stroke="black" opacity={0.5} />
              <PolarAngleAxis
                dataKey="day"
                tick={{ fontSize: 8, width: "minimum", fill: "black" }}
              />
              <Radar
                name="Points"
                dataKey="amount"
                stroke="rgb(236,188,40)"
                fill="rgb(236,188,40)"
                fillOpacity={0.7}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="h-full gap-3 flex flex-col max-h-60 overflow-auto justify-evenly">
        <div className="relative w-28 h-auto">
          <img src="/card.png" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-black">
            <p className="text-wrap w-min">Determind</p>
          </div>
        </div>
        <div className="relative w-28 h-auto">
          <img src="/card.png" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-black">
            <p className="text-wrap w-min">Determined</p>
          </div>
        </div>
        <div className="relative w-28 h-auto">
          <img src="/card.png" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-black">
            <p className="text-wrap w-min">Determined</p>
          </div>
        </div>
      </div>
    </div>
  );
}
