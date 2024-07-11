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

const walter = Walter_Turncoat({ subsets: ["latin"], weight: ["400"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export default function Results() {
  return (
    <main className="h-screen w-screen xl:w-1/3 xl:absolute xl:left-1/3 flex flex-col items-center justify-between">
      <img className="z-[-10] bg-[url('/bg.png')] bg-cover bg-center h-screen w-screen absolute"></img>
      <p
        className={`w-full flex text-2xl font-bold items-center justify-center mt-5 ${courier.className}`}
      >
        Which sibling are you?
      </p>

      <PrimaryResults />


      <Traits />
      <img src="/textbox.png" className="w-[85%] h-[30%]"></img>

      <div className="flex flex-col justify-evenly h-fit w-full items-center gap-4">
        <div className="flex flex-col gap-2 w-full bg-white">
          <Separator className="bg-black h-1"></Separator>

          <div className="h-full flex justify-evenly w-full gap-2 bg-white mb-2">
            <Label
              htmlFor="correct"
              className={`place-self-center text-lg font-bold ${walter.className}`}
            >
              Which sibling are you actually?
            </Label>
            <Select>
              <SelectTrigger className="w-16 xl:w-max bg-gray text-black">
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
