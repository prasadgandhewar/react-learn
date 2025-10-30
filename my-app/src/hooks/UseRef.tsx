import { useEffect, useRef } from "react";

const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (<>
        <div>UseRef</div>
        <input type="text" ref={inputRef} />
    </>);
}

export default UseRef;