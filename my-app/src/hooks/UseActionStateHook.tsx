"use client";

import react, { useActionState } from 'react'
import addUserServer from './useActionStateServer';


// async function addUser(previousState: Array<object>, formData: FormData) {
//     const form = Object.fromEntries(formData);
//     await delay(2000);
//     //const user = await addUserInDB(form);
//     // const allUsers = [...previousState, user];
//     // console.log(allUsers);
//     return [...previousState, form];
// }

// async function addUserInDB(form: any) {

//     await delay(2000);
//     return form;
// }

// const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

export default function UseActionStateHook() {

    const [data, submitAction, isPending] = useActionState<any, any>(addUserServer, []);

    return (
        <>
            <form action={submitAction}>
                <div>
                    <span>First name: </span>
                    <input type='text' name='firstname'></input>
                </div>
                <div>
                    <span>Last name: </span>
                    <input type='text' name='lastname'></input>
                </div>
                <div>
                    <button>{isPending ? 'Submitting...' : 'Submit'}</button>
                </div>
            </form>
            <div>
                <h2>List of users</h2>
                <div>
                    {data && data.map((item: any) => <span>{item.firstname} {item.lastname}</span>)}
                </div>
            </div>
        </>
    )
}