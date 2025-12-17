import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import incrementAsync from "./thunk";

export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        modifyCount: (state, action:PayloadAction<number>) => {
            console.log("modifying count...")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.count += action.payload
        })
    }
})

 

export const { increment, decrement, incrementByAmount, modifyCount } = counterSlice.actions;

export default counterSlice.reducer;