import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const countRef = useRef(0);
    const [dummy, setDummy] = useState(0);
    let test = 0;


    useEffect(() => {
        countRef.current = countRef.current + 1;
        test = test + 1;
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [dummy]);
    console.log(dummy);
    const handleClick = () => {
        setDummy(Math.random());

    }

    return (<>
        <div>UseRef</div>
        <input type="text" ref={inputRef} />
        <p>{countRef.current}</p>
        <p>{test}</p>
        <button onClick={handleClick}>Change State</button>
    </>);
}

export default UseRef;