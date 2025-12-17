import react, { memo, ReactEventHandler, useCallback, useMemo, useState } from 'react';

export const CounterPlain = () => {
    const [count, setCount] = useState(0);
console.log('created');
    const handleCount = useCallback(() => {
        setCount(c => c + 1);
    }, [])

    return (
        <>
            <div style={{ fontWeight: "500", padding: "20px" }}>Counter</div>
            <div>
                <span style={{ padding: "10px" }}><button style={{ fontWeight: "300", }} onClick={() => setCount(count -1)}>-</button></span>
                <span>{count}</span>
                {/* <span style={{ padding: "10px" }}><button style={{ fontWeight: "300" }} onClick={handleCount}>+</button></span> */}
                <Increment onClick={handleCount}></Increment>
            </div>
        </>
    )
}

const Increment = memo(({onClick}: {onClick: ReactEventHandler}) => {
    console.log("child renders.")
    return (
        <span style={{ padding: "10px" }}><button style={{ fontWeight: "300" }} onClick={onClick}>+</button></span>
    )
})