import { createSlice } from "@reduxjs/toolkit";



const pricingSlice = createSlice({
  name: 'counter', 
  initialState:{button:false},  
  reducers: {      
    toggleButton:(state,action)=>{
        state.button=action.payload
    }
  },
});

export const {toggleButton}=pricingSlice.actions;
export default pricingSlice.reducer;