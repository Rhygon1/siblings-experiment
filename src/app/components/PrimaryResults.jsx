import { Bacasime_Antique } from "next/font/google";

const baca = Bacasime_Antique({ subsets: ["latin"], weight: ["400"] });

export default function PrimaryResults() {
  return (
    <div className="flex justify-evenly w-full md:w-1/3">
      <div className="w-min md:w-max">
        <p className="font-thin">You give off...</p>
        <p
          className={`${baca.className} text-6xl text-black font-extrabold`}
        >
          Oldest Sibling
        </p>
        
        <p className="font-thin">vibes :D</p>
      </div>
      <div className="relative w-44 h-56">
        <div className="w-full h-full flex justify-center items-end">
          <img src="/frame.png" className="absolute w-full h-full z-0"></img>
          <img
            src="/oldest.png"
            className="h-36 w-22 animate-bounce mb-10"
          ></img>
        </div>
      </div>
    </div>
  );
}
