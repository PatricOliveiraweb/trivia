import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";

import Question, { IQuest } from "./Components/Question";
import Score from "./Components/Score";

export interface IScore {
  you: number;
  pc: number;
}

function App() {
  const [question, setQuestion] = useState<IQuest | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [score, setscore] = useState<IScore>({ you: 0, pc: 0 });

  useEffect(() => {
    getQuestion();
  }, []);
  async function getQuestion() {
    let data = await fetch(
      "https://opentdb.com/api.php?amount=1&category=15&difficulty=hard",
      {
        method: "GET",
      }
    );
    const response = await data.json();
    setQuestion(response.results[0]);
    setLoading(false);
  }
  if (loading) return <div>loadging</div>;
  else
    return (
      <main className="App">
        <Header />
        <Score {...score} />
        <Question
          data={question}
          setScore={setscore}
          score={score}
          getQuestion={getQuestion}
        />
      </main>
    );
}

export default App;
