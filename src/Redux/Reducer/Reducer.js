import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    value:0,
    theme:true,
    Ttask:[{id:1,title:"LET'S ORGANIZE TASKS HERE 📃✒️",tdone:false}]
}
 const todoslice=createSlice({
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
                tdone:false
            }
            state.Ttask.push(NewItem);
          },
          edittask:(state,action)=>{
            const {id,title}=action.payload;
            const UpdatedTaskValue=state.Ttask.find(value=> value.id === id)
            UpdatedTaskValue.title=title;
          },
          deletetask: (state, action) => {
            const updatedTasks = state.Ttask.filter((value) => value.id !== action.payload);
            state.Ttask=updatedTasks;
          },
          completedtask:(state,action)=>{
            const completed=state.Ttask.find (value=>value.id === action.payload);
            completed.tdone=!completed.tdone;
          }
       },
});
export const { ThemeChange,addtask,edittask,deletetask,completedtask } = todoslice.actions;
export default todoslice.reducer


 


