import { Liu_Jian_Mao_Cao } from "next/font/google";

const baca = Liu_Jian_Mao_Cao({ subsets: ["latin"], weight: ["400"] });

export default function PrimaryResults() {
  return (
    <div className="flex justify-evenly w-full mt-4">
      <div className="w-min">
        <p className="font-thin lg:text-2xl">You give off...</p>
        <p
          className={`${baca.className} text-7xl lg:text-[71pt] text-black font-extrabold`}
        >
          Oldest Sibling
        </p>
        
        <p className="font-thin mt-4 lg:text-2xl">vibes</p>
      </div>
      <div className="relative w-[10.5rem] h-52 lg:w-56 lg:h-72 ml-4 lg:pl-12">
        <div className="w-full h-full flex justify-center items-end">
          <img src="/frame.png" className="absolute w-full h-full z-0"></img>
          <img
            src="/oldest.png"
            className="h-[8.25rem] w-18 lg:w-26 lg:h-52 animate-bounce mb-10"
          ></img>
        </div>
      </div>
    </div>
  );
}
