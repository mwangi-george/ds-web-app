import logo from './logo.svg';
import './App.css';
import { User, SecondUser } from './User';

const ClickMe = () => {
  console.log("I got clicked")
}

const add = () => {
  AgeNew = 4 + 5
  console.log(AgeNew);
  return AgeNew
};


function App() {
  const name = "George"
  const age = 40
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React here
        </a>
        <User name = {name} age = {age} function = {ClickMe} />
        <SecondUser name = {name} age = {age} function = {add} />
      </header>
    </div>
  );
}

export default App;
