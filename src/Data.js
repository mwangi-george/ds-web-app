import { useState } from "react";

function Data(){
  const [user, setUser] = useState(null)
  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser(data.results[0]);
      })
  }
  return(
    <div>
      <button onClick={getData}>Fetch Data</button>
      {user ? <p>{user.name.first} {user.name.last}- {user.email}</p> : <p>User Not Found</p>}
    </div>
  );
}

/*
Module Resources
The following links will help you get more into detail of react. Attached you will also find all the source codes of each lecture of this section.

React Hooks: https://reactjs.org/docs/hooks-overview.html (It would be great for you to read about them and play with them. There are great hooks that will be usefull in the future like useEffect, useRef or create your own hooks).

React useState: https://reactjs.org/docs/hooks-reference.html#usestate

JavaScript Event: https://developer.mozilla.org/en-US/docs/Web/API/Event (we talked about this in the Build our First Form lecture. This will explain with more detail how does it work and what properties can you use.)

Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */

export default Data;