"use client";

import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Traits(props) {
  const data = [
    {
      day: "Critical thinking",
      amount: props.answers[9] * 0.5 + props.answers[10] * 0.5,
    },
    { day: "Problem solving", amount: props.answers[9] },
    { day: "Achievement motivation", amount: props.answers[5] },
    { day: "Protectiveness", amount: props.answers[3] },
    {
      day: "Teamwork",
      amount: props.answers[9] * 0.5 + props.answers[1] * 0.5,
    },
  ];

  const traits = {
    0: ["Funny", "Sociable", "Chaotic"],
    1: ["Mediator", "Chaotic", "Problem Solver"],
    2: ["Workaholic", "Professional", "Goofy"],
    3: ["Independent", "Problem Solver", "Workaholic"],
  };

  return (
    <div className="flex justify-evenly w-full items-center">
      <div className="h-[90%] lg:h-64 w-1/2 flex flex-col justify-around items-center">
        <div className="h-full w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="60%">
              <PolarGrid stroke="black" opacity={0.5} />
              <PolarAngleAxis
                dataKey="day"
                tick={{
                  fontSize:
                    window.innerWidth > 639 && window.innerWidth < 1025
                      ? 14
                      : 10,
                  width: "minimum",
                  fill: "black",
                }}
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

      <div className="h-full gap-2 flex flex-col max-h-60 overflow-auto justify-evenly">
        <p className="text-wrap lg:text-lg flex justify-center items-center bg-[rgb(162,202,188)] h-14 lg:h-16 w-36 lg:w-44 border-[2px] border-[#85a095]">
          {traits[props.prediction][0]}
        </p>

        <p className="text-wrap lg:text-lg flex justify-center items-center bg-[rgb(162,202,188)] h-14 lg:h-16 w-36 lg:w-44 border-[2px] border-[#85a095]">
          {traits[props.prediction][1]}
        </p>

        <p className="text-wrap lg:text-lg flex justify-center items-center bg-[rgb(162,202,188)] h-14 lg:h-16 w-36 lg:w-44 border-[2px] border-[#85a095]">
          {traits[props.prediction][2]}
        </p>
      </div>
    </div>
  );
}
