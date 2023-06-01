
const calcData = [
    {id: 'clear', value: 'AC'},
    {id: 'divide', value: '/'},
    {id: 'multiply', value: 'x'},
    {id: 'seven', value: 7},
    {id: 'eight', value: 8},
    {id: 'nine', value: 9},
    {id: 'subtract', value: '-'},
    {id: 'four', value: 4},
    {id: 'five', value: 5},
    {id: 'six', value: 6},
    {id: 'add', value: '+'},
    {id: 'one', value: 1},
    {id: 'two', value: 2},
    {id: 'three', value: 3},
    {id: 'equals', value: '='},
    {id: 'zero', value: 0},
    {id: 'decimal', value: '.'},
  ];


const Key = ({keyData: {id, value}, handleInput}) => {
   return <button id={id} onClick={() => handleInput(value)}>{value}</button>;
};

export const Keyboard = (props) => {
    return (
        <div className="keys">
            {calcData.map((key) => {
                return <Key key={key.id} keyData={key} handleInput={props.handleInput}/>
            })}
        </div>
    );
};