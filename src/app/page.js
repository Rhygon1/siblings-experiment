"use client"

import { Alegreya } from 'next/font/google';
import Results from './components/Results';
import Question from './components/Question';
import Title from './components/Title';
import { useState } from 'react';

const fuzzy = Alegreya({ subsets: ['latin'], weight: ["400", "700"] });

export default function Home() {
  const [currQues, setCurrQues] = useState(0);
  const questions = ["a", "b", "v"]

  return (
    <main className={`${fuzzy.className} font-extrabold`}>
      {/* Apply the font directly through className */}
      {!currQues ? <Title setCurrQues={setCurrQues}/> : 
        currQues == questions.length+1 ? <Results/> : 
        <Question question={questions[currQues-1]} setCurrQues={setCurrQues}/>}
    </main>
  );
}