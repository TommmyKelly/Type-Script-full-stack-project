import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <input type='date' onChange={(e) => handleInput(e)} />
      </header>
    </div>
  );
}

export default App;
