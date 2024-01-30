import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {completedtask } from "../Redux/Reducer/Reducer";
import Swal from 'sweetalert2';
export default function CompletedTask() {
  const todoitem=useSelector(state=>state.todo.Ttask);
  const dispatch=useDispatch(); 
//Extracting object[Task] that user completed [checked]
const Tdone=todoitem.filter(value=> value.tdone === true);
//event delegation start here
const revertTask = (e, value) => {
  // Checking if the clicked element has the class 'comchk'
  if (e.target.classList.contains('comchk')) {
    Swal.fire({
      // title: 'Are you sure?',
      text: "Re-add this task?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add',
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch the action to mark the task as completed
        dispatch(completedtask(value.id));
        Swal.fire({
          // title: 'Deleted!',
          text: 'Added back to the list.',
          icon: 'success',
        });
      }
    });
  } else {
    // If the clicked element does not have the class 'comchk', uncheck the checkbox
    e.currentTarget.querySelector('.comchk').checked = false;
    // The above line prevents the checkbox from being unchecked when clicking the cancel button
  }
};
//event delegation end here
return (
    <>
    {/* completedtask component start here */}
   <div className='comp-cont ' style={{display:Tdone.length>0?"flex":"none",}}>
        <h5>Task Completed</h5>
      <ul >
        {Tdone.map(value=>(
          <li key={value.id}>
            <label className="container"  onClick={(e)=>revertTask(e,value)}>
               <input type="checkbox" className='comchk' defaultChecked/>
               {/*onClick={() => dispatch(completedtask(value.id))}*/}
                 <svg viewBox="0 0 64 64" height="2em" width="2em">
                   <path
                     d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                     pathLength="575.0541381835938"
                     className="path"
                   ></path>
                 </svg>
                 <span className="text">
                   {value.title}
                 </span>
               </label>
            </li>
        ))}
      </ul>
   </div>
    </>
  )
}
