import { useState } from "react";

const HelloForm = () => {
    const [text, setText] = useState("Grzegorz");
    return (
        <form>
            <h2>{ text }</h2>
            <label>
                Text
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
        </form>
    );
};

export default HelloForm;
