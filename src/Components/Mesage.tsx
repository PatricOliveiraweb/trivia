import React from "react";

interface Imesage {
  hit: boolean;
  correct: string;
}

const Mesage = ({ hit, correct }: Imesage) => {
  if (hit)
    return (
      <h2>
        &#129321; Congrants bro ! You got it “{correct}” is the correct answer!
      </h2>
    );
  else
    return (
      <h2>
        &#129313; Fuck bro ! The correct answer is “{correct}” , better lucky
        next time.
      </h2>
    );
};

export default Mesage;
