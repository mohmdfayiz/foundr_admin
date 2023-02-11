import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "showModal",
    initialState:{
        show : false
    },
    reducers:{
        setShow: (state) => { 
            state.show = !state.show
        }
    }
})

export const {setShow} = modalSlice.actions;
export default modalSlice.reducer;