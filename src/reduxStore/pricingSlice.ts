import { createSlice } from "@reduxjs/toolkit";

interface prisingButton{
    button:boolean
}
const initialState:prisingButton={
    button:false
}

const pricingSlice = createSlice({
  name: 'counter', 
  initialState,  
  reducers: {      
    toggleButton:(state,action)=>{
        state.button=action.payload
    }
  },
});

export const {toggleButton}=pricingSlice.actions;
export default pricingSlice.reducer;