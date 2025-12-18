import react, { ComponentType, JSX } from 'react'

type extenedProps = {
    address: string
}

export const withLogger = <P extends extenedProps>(WrappedComponent: ComponentType<P>) => {
    return ({...props}: any): JSX.Element => {
        console.log("Coming from HOC - ", props.name)

        return <WrappedComponent {...props} address="Pune"></WrappedComponent>
    }
}


export const User = ({name, age, address}: any) => {
    return (
        <>
            <div><h1>{name} = {age} = {address}</h1></div>
        </>
    )
}


export const UserWithLogger = () => {

    const UserLogger = withLogger(User);

    return (
        <UserLogger name="Prasad" age="10"></UserLogger>
    )
}