
import "./App.css";
import "./Todo/Todo.css"
import Navbar from "./Todo/Navbar";
import Todo from "./Todo/Todo";
import { useSelector } from "react-redux";
import CompletedTask from "./Todo/CompletedTask";

function App() {
  const theme = useSelector(state=>state.todo.theme);
  return (
    <div className={theme ? 'app-bg-day' : 'app-bg-night'}>
    <Navbar/>
    <Todo/>
    <CompletedTask/>
   </div>
  
  );
}

export default App;
