import people from "./data/people";
import './App.css';

function App() {
  return (
    <>
        {
            people.map(el => {
                return (
                    <div
                        key={el.id}
                        className="person"
                    >
                        <img src={el.avatar} />
                        <div className="info">
                            <h1>{el.title + " " + el.name + " " + el.surname}</h1>
                            <p>{el.bio}</p>
                        </div>
                    </div>
                )
            })
        }
    </>
  );
}

export default App;
