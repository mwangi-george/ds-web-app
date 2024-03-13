import { useState } from "react";

// Component 1
function User(props){
  console.log(props);
  return (
    <div>
      <h4> Name: {props.name} Age: {props.age} <button onClick={props.function}> ClickMe </button> </h4>
      <p> {props.name} is amazing! </p>
    </div>
    
  );
}

// Component 2
function SecondUser(props){
  return(
    <div>
      <p>
        {props.name} will be {props.age + 1} years old next year
        <button onClick={props.function}>Add</button>
      </p>
    </div>
  );
}


// Component 3 with state management
function ThirdUser(){
  // initialise state
  const [counter, setCounter] = useState(0);

  // function to update state
  const increment = () => {
    setCounter(counter + 1)
  }

  console.log(counter)

  // component output
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p> You have clicked the button {counter} times</p>
    </div>
  )
}

export { User, SecondUser, ThirdUser };