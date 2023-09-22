
import "./Styles/App.css";
import "./Styles/Todo.css"

import { useSelector } from "react-redux";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { myData } from "./Context/MyData";

function App() {
  const theme = useSelector(state=>state.todo.theme);
  return (
    <>
    <div className={theme ? 'app-bg-day' : 'app-bg-night'}>
      <Home/> 
   </div>
  <myData.Provider value={theme}>
  <Footer/>
  </myData.Provider>

  


   </>
  );
}

export default App;
