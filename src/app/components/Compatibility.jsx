import { Label } from "@/components/ui/label";

export default function Compatibility() {
  return (
    <div className="flex justify-evenly w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-3 mt-2">
          <Label className="font-medium w-full text-left">BESTIE</Label>
          <div className="relative w-32 h-auto">
            <img src="/card.png" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-around text-black">
              <p className="w-max text-center">Only child</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-3 mt-2">
        <Label className="font-medium w-full text-left">FAVORITE SIBLING</Label>
          <div className="relative w-32 h-auto">
            <img src="/card.png" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-around text-black">
              <p className="w-min text-center">Youngest Sibling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
