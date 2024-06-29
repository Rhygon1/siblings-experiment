import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Compatibility from "./Compatibility";
import PrimaryResults from "./PrimaryResults";
import Traits from "./Traits";
import Stickies from "./Stickies";
import { Walter_Turncoat } from "next/font/google";
import { Courier_Prime } from "next/font/google";

const walter = Walter_Turncoat({ subsets: ["latin"], weight: ["400"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export default function Results() {
  return (
    <main className="bg-bg h-screen w-screen flex flex-col items-center justify-evenly gap-3">
      <p
        className={`w-full md:w-1/3 flex items-center justify-center h-20 mt-5 ${courier.className}`}
      >
        Which sibling are you?
      </p>

      <PrimaryResults />

      <Traits />

      <Stickies />

      <div className="flex flex-col justify-evenly h-full w-full md:w-1/3 items-center gap-4">
        <Compatibility />

        <div className="flex flex-col gap-2 w-full">
          <Separator className="bg-black h-1"></Separator>

          <div className="h-fit flex justify-evenly w-full gap-2">
            <Label
              htmlFor="correct"
              className={`place-self-center text-lg font-bold ${walter.className}`}
            >
              Which sibling are you actually?
            </Label>
            <Select>
              <SelectTrigger className="w-16 md:w-max bg-bwn text-black">
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
