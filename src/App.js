import React from 'react';
import logo from './logo.png';
import './App.css';
import Dis from "./components/display"
// import the display component to the app js file
function App(){
  return(      
    // header for the app 
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* name for the app */}
        <h1>Weather For You or Me</h1>
      </header>
      <Dis/>
    </div>
  )
}

export default App;
