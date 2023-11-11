import { useState } from "react";
import {PropTypes} from "prop-types"

export const CounterApp = ( { value } ) => {
    // console.log(props);
    const[ counter, setCounter ] = useState(value)

    const handleAdd = ()=>{
        // console.log('+1')
        setCounter( counter + 1 );
        // setCounter( (c)=> c + 1 );
    }

    const handleSubstract = ()=>{
        setCounter( (c)=> c - 1 );
    }

    const handleReset = ()=>{
        setCounter( value );
    }

    return (
        <>
            <h1>Counter</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}