export default function Title(props) {
  return (
    <main className="h-screen w-screen flex justify-center align-center">
      <img src="/white-bg.png" className="h-full w-full absolute"></img>
      <div className="z-10 h-full xl:hidden">
        <img
          src="/door-small.png"
          onClick={() => props.setCurrQues((_) => 1)}
          className="h-full"
        ></img>
        <img src="cursor.png" className="absolute top-[54%] left-[74%] h-14 animate-size"></img>
      </div>
      <div className="z-10 h-full hidden xl:inline-block relative">
        <img
          src="/door-large.png"
          onClick={() => props.setCurrQues((_) => 1)}
          className="h-full"
        ></img>
        <img src="cursor.png" className="absolute top-[54%] left-[69%] h-14 animate-size"></img>
      </div>
    </main>
  );
}
