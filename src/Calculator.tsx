// Calculator.tsx
import React, { useState } from "react";
import "./Calculator.css";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  //*function to handle the butotn input 
  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  //AC BUTTON function to clear the calculator
  const handleClear = () => {
    setInput("");
  };

  //!Calculating the input values inserted  by user based on calculation method
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    //!Parent div for whole app and  to center it
    <div className="container">
      {/* //!our div in  which we will create the Calculator's buttons and everything */}
      <div className="calculator">
        {/* //*To display which button we have clicked on , so the output displayer */}
        <div className="display">{input}</div>

        {/* //Buttons inside the calculator */}
        <div className="buttons">
          <button></button>
          {/* <button onClick={() => handleButtonClick('NULL')}>+/-</button> */}
          <button onClick={handleClear}>AC</button>
          <button onClick={() => handleButtonClick("%")}>%</button>
          <button onClick={() => handleButtonClick("/")} className="operator">
            ÷
          </button>

          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("*")} className="operator">
            ×
          </button>

          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")} className="operator">
            -
          </button>

          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")} className="operator">
            +
          </button>
        </div>
        <div className="bottom">
            <button className="zero" onClick={() => handleButtonClick("0")}>
              0
            </button>
            <button onClick={handleCalculate} className="operator">
              =
            </button>

            <button onClick={() => handleButtonClick(".")} className="operator">
              •
            </button>
          </div>
      </div>
    </div>
  );
};

export default Calculator;
