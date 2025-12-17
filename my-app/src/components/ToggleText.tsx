import react, { useState } from "react"

export const ToggleText = () => {
    const [display, setDisplay] = useState(false);
    const names = ["a", "b", "c", "d"];
    const [active, setActive] = useState(true);

    return (
        <>
            <div><h1>Toggle Demo</h1></div>
            <div>{display && names.map(c => <li key={c}>{c}</li>)}</div>
            <button style={{backgroundColor: active ? "green" : "grey"}} onClick={() => setDisplay(c => !c)}>Toggle Text</button>
            <button onClick={c => setActive(c => !c)}>Toggle Active</button>
        </>
    )
}