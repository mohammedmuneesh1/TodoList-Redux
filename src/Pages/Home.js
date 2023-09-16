import React from 'react'
import Navbar from '../Components/Navbar'
import Todo from '../Components/Todo'
import Footer from '../Components/Footer'


export default function Home() {
  return (
  
    <>
{/*Render the navbar component */}
    <Navbar/>
    {/* Render the todo component */}
    <Todo/>
    
 
    </>
  )
}
