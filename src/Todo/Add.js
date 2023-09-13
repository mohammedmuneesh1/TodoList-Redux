import React from "react";
import "./Todo.css";
export default function Add() {
  return (
<>
<form style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div className="add-container">
      <input type="text" placeholder="Add Item" />
      <button className="button">Add</button>
    </div>
         </form>
         </>
  );
}
