function User(props){
  console.log(props)
  return (
    <div>
      <h4> Name: {props.name} Age: {props.age} <button onClick={props.function}> ClickMe </button> </h4>
      <p> {props.name} is amazing! </p>
    </div>
    
  );
}

function SecondUser(props){
  return(
    <div>
      <p>
        {props.name} will be {props.age + 1} years old next year
      </p>
    </div>
  );
}

export { User, SecondUser };