import {useContext, useEffect} from "react";
import {StoperContext} from "../context/StoperContext";

const Stoper = () => {
    const {state, dispatch} = useContext(StoperContext);

    useEffect(() => {
        if (state.isCounting) {
            const intervalID = setInterval(() => {
                dispatch(state => {
                    return {
                        ...state,
                        value: state.value+1
                    }
                })
            }, 1000)
            return () => clearInterval(intervalID);
        }

    }, [state])

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(state => {
                        return {
                            ...state,
                            isCounting: true
                        }
                    })}
                    >
                        start
                    </button>
                    <button
                        onClick={() => dispatch(state => {
                            return {
                                ...state,
                                isCounting: false
                            }
                        })}
                    >
                        stop
                    </button>
                    <h1>{state.value}</h1>
                </div>
                <div>
                    <button
                        onClick={() => dispatch(state => {
                            return {
                                ...state,
                                list: [...state.list, state.value]
                            }
                        })}
                    >
                        zapisz
                    </button>
                    <ul>
                        {
                          state.list.map((el, i) => <li key={i}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stoper;
