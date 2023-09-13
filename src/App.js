
import "./App.css";
import Navbar from "./Todo/Navbar";
import Todo from "./Todo/Todo";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(state=>state.todo.theme);
  return (
    <div className={theme ? 'app-bg-day' : 'app-bg-night'}>
    <Navbar/>
    <Todo/>
   </div>
  
  );
}

export default App;
