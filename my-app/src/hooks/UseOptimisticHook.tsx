import react, { use, useEffect, useId, useOptimistic, useRef, useState, useTransition } from 'react'

type Todo = {
    id: Number;
    title: String;
}

const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

async function getTodos(todo?: Todo) {
    await delay(2000);
    return await fetch('https://dummyjson.com/todos')
        .then(res => res.json()).then((res) => {
            const lst: Todo[] = [];
            if (res && res.todos) {
                if (todo) {
                    lst.push({ id: todo.id, title: todo.title + 'server res'});
                }
                res.todos.map((item: any) => {
                    lst.push({ id: item.id, title: item.todo })
                })
                return lst;
            }
        });
}

export default function UseOptimisticHook() {
    const [todos, setTodos] = useState<Todo[]>();
    // const [todoTitle, setTodoTitle] = useState();
    const inputref = useRef<HTMLInputElement>(null);
    const randomId = useId();
    const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        getTodos().then((res) => {
            setTodos(res);
        });
    }, [])

    console.log(todos);
    async function addTodo() {
        const newID: Number = (todos?.length || 100) + 2;
        const newTodo: any = { id: newID, title: inputref?.current?.value };
        setOptimisticTodos((prevVal: any) =>  [newTodo, ...prevVal]);
        await delay(2000);
        getTodos(newTodo).then((res) => {
            setTodos(res);
        });
       // setTodos((prevVal: any) =>  [newTodo, ...prevVal]);


    }
    return (
        <>
            <h1>TODOs</h1>
            <div><p>Add todo: </p><input type='text' ref={inputref}></input></div>
            <div><button onClick={() => {(startTransition(() => addTodo()))}}>Add</button></div>

            <hr />
            {optimisticTodos?.map((item: any) => <p key={item.id}>{item.title}</p>)}

        </>
    )


}