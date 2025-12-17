

function incrementCounter(value: number) {
    delay(2000);
    return value;
}


const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms))

export default incrementCounter;