export default function Title(props) {
  return (
    <main className="h-screen w-screen xl:w-1/3 xl:min-w-[35rem] xl:absolute xl:left-1/2 xl:translate-x-[-50%] flex justify-center align-center">
      <img src="/white-bg.png" className="h-full w-full absolute"></img>
      <div className="z-10 h-full">
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
