import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const SelectOrType = ({ tab } : { tab: string[]} ) => {
    const [cars, setCars] = useState([...tab, "Inny"]);
    const [selectedCar, setSelectedCar] = useState(tab[0]);
    const [newCar, setNewCar] = useState("");

    const submitHandler = () : void => {
        setCars(prev => {
            const tab = [...prev];
            tab.pop();
            tab.push(newCar);
            return tab;
        })
    }

    const miniForm = (
        <form onSubmit={submitHandler}>
            <input
                value={newCar}
                onChange={(e) => setNewCar(e.target.value)}
            />
            <button>
                Zapisz
            </button>
        </form>);
    return (
        <>
            <form>
                <select
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                >
                    {
                        cars.map((el )=> {
                            return <option key={uuidv4()} value={el}>{el}</option>
                        })
                    }
                </select>
            </form>
            {selectedCar === cars[cars.length - 1] && miniForm }
        </>
    );
};

export default SelectOrType;
