interface IShop {
    title: string,
    updateList: (title: string) => void
}

const ShopItem = ({title, updateList} : IShop) => {
    return (
        <div>
            <p>{title}</p>
            <button onClick={() => updateList(title)}>Kup</button>
        </div>
    );
};

export default ShopItem;
