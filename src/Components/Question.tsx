import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "./Button";
import { Radio } from "./RadioButton";
import Mesage from "./Mesage";
import styles from "./Question.module.scss";
import { IScore } from "../App";

export interface IQuest {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [];
}
interface IData {
  data: IQuest | null;
  setScore: ({ you, pc }: IScore) => void;
  score: IScore;
  getQuestion: () => void;
}
const Question = ({ data, setScore, score, getQuestion }: IData) => {
  const [correctWanser, setCorrectWanser] = useState<string>("");
  const [wansers, setWansers] = useState<string[] | null>(null);
  const [wanser, setWanser] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [response, setResponse] = useState<boolean>(false);

  useEffect(() => {
    setResponse(false);
    setWanser("");
    setCorrectWanser(data!.correct_answer);
    const array = [...data!.incorrect_answers, data!.correct_answer];
    setWansers(shuffleArray(array));
  }, [data]);

  function shuffleArray(array: string[]) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handdleResponse(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (response) {
      setWanser("");
      getQuestion();
    } else {
      if (wanser) {
        setResponse(true);
        if (wanser == correctWanser) {
          setScore({
            you: score.you + 1,
            pc: score.pc,
          });
        } else {
          setScore({
            you: score.you,
            pc: score.pc + 1,
          });
        }
      } else {
        setError("Você precisa selecionar uma resposta!");
      }
    }
  }

  return (
    <section className={styles.questions}>
      <h2 dangerouslySetInnerHTML={{ __html: data!.question }} />
      <form onSubmit={handdleResponse}>
        <ul>
          {wansers?.map((item, index) => (
            <li key={index}>
              <Radio
                item={item}
                id={index.toString()}
                answer={wanser}
                setValue={setWanser}
                disable={response}
              />
            </li>
          ))}
        </ul>
        {error && <p>{error}</p>}
        {response ? (
          <>
            <Mesage hit={wanser == correctWanser} correct={correctWanser} />
            <Button text="Next" disabled={false} />
          </>
        ) : (
          <Button text="Send" disabled={false} />
        )}
      </form>
    </section>
  );
};

export default Question;
