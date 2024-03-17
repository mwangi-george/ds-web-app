function Data(){
  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }
  return(
    <div>
      <button onClick={getData}>Fetch Data</button>
      <p>George -- george@example.com</p>
    </div>
  );
}

export default Data;