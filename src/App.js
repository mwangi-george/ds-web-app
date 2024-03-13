import logo from './logo.svg';
import './App.css';
// import { User, SecondUser, ThirdUser } from './User';
import Form from './Form';
import Data from './Data';

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
        <Data />
        <Form />
        {/* <User name = {name} age = {age} function = {ClickMe} />
        <SecondUser name = {name} age = {age} function = {add} /> 
        <ThirdUser /> */}
      </header>
    </div>
  );
}

export default App;
