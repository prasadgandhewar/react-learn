import { createAsyncThunk } from "@reduxjs/toolkit";

const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async(value: number) => {
        delay(2000);
        return value;
    }
)

export default incrementAsync;

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms))