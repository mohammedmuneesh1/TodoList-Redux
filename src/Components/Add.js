import React from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../Redux/Reducer/Reducer";
export default function Add() {
  const dispatch = useDispatch();

  // Fn to handle adding a task
  const addtaskfn = (e) => {
    e.preventDefault(); // Prevent defaultform submission behavior
    const task = e.target.t1.value.trim(); //get value by removing whitespace using trim()

    //validating whether the  field contains a value
    if (task === "") {
      alert("Kindly fill out the task  before continuing.");
      return; //stop the exection if the task field is empty
    } else {
      // Dispatch the addtask action with the task as payload
      dispatch(addtask(task));
      e.target.reset();
    }
  };

  return (
    <>
      {/*Form for adding task */}
      <form
        onSubmit={addtaskfn}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="add-container">
          <input
            type="text"
            name="t1"
            placeholder="Add Item"
            autoComplete="off"
          />
          <button className="button">Add</button>
        </div>
      </form>
    </>
  );
}
