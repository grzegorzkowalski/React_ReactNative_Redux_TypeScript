import {useState} from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState<string[]>([]);

    const updateList = (title: string) : void => {
        setList(prev => [...prev, title]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" updateList={updateList} />
            <ShopItem title="Dell X5500" updateList={updateList} />
            <ShopItem title="Asus NT6000" updateList={updateList} />
            <ul>
                {
                    list.map((el,i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;
