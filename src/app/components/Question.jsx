import { Button } from "@/components/ui/button";

export default function Question(props) {

  function nextQuestion(){
    props.setCurrQues(a => a + 1);
  }

  return (
    <div className="h-screen w-screen">
      <img className="z-[-10] xl:blur-sm bg-[url('/white-scribbles.png')] bg-cover bg-center h-screen w-screen absolute"></img>
      <img className="hidden xl:inline-block z-[-10] left-1/3 bg-[url('/white-scribbles.png')] bg-cover bg-center h-screen w-screen xl:w-1/3 absolute"></img>
      
      <div className="w-full max-w-lg h-full flex items-center justify-center">
        <div className="z-10 flex items-center justify-center absolute inset-0">
          <div className="relative z-20">
            {props.question}
            <Button className="" onClick={nextQuestion}>Next Question</Button>
          </div>

        <img className="w-full xl:w-auto h-auto xl:h-full absolute" src="/questions-frame.png"></img>
        </div>
      </div>
    </div>
  );
}
