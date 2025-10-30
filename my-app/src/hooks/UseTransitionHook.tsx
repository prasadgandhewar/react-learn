import react, { useState, useTransition } from 'react';

export default function UseTransitionHook() {
    const [count, setCount] = useState();
    const [list, setList] = useState<Array<Number>>([]);
    const [isPending, startTransition] = useTransition();

    function handleChange(e: any) {
        console.log(e.target.value);
        setCount(e.target.value);

        startTransition(() => {
            const lst = longRunning();
            setList(lst);
        })


    }

    function longRunning() {
        const ss = [];
        for (let index=0; index<20000; index++) {
            ss.push(index);
        }
        return ss;
    }


    return(
        <>
            <input type='text' value={count} onChange={handleChange}></input>
            {isPending ? "Loding...." : list.map((value: any) => <p key={value}>{value}</p>)}
        </>
    )
}