import react, { useState } from "react"

export const ToggleText = () => {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <div><h1>Toggle Demo</h1></div>
            <div>{display && 'This is dummay text'}</div>
            <button onClick={() => setDisplay(c => !c)}>Toggle Text</button>
        </>
    )
}