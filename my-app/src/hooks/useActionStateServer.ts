"use server";

async function addUserServer(previousState: Array<object>, formData: FormData) {
    const form = Object.fromEntries(formData);
    await delay(2000);
    //const user = await addUserInDB(form);
    // const allUsers = [...previousState, user];
    // console.log(allUsers);
    return [...previousState, form];
}

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

export default addUserServer;