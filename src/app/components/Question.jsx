import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";

export default function Question(props) {
  const [selectedValue, setSelectedValue] = useState(0);

  function nextQuestion() {
    props.setCurrQues((a) => a + 1);
  }

  useEffect(() => {
    console.log(selectedValue, props.currQues);
    props.setAnswers((curr) => {
      curr[props.currQues] =
        Array.isArray(props.question[1]) && props.currQues != 11
          ? ((10 / (props.question[1].length - 1)) * Number(selectedValue))
          : Number(selectedValue);
      return curr;
    });
  }, [selectedValue]);

  function valueChange(e) {
    setSelectedValue((_) => e);
  }

  return (
    <div className="h-screen w-screen xl:w-1/3 xl:min-w-[30rem] xl:absolute xl:left-1/2 xl:translate-x-[-50%]">
      <img className="z-[-10] bg-[url('/bg.png')] bg-cover bg-center h-screen w-screen absolute"></img>
      <Image
        unoptimized
        alt="cute-bg-image"
        src="/puppy.png"
        width="0"
        height="0"
        className="w-full h-auto absolute bottom-0 z-10"
      />
      <div className="z-10 flex items-center justify-center absolute inset-0">
        <div className="flex flex-col items-center justify-around relative h-3/4 w-3/4 bg-white border-[rgb(162,202,188)] border-[1.3rem]">
          <p className={`text-[rgb(162,202,188)] font-bold h-fit w-4/5 text-center ${props.currQues==11 ? "text-sm" : "text-md"}`}>
            {props.question[0]}
          </p>
          <div className="w-full h-fit flex flex-col justify-evenly items-center gap-12">
            {Array.isArray(props.question[1]) ? (
              <RadioGroup
                onValueChange={valueChange}
                value={`${selectedValue}`}
                className="w-full flex items-center justify-evenly flex-col gap-5"
              >
                {props.question[1].map((a, i) => (
                  <div
                    key={i}
                    onClick={() => valueChange(i)}
                    className={`cursor-pointer transition-all flex items-center space-x-2 ${
                      i == selectedValue ? "w-[80%]" : "w-3/4"
                    } justify-center h-12 bg-[rgba(221,221,221)] border-[0.25rem] border-[rgba(181,181,181)]`}
                  >
                    <RadioGroupItem
                      value={i}
                      id={`ad${i}`}
                      className="hidden"
                    />
                    <Label
                      htmlFor={`ad${i}`}
                      className="cursor-pointer text-center"
                    >
                      {a}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="w-full flex flex-col justify-center items-center">
                <p className="font-bold w-4/5 text-end">{selectedValue}</p>
                <Slider
                  defaultValue={[selectedValue]}
                  onValueChange={(i) => valueChange(i[0])}
                  max={10}
                  step={1}
                  className="w-4/5 h-12 text-black"
                ></Slider>
              </div>
            )}

            <Button
              className="bg-[rgba(181,181,181)] hover:bg-[rgba(161,161,161)]"
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
