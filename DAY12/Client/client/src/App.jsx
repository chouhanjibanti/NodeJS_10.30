import React from "react";
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"
import { Route,Routes } from "react-router-dom";


const App = () => {
  return (
   <div>
      <Routes>
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/login" element= {<Login/>}/>
      </Routes>
   </div>
  )
}

export default App