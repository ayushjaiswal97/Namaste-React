import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItems: (state, action) => {
            // Redux Toolkit -> uses immer behind the scene
            // Mutating the state here
            state.items.push(action.payload);
        },
        removeItems: (state, action) =>{
            state.items.pop();
        }, 

        clearItems: (state, action) =>{
            // RTK - either Mutate the existing state or return a new State
            // state.items.length = 0; //originalState = []

            return { items: [] }; // this new object [] will be replaced inside originalState = { items: [] }
        },
    },
});

export const { addItems, removeItems, clearItems  } = cartSlice.actions;

export default cartSlice.reducer;