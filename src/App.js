
import { useEffect, useState } from 'react';
import './App.css';
import { Display } from './components/display';
import { Keyboard } from './components/keyboard';

function App() {


  const operators = ['AC', '/', 'X', '+', '-', '='];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [input, setInput] = useState(0);
  const [output, setOutput] = useState('');
  const [calculatorData, setCalculatorData] = useState('');


  //functions in the switch cases

  const handleSubmit = () => {
    console.log('handlesubmit')
  };

  const handleClear = () => {};

  const handleNumbers = () => {};

  const dotOperator = () => {};

  const handleOperators = () => {};

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case '=':
        handleSubmit();
        break;
      case 'AC':
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case '.':
        dotOperator(value);
        break;
      case operator:
        handleOperators();
        break;
      default:
        break;
    }
  };

  const handleOutput = () => {
    setOutput(calculatorData);
  };

  useEffect(() => {
    handleOutput()
  }, [calculatorData]);
  
  return (
    <div className="App">
      <div className='calculator'>
        <Display input={input} output={output}/>
        <Keyboard handleInput={handleInput}/>
      </div>
    </div>
  );
}

export default App;
