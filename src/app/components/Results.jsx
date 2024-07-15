import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import PrimaryResults from "./PrimaryResults";
import Traits from "./Traits";
import { Walter_Turncoat } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { useEffect, useState } from "react";

const walter = Walter_Turncoat({ subsets: ["latin"], weight: ["400"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export default function Results(props) {
  const [sent, setSent] = useState(false);
  const [prediction, setPrediction] = useState(0);

  function sendResults(e) {
    setSent((_) => true);
    if (!sent) {
      props.setAnswers((curr) => {
        curr[curr.length - 1] = e;
        return curr;
      });

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
    }
    fetchResponses();
  }, []);

  return (
    <>
      <div className="z-[-10] bg-[url('/bg.png')] w-screen h-screen bg-cover bg-center absolute"></div>
      <main className="h-screen w-screen md:w-1/3 md:min-w-[30rem] md:absolute md:left-1/2 md:translate-x-[-50%] flex flex-col items-center justify-between">
        <p
          className={`w-full flex text-2xl font-bold items-center pt-4 justify-center ${courier.className}`}
        >
          Which sibling are you?
        </p>

        <PrimaryResults prediction={prediction}/>

        <Traits />

        <div className="w-3/4 h-52 border-2 border-dark flex flex-col">
          <p className="w-full h-[40%] bg-light border-b-2 border-dark flex justify-center items-center text-2xl">
            Characteristics
          </p>
          <p
            disabled
            className="w-full h-[60%] rounded-none resize-none disabled:opacity-100 text-black bg-white p-2 font-medium"
          >
            sdhaoisdh
          </p>
        </div>

        <div className="flex flex-col justify-evenly w-full items-center gap-2">
          <div className="flex flex-col gap-2 w-full bg-white">
            <Separator className="bg-black h-1"></Separator>

            <div className="flex justify-evenly w-full gap-2 bg-white mb-2">
              <Label
                htmlFor="correct"
                className={`place-self-center text-lg font-bold ${walter.className}`}
              >
                Which sibling are you actually?
              </Label>
              <Select onValueChange={sendResults}>
                <SelectTrigger className="w-16 md:w-max bg-gray text-black">
                  <SelectValue placeholder="Correct answer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={0} className="text-sm">
                    Youngest
                  </SelectItem>
                  <SelectItem value={1}>Middle child</SelectItem>
                  <SelectItem value={2}>Oldest</SelectItem>
                  <SelectItem value={3}>Only child</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
