
import "./Styles/App.css";
import "./Styles/Todo.css"

import { useSelector } from "react-redux";

import Home from "./Pages/Home";


function App() {
  const theme = useSelector(state=>state.todo.theme);
  return (
    <div className={theme ? 'app-bg-day' : 'app-bg-night'}>
      <Home/>
 
   </div>
  
  );
}

export default App;
