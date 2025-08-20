import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItems: (state, action) =>{

            // vanialla(older) Redux => DON'T MUTATE STATE
            const newState = [...state];
            newState.items.push(action.payload);
            return newState;

            // mutating the state here
            state.items.push(action.payload);
        },
        removeItems: (state, action) =>{
            state.items.pop();
        },
        clearItems: (state, action) =>{
            state.items.length = 0; //[]
        },
    },
});

export const { addItems, removeItems, clearItems  } = cartSlice.actions;

export default cartSlice.reducer;