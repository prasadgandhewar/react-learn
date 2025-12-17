import react, { useReducer } from 'react'

type State = {
    count: number,
    value: string
}

const reducer = (state: State, action: { type: string }) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}


export const CounterWithReducer = () => {
    const initialState = { count: 0, value: '' }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div><h1>Counter with Reducer</h1></div>
            <div>
                <span style={{padding: "10px"}}><button onClick={() => dispatch({type: 'decrement'})}>-</button></span>
                <span>{state.count}</span>
                <span style={{padding: "10px"}}><button onClick={() => dispatch({type: 'increment'})}>+</button></span>
            </div>
        </>
    )


}