import {useState, useEffect} from "react";

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prev => prev === "green" ? "red" : "green");
        }, 2000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <div style={{
            backgroundColor: color,
            width: "100px",
            height: "100px"
        }}>

        </div>
    );
};

export default Box;
