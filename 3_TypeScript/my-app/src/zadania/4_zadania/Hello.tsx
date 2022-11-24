const Hello = ({name, surname} : {name: string, surname: string}) => {
    return (
        <>
            <p>{name}</p>
            <p>{surname}</p>
        </>
    );
};

export default Hello;
