import react, { useState } from 'react'

export const SimpleForm = () => {
    const [name, setName] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submitted name is: ${name}`);
    }
    const handleSubmit2 = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submitted name is 2: ${name}`);
    }
    return (
        <>
            <form onSubmit={handleSubmit2}>
                <div><span>Enter Name: </span><span><input type='text' onChange={e => setName(e.target.value)}></input></span></div>
                <div><button>Submit</button></div>

            </form>
        </>
    )
}