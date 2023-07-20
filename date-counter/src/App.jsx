import { useState } from "react";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);
  // const handleStepMinus = () => {
  //   if (step > 0) {
  //     setStep((s) => s - 1);
  //   }
  // };

  const handleCountMinus = () => {
    if (count > 0) {
      setCount((c) => c - step);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            step > 0 && setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <span>Step:{step}</span>
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count:{count}</span>
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default App;
