import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {completedtask } from "../Redux/Reducer/Reducer";
export default function CompletedTask() {

  const todoitem=useSelector(state=>state.todo.Ttask);
  const dispatch=useDispatch(); 


const Tdone=todoitem.filter(value=> value.tdone === true);

return (
    <>
   <div className='comp-cont ' style={{display:Tdone.length>0?"flex":"none"}}>
        <h5>Task Completed</h5>
      <ul >
        {Tdone.map(value=>(
          <li key={value.id}>
            <label className="container">
               <input type="checkbox" onClick={() => dispatch(completedtask(value.id))} checked/>
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
        {/* <input type='checkbox'  onClick={()=>dispatch(completedtask(value.id))} checked/>
            <strike>{value.title}</strike> */}
            </li>

        ))}

      </ul>
   </div>
    </>
  )
}
