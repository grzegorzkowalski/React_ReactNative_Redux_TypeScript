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
import Sum from "./zadania/4_zadania/Sum";
import HelloWorld from "./zadania/4_zadania/HelloWorld";
import Box from "./zadania/4_zadania/Box";
import StrobeLight from "./zadania/4_zadania/StrobeLight";
import ColorfulBoxes from "./zadania/ColorfulBoxes";
import Shop from "./Shop";
import NumberInfo from "./zadania/NumberInfo";
import SecretStuff from "./SecretStuff";

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
      {/*<ZagniezdzeniaZadanie3 />*/}
      {/*<Search />*/}
      {/*<LikeBox likes={166} />*/}
      {/*<Menu />*/}
      {/*<Hello name="Grzegorz" surname="Kowalski" />*/}
      {/*<Sum tab={[1,2,3]} />*/}
      {/*<HelloWorld />*/}
      {/*<Box />*/}
      {/*<StrobeLight color="yellow" frequency={200} />*/}
      {/*<StrobeLight color="pink" frequency={500} />*/}
      {/*<StrobeLight color="blue" frequency={1000} />*/}
      {/*<ColorfulBoxes />*/}
      {/*/!*<Shop />*!/*/}
      {/*<NumberInfo numericValue={1} />*/}
      {/*<NumberInfo numericValue={2} />*/}
      {/*<NumberInfo numericValue={5} />*/}
      {/*<NumberInfo numericValue={7} />*/}
      {/*<NumberInfo numericValue={10} />*/}
      {/*<NumberInfo numericValue={16} />*/}
      <SecretStuff password="test" correctPassword="test" secret="Lubię pizzę ale gluten mi szkodzi" />
      <SecretStuff password="test" correctPassword="test1234" secret="Nie lubię brukselki" />
    </div>
  );
}

export default App;
