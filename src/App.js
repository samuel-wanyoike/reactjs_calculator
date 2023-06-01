
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

  const handleInput = (value) => {
    console.log(value);
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
