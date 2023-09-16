import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { ThemeChange } from "../Redux/Reducer/Reducer";
import { debounce} from "lodash";

export default function Navbar() {

    // Get access to the dispatch function from Redux
  const dispatch = useDispatch();


  
  // Debounce the ThemeChange dispatch to prevent rapid toggling
  const debouncedThemeChange = debounce(() => {
    dispatch(ThemeChange());
  }, 300); // Adjust the debounce delay as needed

  return (
    <>
    {/*Navbar component with transparent background */}
      <MDBNavbar style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} light>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className="mb-0 h1" style={{fontFamily:"sans-serif",caretColor:"transparent",fontWeight:"bold"}}>
            TODO LIST
          </MDBNavbarBrand>
          <div className="toggle-switch" onClick={debouncedThemeChange}>
            <label className="switch-label">
              <input type="checkbox" className="checkbox"  />
              <span className="slider"></span>
            </label>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
