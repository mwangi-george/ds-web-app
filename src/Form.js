import { useState } from "react";

function Form(){
  // react state to store data 
  const [form, setForm] = useState({name: "", email: ""})

  const handleSubmit = (event) => {
    // prevents logs from disappearing after one second
    event.preventDefault();

    console.log("Submitted Successfully!");
    console.log(form);
  }

  // function to execute each time a character is written in the name input field
  const onChange = (event) => {
    console.log("Name field Changed");

    // two variables storing data
    const name = event.target.name;
    const value = event.target.value;

    console.log("field is " + name + " and value is " + value);

    // maintain the structure of the state
    setForm({...form, [name]: value})

  }
  
  // a html form with a submit button
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={onChange} placeholder="First Name"></input>
      <input type="text" name="email" onChange={onChange} placeholder="Email"></input>
      <button type="submit"> Submit Form</button>
    </form>
  );
}

export default Form;