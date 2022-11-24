import React from 'react';
import {add, Grzegorz, Person, returnAvg} from "./zadania/3_zadania/typescript";

function App() {
  add(2,5);
  console.log(Person);
  console.log(Grzegorz.getNames());
  return (
    <div className="App">
      {returnAvg([1,2,3,4,5])}
    </div>
  );
}

export default App;
