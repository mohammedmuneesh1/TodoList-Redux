import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    value:0,
    theme:true,
    Ttask:[{
        id:1,
        title:"TODO ITEM 1",

    },
{
    id:2,
    title:"TODO ITEM 2"
}]
}

export const todoslice=createSlice({
    name:'todo',
    initialState:INITIAL_STATE,
       reducers:{
        ThemeChange: (state) => {
            state.theme = !state.theme;
          },
          addtask:(state,action)=>{
            const LID=state.Ttask.reduce((total,value)=> Math.max(total,value.id) ,0);
            const NewItem={
                id:LID + 1,
                title:action.payload,
                completed:false
            }
            state.Ttask.push(NewItem);
            console.log(state.Ttask)
          },
          edittask:(state,action)=>{
            const {id,title}=action.payload;
            const UpdatedTaskValue=state.Ttask.find(value=> value.id === id)
            
            console.log(UpdatedTaskValue.id);
            UpdatedTaskValue.title=title;
          },

          deletetask: (state, action) => {
            console.log(action.payload)
            const updatedTasks = state.Ttask.filter((value) => value.id !== action.payload);
            console.log(updatedTasks);
            state.Ttask=updatedTasks;
          },
    
       },

});

export const { ThemeChange,addtask,edittask,deletetask } = todoslice.actions;
export default todoslice.reducer


 


