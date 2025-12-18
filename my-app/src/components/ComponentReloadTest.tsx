import react, { useEffect, useState } from 'react'

export const ComponentReloadTest = () => {
    const [count, setCount] = useState(0);
    console.log("component reloaded - ");
    useEffect(() => {
        console.log("useeffect executed -", Math.random());
    }, [])

    return (
        <>
            <div style={{ fontWeight: "500", padding: "20px" }}>Counter</div>
            <div>
                <span style={{ padding: "10px" }}>
                    <button style={{ fontWeight: "300" }} onClick={() => setCount(p => p + 1)}>-</button>
                </span>
                <span>{count}</span>
            </div>
        </>
    )

}