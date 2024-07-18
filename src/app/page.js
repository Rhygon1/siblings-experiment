"use client"

import { Alegreya } from 'next/font/google';
import Results from './components/Results';
import Question from './components/Question';
import Title from './components/Title';
import { useState } from 'react';

const fuzzy = Alegreya({ subsets: ['latin'], weight: ["400", "700"] });

export default function Home() {
  const [currQues, setCurrQues] = useState(0);
  const questions = [
    ["What gender do you identify with?", ["Male", "Female", "Non-binary/other", "Rather not say"]],
    ["If there was someone who needed help in a public space but you weren't sure, would you", ["Let someone else help them", "Ask if they needed help", "Ask someone else to check on them"]],
    ["How overbearing or protective would you consider yourself", "slide"],
    ["How cautious would you consider yourself", 'Slide'],
    ["Would you rather spend time", ["Hanging out with friends", "Stay home and watch a movie", "Go on a walk with someone", "Go on vacation with your family"]],
    ["How important is it for you to receive external validation for your accomplishments?", "Slide"],
    ["To what extent do you prefer to have a clear plan and structure in your daily routine?", "slide"],
    ["How important is it for you to feel like you are contributing to your family's legacy or reputation?", "slide"],
    ["How important is it for you to avoid conflict in social situations?", "slide"],
    ["On a scale of 1 (very uncomfortable) to 10 (extremely comfortable), how would you rate your ability to help resolve disagreements between others?", "slide"],
    ["How likely are you to take calculated risks for the sake of personal growth and learning?", "slide"],
    ["Which sibling are you actually? This ", ["Youngest sibling", "Middle sibling", "Oldest sibling", "Only child"]]
  ]
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

  return (
    <main className={`${fuzzy.className} font-extrabold`}>
      {!currQues ? <Title setCurrQues={setCurrQues} /> :
        currQues == questions.length + 1 ? <Results answers={answers} setAnswers={setAnswers} /> :
          <Question key={currQues} question={questions[currQues - 1]} currQues={currQues - 1} setAnswers={setAnswers} setCurrQues={setCurrQues} />}
    </main>
  );
}