"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const logo_svg_1 = __importDefault(require("./logo.svg"));
require("./App.css");
function App() {
    const handleInput = (e) => {
        console.log(e.target.value);
    };
    return (<div className='App'>
      <header className='App-header'>
        <img src={logo_svg_1.default} className='App-logo' alt='logo'/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <input type='date' onChange={(e) => handleInput(e)}/>
      </header>
    </div>);
}
exports.default = App;
