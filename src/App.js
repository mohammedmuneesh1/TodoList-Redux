
import "./Styles/App.css";
import "./Styles/Todo.css"

import { useSelector } from "react-redux";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const theme = useSelector(state=>state.todo.theme);
  return (
    <div className={theme ? 'app-bg-day' : 'app-bg-night'}>
      <Navbar/>
      <Home/>  
      <Footer/>
   </div>
  );
}

export default App;
