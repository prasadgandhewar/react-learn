import react, { useCallback, useState } from "react"

export const ToggleText = () => {
    
    const [active, toggleActive] = useToggle(true);
    const [isVisible, toggleVisibility] = useToggle(false);
    const [display, setDisplay] = useToggle(false);
    const names = ["a", "b", "c", "d"];
    return (
        <>
            <div><h1>Toggle Demo</h1></div>
            <div>{display && names.map(c => <li key={c}>{c}</li>)}</div>
            <button style={{ backgroundColor: active ? "green" : "grey" }} onClick={setDisplay}>Toggle Text</button>
            <button onClick={() => toggleActive}>Toggle Active</button>

            <div>
                <button onClick={toggleVisibility}>
                    {isVisible ? 'Hide Message' : 'Show Message'}
                </button>
                {isVisible && <p>Hello! This message toggles on and off.</p>}
            </div>
        </>
    )
}


// const useToggle = (initVal: boolean) => {
//     const [active, setActive] = useState(initVal);
//     return [active, () => setActive(c=> !c)]; 
// }

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    // Use useCallback for performance optimization (memoizes the function)
    const toggle = useCallback(() => {
        setState(prevState => !prevState);
    }, []); // Empty dependency array means it's created once

    // Return the state and the toggle function
    return [state, toggle] as const;
};

