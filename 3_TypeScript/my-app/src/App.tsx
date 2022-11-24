import React from 'react';
import {add, Grzegorz, Person, returnAvg} from "./zadania/3_zadania/typescript";
import artist from './data/artist';
import AtrybutyZadanie3 from "./zadania/4_zadania/AtrybutyZadanie3";
import AtrybutyZadanie2 from "./zadania/4_zadania/AtrybutyZadanie2";
import ZagniezdzeniaZadanie3 from "./zadania/4_zadania/ZagniezdzanieZadanie3/ZagniezdzeniaZadanie3";
import Search from "./zadania/4_zadania/Search";
import LikeBox from "./zadania/4_zadania/LikeBox";
import Menu from "./zadania/4_zadania/Menu";
import Hello from "./zadania/4_zadania/Hello";

function App() {
  // add(2,5);
  // console.log(Person);
  // console.log(Grzegorz.getNames());

  //Zadanie 2 //JSX wyrażenia
  // const birthYear : string | null = prompt("Podaj rok urodzenia");
  // const currentYear : number = new Date().getFullYear();

  return (
    <div className="App">
      {/*{returnAvg([1,2,3,4,5])}*/}
      {/*<h1>{currentYear - Number(birthYear)}</h1>*/}
      {/*<ul>*/}
      {/*  <li>{artist.firstName}</li>*/}
      {/*  <li>{artist.lastName}</li>*/}
      {/*  <li>{artist.age}</li>*/}
      {/*  <li>{artist.nickname}</li>*/}
      {/*</ul>*/}
      {/*  <AtrybutyZadanie2 />*/}
      {/*  <AtrybutyZadanie3 />*/}
      <ZagniezdzeniaZadanie3 />
      <Search />
      <LikeBox />
      <Menu />
      <Hello name="Grzegorz" surname="Kowalski" />
    </div>
  );
}

export default App;
