import { Liu_Jian_Mao_Cao } from "next/font/google";

const baca = Liu_Jian_Mao_Cao({ subsets: ["latin"], weight: ["400"] });

export default function PrimaryResults() {
  return (
    <div className="flex justify-evenly w-full">
      <div className="w-min pt-4">
        <p className="font-thin xl:text-3xl">You give off...</p>
        <p
          className={`${baca.className} text-7xl xl:text-[74pt] text-black font-extrabold`}
        >
          Oldest Sibling
        </p>
        
        <p className="font-thin mt-4 xl:text-3xl">vibes</p>
      </div>
      <div className="relative w-[10.5rem] h-52 xl:w-56 xl:h-72 mt-4 ml-4 xl:pl-12">
        <div className="w-full h-full flex justify-center items-end">
          <img src="/frame.png" className="absolute w-full h-full z-0"></img>
          <img
            src="/oldest.png"
            className="h-[8.25rem] w-18 xl:w-32 xl:h-52 animate-bounce mb-10"
          ></img>
        </div>
      </div>
    </div>
  );
}
