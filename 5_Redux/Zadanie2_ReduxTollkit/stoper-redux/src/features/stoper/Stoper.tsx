import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import {
    increment,
    start,
    stop,
    addToList
} from "./stoperSlice";

const Stoper = () => {
    const value = useSelector((state: RootState) => state.stoper.value);
    const isCounting = useSelector((state: RootState) => state.stoper.isCounting);
    const list = useSelector((state: RootState) => state.stoper.list);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCounting) {
            const intervalID = setInterval(() => {
                dispatch(increment())
            }, 1000)
            return () => clearInterval(intervalID);
        }
    }, [isCounting])

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(start())}>start</button>
                    <button onClick={() => dispatch(stop())}>stop</button>
                    <h1>{value}</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(addToList())}>zapisz</button>
                    <ul>
                        {
                            list.map((el, i) => <li key={i}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stoper;
