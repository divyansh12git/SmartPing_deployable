import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDataSlice=createSlice({
    name:'userData',
    initialState:{
        name:""
    },
    reducers:{
        updateName:(state,action)=>{
            return action.payload;
        }
    }
});

export const action=userDataSlice.updateName;
const store=configureStore({
    reducer:userDataSlice.reducer
})
export default store;