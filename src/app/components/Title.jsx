export default function Title(props) {
  return (
    <main className="h-screen w-screen xl:w-1/3 xl:min-w-[35rem] xl:absolute xl:left-1/2 xl:translate-x-[-50%] flex justify-center align-center">
      <div className="z-10 h-full">
        <img
          src="/door-large.png"
          onClick={() => props.setCurrQues((_) => 1)}
          className="h-full w-full hidden md:inline-block"
        />
        <img
          src="/door-small.png"
          onClick={() => props.setCurrQues((_) => 1)}
          className="h-full w-full md:hidden inline-block"
        />
        <img
          src="cursor.png"
          onClick={() => props.setCurrQues((_) => 1)}
          className="absolute top-[50%] md:top-[54%] left-[75%] md:left-[69%] h-14 animate-size"
        ></img>
      </div>
    </main>
  );
}
