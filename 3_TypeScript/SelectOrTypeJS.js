import React, {useState} from 'react';

const SelectOrType = ({items}) => {
    const [cars, setCars] = useState([...items, "Inne"]);
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [updatedLastCar, setUpdatedLastCar] = useState("");

    let changeLastCar = null;
    const selectHandler = (e) => {
        setSelectedCar(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const temp = [...cars];
        temp.pop();
        temp.push(updatedLastCar);
        setCars(temp);
        setSelectedCar(cars[0]);
    }

    if (selectedCar === cars[cars.length-1]) {
        changeLastCar = (
            <>
                <input
                    type="text"
                    value={updatedLastCar}
                    onChange={(e) => setUpdatedLastCar(e.target.value)}
                />
                <button type="submit">Zapisz</button>
            </>
        );
    }

    return (
        <form onSubmit={submitHandler}>
            <select
                value={selectedCar}
                onChange={selectHandler}
            >
                {
                    cars.map((el, i) => <option key={i} value={el}>{el}</option>)
                }
            </select>
            { changeLastCar }
        </form>
    );
};

export default SelectOrType;
