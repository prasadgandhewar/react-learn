import react, { useState } from 'react'

export const DynamicForm = () => {
    const [fields, setFields] = useState<any[]>([]);

    const addField = () => {
        setFields([...fields, {type: 'input', label: 'Field Title'}]);
    }

    const removeField = () => {
        fields.pop();
        setFields([...fields]);
    }
    return (
        <>
            <div><h1>Dynamic Form</h1></div>
            <div>
                {fields.map((field, index) => {
                    return (<><span>{field?.label}</span> <input type={field?.type} value={field?.value} key={index}></input></>)
                })}
            </div>
            <div><button onClick={addField}>Add Field</button></div>
            <div>{fields.length > 0 && <button onClick={removeField}>Remove Field</button>}</div>

        </>
    )
}