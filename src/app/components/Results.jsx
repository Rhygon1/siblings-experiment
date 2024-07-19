import PrimaryResults from "./PrimaryResults";
import Traits from "./Traits";
import { Walter_Turncoat } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

const walter = Walter_Turncoat({ subsets: ["latin"], weight: ["400"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export default function Results(props) {
  const [sent, setSent] = useState(false);
  const [prediction, setPrediction] = useState("nun");
  const wands = {
    0: "You're so charming and immature pookie. Maybe its time to do a deep dive on yourself? Which one are you more... (Lowkey should play more roblox 2 player games).",
    1: "For sure at least a bit of a people pleaser but props to you for also being an easy goer. Play more horror games so you can let out your rage onto others",
    2: "Glad you're so organized if not materialistically then mentally. You could be a tad bit bossy at times maybe consult a safe adult /j. Play more grinding games and don't forget to take time for yourself or vice versa get your daily dose of socializing in!",
    3: "Such an resourceful person!! Its ok to be lonely sometimes maybe its time to start grinding again. Play some 2 player games with others and get your daily dose of socializing in"
  }

  useEffect(() => {
    async function fetchResponses() {
      let res = await fetch("/api");
      res = await res.json();

      console.log(res);

      let distances = [Infinity, Infinity, Infinity, Infinity];
      for (let i = 0; i < 4; i++) {
        let total = 0;
        for (let j = 0; j < 11; j++) {
          total += Math.pow(res[i][j]-props.answers[j], 2);
        }
        distances[i] = total;
        console.log(total);
      }

      setPrediction(_ => {
        var lowest = 0;
        for (let i = 1; i < distances.length; i++) {
          if (distances[i] < distances[lowest]) lowest = i;
        }
        return lowest;
      });

      
      setSent((_) => true);
      if (!sent) {  
        console.log(props.answers);
        async function postResults() {
          let res = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({ responses: props.answers }),
          });
          res = await res.json();
          console.log(res);
        }
        postResults();
      }
    }
    fetchResponses();
  }, []);

  return (
    <>
      <div className="z-[-10] bg-[url('/bg.png')] w-screen h-screen bg-cover bg-center absolute"></div>
      {prediction == "nun" ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner size="large"/>
        </div>
      ) : (
        <main className="h-screen w-screen md:w-1/3 md:min-w-[30rem] md:absolute md:left-1/2 md:translate-x-[-50%] flex flex-col items-center justify-around">
          <p
            className={`w-full flex text-2xl font-bold items-center pt-4 justify-center ${courier.className}`}
          >
            Which sibling are you?
          </p>

          <PrimaryResults prediction={prediction} />

          <Traits prediction={prediction} answers={props.answers}/>

          <div className="w-3/4 h-52 border-2 border-dark flex flex-col">
            <p className="w-full h-[40%] bg-light border-b-2 border-dark flex justify-center items-center text-2xl">
              Characteristics
            </p>
            <p
              disabled
              className="w-full h-[60%] rounded-none resize-none text-sm disabled:opacity-100 text-black bg-white p-2 font-medium text-center"
            >
              {wands[prediction]}
            </p>
          </div>
        </main>
      )}
    </>
  );
}
