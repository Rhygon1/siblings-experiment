"use client";

import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Gaegu } from "next/font/google";

const gaegu = Gaegu({ subsets: ["latin"], weight: ["400"] });

export default function Traits() {
  const data = [
    { day: "Critical thinking", amount: 130 },
    { day: "Problem solving", amount: 150 },
    { day: "Achievement motivation", amount: 140 },
    { day: "Protectiveness", amount: 120 },
    { day: "Teamwork", amount: 110 },
  ];

  return (
    <div className="flex justify-evenly w-full items-center">
      <div className="h-[90%] xl:h-72 w-1/2 flex flex-col justify-around items-center">
        <div className="h-full w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="60%">
              <PolarGrid stroke="black" opacity={0.5} />
              <PolarAngleAxis
                dataKey="day"
                tick={{ fontSize: window.innerWidth > 639 && window.innerWidth < 1025 ? 16 : 10, width: "minimum", fill: "black" }}
              />
              <Radar
                name="Points"
                dataKey="amount"
                stroke="rgb(181, 181, 181)"
                fill="rgb(181, 181, 181)"
                fillOpacity={0.7}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="h-full gap-3 flex flex-col max-h-60 overflow-auto justify-evenly">
        <p className="text-wrap xl:text-lg flex justify-center items-center bg-[rgb(162,202,188)] h-14 xl:h-16 w-36 xl:w-44 border-[2px] border-[#85a095]">
          Determined
        </p>

        <p className="text-wrap xl:text-lg flex justify-center items-center bg-[rgb(162,202,188)] h-14 xl:h-16 w-36 xl:w-44 border-[2px] border-[#85a095]">
          Determined
        </p>

        <p className="text-wrap xl:text-lg flex justify-center items-center bg-[rgb(162,202,188)] h-14 xl:h-16 w-36 xl:w-44 border-[2px] border-[#85a095]">
          Determined
        </p>
      </div>
    </div>
  );
}
