function Form(){
  const handleSubmit = (event) => {
    // prevents logs from disappearing after one second
    event.preventDefault();

    console.log("Submitted Successfully!");
  }
  
  // a html form with a submit button
  return(
    <form onSubmit={handleSubmit}>
      <button type="submit"> Submit Form</button>
    </form>
  );
}

export default Form;