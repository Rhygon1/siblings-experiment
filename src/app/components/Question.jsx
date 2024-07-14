import { Button } from "@/components/ui/button";

export default function Question(props) {

  function nextQuestion(){
    props.setCurrQues(a => a + 1);
  }

  return (
    <div className="h-screen w-screen md:w-1/3 md:min-w-[30rem] md:absolute md:left-1/2 md:translate-x-[-50%]">
      <img className="z-[-10] bg-[url('/white-scribbles.png')] bg-cover bg-center h-screen w-screen absolute"></img>
      <div className="w-full max-w-lg h-full flex items-center justify-center">
        <div className="z-10 flex items-center justify-center absolute inset-0">
          <div className="relative z-20">
            {props.question}
            <Button className="" onClick={nextQuestion}>Next Question</Button>
          </div>

        <img className="w-full lg:w-auto h-auto lg:h-full absolute" src="/questions-frame.png"></img>
        </div>
      </div>
    </div>
  );
}
