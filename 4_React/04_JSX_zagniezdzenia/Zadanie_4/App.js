import uniqid from "uniqid";
import artist from './data/artist';
import people from "./data/people";
import students from "./data/students";
import './App.css';

function App() {
  return (
    <>
      <h3>Zdali</h3>
        <ul>
            {
                students.filter(el => el.pass).map((el) => {
                        return (
                            <li key={uniqid()}>{el.name + " " + el.surname}</li>
                        )
                })
            }
        </ul>
        <h3>Lista wyników</h3>
        <ul>
          {
            students.map((el) => {
              return (
                  <li
                      key={uniqid()}
                      style={{color: el.pass ? "green" : "red"}}
                  >
                    {el.name + " " + el.surname}
                  </li>
              )
            })
          }
        </ul>
    </>
  );
}

export default App;
