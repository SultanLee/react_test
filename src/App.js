/* eslint-disable */
import React from "react";
import "antd/dist/antd.css"

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Mainpage from './components/views/Mainpage'
import Login from './components/views/Login'
import Register from './components/views/Register'
import Main from './components/views/Main'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element = {<Main/>}/>
              <Route exact path="/mainpage" element = {<Mainpage/>}/>
              <Route exact path="/login" element = {<Login/>}/>
              <Route exact path="/register" element = {<Register/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

