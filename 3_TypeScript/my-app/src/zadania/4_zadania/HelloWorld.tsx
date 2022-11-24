import {useState, useEffect} from "react";

const HelloWorld = () => {
    const [text, setText] = useState("Hello, World!");

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText( "Hi, Everyone!");
            console.log("test");
        }, 5000);

        return () => clearTimeout(timeoutID);
    }, []);

    useEffect(() => {
        console.log(text);
    }, [text]);

    console.log("test");
    return (
        <h1>
            {text}
        </h1>
    );
};

export default HelloWorld;
