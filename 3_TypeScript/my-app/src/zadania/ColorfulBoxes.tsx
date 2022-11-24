import { useState } from "react";

const ColorfulBoxes = () => {
    const [tab, setTab] = useState<string[]>([]);

    function clickHandler() {
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        setTab(prev => [...prev, color]);
    }

    return (
        <>
            <button onClick={clickHandler}>Dodaj box</button>
            {
                tab.map((el, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                backgroundColor: el,
                                width: "100px",
                                height: "100px"
                            }}
                        />
                    )
                })
            }
        </>
    );
};

export default ColorfulBoxes;
