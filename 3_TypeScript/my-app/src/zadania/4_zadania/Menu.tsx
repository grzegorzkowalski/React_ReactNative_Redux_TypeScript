const Menu = () => {
    const list : {name: string, link: string}[] = [
        {name: "Strona główna", link: "/"},
        {name: "Blog", link: "/blog"},
        {name: "Cennik", link: "/cennik"},
        {name: "Kontakt", link: "/kontakt"},
    ];

    return (
        <ul>
            {
                list.map((el: {name: string, link: string}, index: number) => {
                    return <li key={index}><a href={el.link}>{el.name}</a></li>;
                })
            }
        </ul>
    );
};

export default Menu;
