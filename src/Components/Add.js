import React from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../Redux/Reducer/Reducer";
export default function Add() {
  const dispatch=useDispatch();


  const addtaskfn=(e)=>{
    e.preventDefault(); 
    const task=e.target.t1.value.trim();
    if(task===""){
      alert("Kindly fill out the task  before continuing.")
      return;
    }
    else{
      dispatch(addtask(task))
      e.target.reset();
    }
  }



  return (
<>
<form onSubmit={addtaskfn} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div className="add-container">
      <input type="text" name="t1" placeholder="Add Item" autoComplete="off" />
      <button className="button">Add</button>
    </div>
         </form>
         </>
  );
}
