import React, { useOptimistic, useState } from 'react';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default function UseOptimistic() {
    const [todos, setTodos] = useState<string[]>([]);
    const [todo, setTodo] = useState<string>('');
    const [optimisticTodo, setOptimisticTodo] = useOptimistic<string[]>(todos);
    const [isPending, startTransition] = React.useTransition();
    return (
        <>
            <div>UseOptimistic</div>
            <input type="text" onKeyDown={(e) => {
                startTransition(async () => {
                    if (e.key === 'Enter') {
                        const newTodo = e.currentTarget.value;
                        setTodo(newTodo);
                        // setTodos([...todos, newTodo]);
                        // setOptimisticTodo([...optimisticTodo, newTodo]);
                        // await delay(2000);
                        // setTodos([...todos, newTodo+' server'])
                    }
                });
            }} />
            <button onClick={(e) => {
                startTransition(async () => {
                    // if (e.key === 'Enter') {
                        // const newTodo = e.currentTarget.value;
                        // setTodo(newTodo);
                        // setTodos([...todos, newTodo]);
                        setOptimisticTodo([...optimisticTodo, 'mytodo']);
                        await delay(2000);
                        setTodos([...todos, 'mytodo' + ' server'])
                    // }
                });
            }}>Sync with server</button>
            <ul>
                {optimisticTodo.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}