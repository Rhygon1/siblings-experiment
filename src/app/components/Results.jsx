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
import { Textarea } from "@/components/ui/textarea";

const walter = Walter_Turncoat({ subsets: ["latin"], weight: ["400"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export default function Results() {
  return (
    <main className="h-screen w-screen md:w-1/3 md:min-w-[30rem] md:absolute md:left-1/2 md:translate-x-[-50%] flex flex-col items-center justify-between">
      <img className="z-[-10] bg-[url('/bg.png')] bg-cover bg-center h-screen w-screen absolute"></img>
      <p
        className={`w-full flex text-2xl font-bold items-center pt-4 justify-center ${courier.className}`}
      >
        Which sibling are you?
      </p>

      <PrimaryResults />


      <Traits />

      <div className="w-3/4 h-52 border-2 border-dark flex flex-col">
        <p className="w-full h-[40%] bg-light border-b-2 border-dark flex justify-center items-center text-2xl">Characteristics</p>
        <p disabled className="w-full h-[60%] rounded-none resize-none disabled:opacity-100 text-black bg-white p-2 font-medium" >sdhaoisdh</p>
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
            <Select>
              <SelectTrigger className="w-16 md:w-max bg-gray text-black">
                <SelectValue placeholder="Correct answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0" className="text-sm">
                  Youngest
                </SelectItem>
                <SelectItem value="1">Middle child</SelectItem>
                <SelectItem value="2">Oldest</SelectItem>
                <SelectItem value="3">Only child</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </main>
  );
}
