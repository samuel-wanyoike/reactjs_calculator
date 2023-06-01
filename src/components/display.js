export const Display = (props) => {
    return (
        <div className='display' id='display'>
            <span className='output'>{props.output}</span>
            <span className='input'>{props.input}</span>
        </div>
    )
}