import React, { } from 'react';
import {
  Link
} from "react-router-dom";

import SwitchComp from './components/switch';

function App() {
  return (

    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={"/todolist/" + window.localStorage.getItem('token')}><span>TodoList</span></Link>
          </li>
          <li>
            <Link to={"/contentdata/" + window.localStorage.getItem('token')}><span>ContentDatas</span></Link>
          </li>
          <li>
            <Link to={"/comments/" + window.localStorage.getItem('token')}><span>Comment</span></Link>
          </li>
          <li>
            <Link to={"/contacts/" + window.localStorage.getItem('token')}><span>Contact</span></Link>
          </li>
          <li>
            <Link to={"/projects/" + window.localStorage.getItem('token')}><span>Projects</span></Link>
          </li>
          <li>
            <Link to={"/errors/" + window.localStorage.getItem('token')}><span>Errors</span></Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/exit/" + window.localStorage.getItem('token')}><span>Exit</span></Link>
          </li>
        </ul>
      </nav>




      <main>
        <SwitchComp />
      </main>






    </div >

  );
}



export default App;


// Buuild ederken server-side express js icerisinde get methodunda sendFile ile gonder.