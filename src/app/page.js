import { Alegreya } from 'next/font/google';
import Results from './components/Results';
import Question from './components/Question';

const fuzzy = Alegreya({ subsets: ['latin'], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className={`${fuzzy.className} font-extrabold`}>
      {/* Apply the font directly through className */}
      <Question />
    </main>
  );
}