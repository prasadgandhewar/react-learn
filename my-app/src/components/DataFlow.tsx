import react, { memo, useState } from 'react'

export const DataFlow = () => {
    const [dummy, setDummy] = useState('');
    const logMessage = (msg: string) => {
        setDummy(msg + Math.random().toString());
        console.log(msg);
        alert(msg);
    }

    return (<>
                <div><h1>Data Flow</h1></div>
                <Child logMsg={logMessage} msg={dummy}></Child>
                <Child2 value="This is child 2"></Child2>
            </>
            )
}

const Child = memo(({ logMsg, msg }: any) => {
    console.log("This is child 1",  msg);
    return (
        <>

            <div><button onClick={() => logMsg("hello")}>Show</button></div>
        </>
    )
})

const Child2 = memo(({value}: {value: string}) => {
    console.log(value);
    return (
        <>
            <span>{value}</span>
        </>
    )
})