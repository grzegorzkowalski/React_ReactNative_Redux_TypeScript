import { useState, useEffect } from "react";

type strobe = {
    color: string,
    frequency: number
}

const StrobeLight = ({color, frequency} : strobe) => {
    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setBgColor(prev => prev === "white" ? color : "white");
        }, frequency);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <div style={{
            backgroundColor: bgColor,
            width: "100px",
            height: "100px"
        }}/>
    );
};

export default StrobeLight;
