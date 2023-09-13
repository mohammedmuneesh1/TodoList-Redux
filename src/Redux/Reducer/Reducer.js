import { createSlice } from "@reduxjs/toolkit";

export const todoslice=createSlice({
    name:'todo',
    initialState:{
        value:0,
        theme:true
       },
       reducers:{
        ThemeChange: (state) => {
            state.theme = !state.theme;
          },
       },

});
export const { ThemeChange } = todoslice.actions;
export default todoslice.reducer


 


