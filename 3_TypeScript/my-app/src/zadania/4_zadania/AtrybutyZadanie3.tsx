const AtrybutyZadanie3 = () => {
    const redDiv : JSX.Element = <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red"
    }} />
    const greenDiv : JSX.Element = <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: "green"
    }} />
    const blueDiv = <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue"
    }} />
    return (
        <>
            {redDiv}
            {greenDiv}
            {blueDiv}
        </>
    );
};

export default AtrybutyZadanie3;
