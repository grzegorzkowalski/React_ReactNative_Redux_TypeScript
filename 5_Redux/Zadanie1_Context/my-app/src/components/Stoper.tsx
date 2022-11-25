import {useContext} from "react";
import {StoperContext} from "../context/StoperContext";

const Stoper = () => {
    const {state, dispatch} = useContext(StoperContext);
    return (
        <div>
            <div>
                <div>
                    <button>start</button>
                    <button disabled>stop</button>
                    <h1>{state.value}</h1>
                </div>
                <div>
                    <button>zapisz</button>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stoper;
