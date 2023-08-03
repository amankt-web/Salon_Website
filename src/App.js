import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import Nav from "./components/Nav";
import PrivateComponent  from "./components/PrivateComponent";
import Login from "./components/Login";

import SignUp from "./components/SignUp";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element ={<PrivateComponent/>}>
          <Route path="/Home" element={<h1>product listing element</h1>}></Route>
          <Route path="/blog" element={<h1>Blog to the prediction</h1>}></Route>
          <Route path="/update"element={<h1>Update listing element</h1>}></Route>
          <Route path="/logout" element={<h1>Logged Out Sucessfully</h1>}></Route>
          <Route path="/profile" element={<h1>Profile Visit</h1>}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path ="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
