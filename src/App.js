import React, { useState } from "react";

 function App () {
 let Time = new Date().toLocaleTimeString();
 const [cTime , setCtime] = useState(Time);

 const updateTime = () => {
  Time = new Date().toLocaleTimeString();
  setCtime(Time);

  
 }
 setInterval(updateTime,1000);

  return(
  <div id="root">
    <h1> { cTime }</h1>

  </div>

  )
}

export default App;