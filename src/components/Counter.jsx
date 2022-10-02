import React, {useState} from 'react'

const Counter = () => {
    const [state, setState] = useState(0);

    function plus() {
        setState(state + 1)
    }

    function minus() {
        setState(state - 1)
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={plus}>
                +
            </button>
            <button onClick={minus}>
                -
            </button>
        </div>
    )
}

export default Counter
