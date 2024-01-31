import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetask, edittask, completedtask } from "../Redux/Reducer/Reducer";
import Swal from "sweetalert2";
export default function TodoTask() {
  const todoitem = useSelector((state) => state.todo.Ttask);
  const dispatch = useDispatch();
  const [showedit, setShowedit] = useState(null);
  const EIref = useRef();
  const Tpending = todoitem.filter((value) => value.tdone === false);

  // Use useEffect to focus on the edit input field when editing is enabled
  useEffect(() => {
    if (EIref.current && EIref.current.value !== "") {
      EIref.current.focus();
    }
  }, [showedit]);

  //Fn to handle editing a task [works when save button cliked]

  //event delegation start from here
  const handleItemClick = (e, value) => {
    if (e.target.type === "checkbox") {
      // Handle checkbox click
      setTimeout(() => {
        dispatch(completedtask(value.id));
      }, 500);
    } 
  };

  const editTaskBtnHandler = (taskId)=>{
    setShowedit(taskId);
  }
  const edittaskfn = (e, EID, editedvalue) => {
    e.preventDefault();
    dispatch(edittask({ id: EID, title: editedvalue }));
    setShowedit(null);
  };
  const deleteTask = (taskId)=>{
    dispatch(deletetask(taskId));
  }

  return (
    <div className="Task-Main">
      <ul style={{ display: Tpending.length > 0 ? "block" : "none" }}>
        {Tpending.reverse().map((value, index) => (
          <li key={value.id} onClick={(e) => handleItemClick(e, value)}>
            {showedit !== value.id ? (
              <>
                <label className="container">
                  <input type="checkbox" />
           
                    <svg viewBox="0 0 64 64" height="2em" width="2em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        className="path"
                      ></path>
                    </svg>
                 
                  <span className="text">{value.title}</span>
                </label>
                  {/* edit and delete button */}

                <div className="editicon" style={{ display: "flex" }}>
                  <button className="edit-button" onClick={()=>editTaskBtnHandler(value.id)}>
                    <svg className="edit-svgIcon" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                  </button>

                  <button className="delete-button" onClick={()=>deleteTask(value.id)}>
                    <svg className="delete-svgIcon" viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>
                </div>

              </>
            ) : (
              <>
                <div className=" w-100 d-flex justify-content-between">
                  <input
                    type="text"
                    className="editinput"
                    defaultValue={value.title}
                    ref={EIref}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;

                  <div className="editicon" style={{ display: "flex" }}>
                    {/*save button */}
                    <button
                      className="btnCloud"
                      onClick={(e) =>EIref.current.value.trim() ===""?Swal.fire("Add your task details for the to-do list."):edittaskfn(e, value.id, EIref.current.value)}>
                      {/* above onclick, giving condition that user can't save without entering any value */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="25"
                          height="25"
                          className="icon"
                        >
                          <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.20 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"></path>
                        </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
