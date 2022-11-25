import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface StoperType {
    "isCounting": boolean,
    "value": number,
    "list": number[]
}

export const initialState : StoperType = {
    "isCounting": false,
    "value": 0,
    "list": []
}

export const stoperSlice = createSlice({
    name: 'stoper',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        start: (state) => {
            state.isCounting = true;
        },
        stop: (state) => {
            state.isCounting = false;
        },
        addToList: (state) => {
            state.list.push(state.value);
        },
    },
});

export const {
    increment,
    decrement,
    incrementByAmount,
    start,
    stop,
    addToList
} = stoperSlice.actions;

export default stoperSlice.reducer;
