
import { useEffect, useState } from 'react';
import './App.css';
import { Display } from './components/display';
import { Keyboard } from './components/keyboard';

function App() {


  const operators = ['AC', '/', 'x', '+', '-', '='];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [input, setInput] = useState(0);
  const [output, setOutput] = useState('');
  const [calculatorData, setCalculatorData] = useState('');


  //functions in the switch cases

  const handleSubmit = () => {
    const total = eval(calculatorData);
    setInput(`${total}`);
    setOutput(`${total}`);
    setCalculatorData(`${total}`);
  };

  const handleClear = () => {
    setOutput('');
    setInput('0');
    setCalculatorData('');
  };

  const handleNumbers = (value) => {

    if (!calculatorData.length){
      setInput(`${value}`);
      setCalculatorData(`${value}`);
    }
    else {
      if(value === 0 && (calculatorData=== '0' || input=== '0')){
        setCalculatorData(`${calculatorData}`)
      }
      else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator = lastChat === '*' || operators.includes(lastChat);

        setInput(isLastChatOperator ? `${value}` : `${input}${value}` );
        setCalculatorData(`${calculatorData}${value}`);

      }
    }

  };

  const dotOperator = () => {
    const lastChat = calculatorData.charAt(calculatorData-1);
    if(!calculatorData.length){
      setInput('0.');
      setCalculatorData('0.');
    }
    else{
      if(lastChat === '*' || operators.includes(lastChat)){
        setInput('0.');
        setCalculatorData(`${calculatorData}0.`);
      }
      else{
        setInput(
          lastChat === '.' || input.includes('.') ? `${input}` : `${input}.`
        );
        setCalculatorData(
          lastChat === '.' || input.includes('.') ? `${calculatorData}` : `${calculatorData}.`
        )
      }
    }
  };   

  const handleOperators = (value) => {
    if(calculatorData){
      setInput(`${value}`);

      const beforeLastChat = calculatorData.charAt(calculatorData-2);
      const beforeLastChatIsOperator = operators.includes(beforeLastChat) || beforeLastChat === '*';
      const lastChat = calculatorData.charAt(calculatorData-1);
      const lastChatIsOperator = operators.includes(lastChat) || lastChat === '*';

      const validOperator = value === 'x' ? '*' : value;

      if(
        (lastChatIsOperator && value !== '-') || beforeLastChatIsOperator && lastChatIsOperator){
          if(beforeLastChatIsOperator){
            const updatedValue = `${calculatorData.substring(0, calculatorData-2)}${validOperator}`;
            setCalculatorData(updatedValue)
          }
          else{
            setCalculatorData(`${calculatorData.substring(0, calculatorData-1)}${validOperator}`)
          }
      }
      else{
        setCalculatorData(`${calculatorData}${validOperator}`);
      }
      
    }
  };

  //handleInput is called when any key is clicked
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
        dotOperator();
        break;
      case operator:
        handleOperators(value);
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
