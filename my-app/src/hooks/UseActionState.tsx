import {useActionState, useCallback, useEffect, useEffectEvent} from "react";

async function myFunction(prevState: Array<object>, formData: FormData) {
    await delay(2000);
    const result = [...prevState, Object.fromEntries(formData)];
    return result;
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default function UseActionState() {
    const [data, action, isPending] = useActionState<any, any>(myFunction, []);

    const doFilter = useCallback((data: any) => {
        if (data) {
            const filtered = data.filter((item: any) => item.firstname && item.firstname.startsWith('A'));
            console.log('Filtered Data:', filtered);
        }
    }, []);

    useEffect(() => {
        doFilter(data);
    }, [data, doFilter]);

    return (
        <>
            <div>UseActionState</div>
            <form action={action}>
                <input type="text" name="firstname" />
                <input type="text" name="lastname" />
                <button type="submit">Load Data</button>
                {isPending && <div>Loading...</div>}
            </form>
            <div>
                {console.log('data', data)}
                {data && data.map((item: any) => (
                    <div key={item.firstname}>{item.firstname}</div>
                ))}
            </div>
        </>
    );
}