import React, { ReactElement } from "react";

const AtrybutyZadanie2 : React.FC = () : ReactElement => {
    const randomNumber = () : number => {
        return Math.round(Math.random() * 9 + 1);
    }
    const A : number = randomNumber();
    const B : number = randomNumber();
    const result :  string | null = prompt(`Jaki jest wynik dodawania ${A} + ${B}`);
    return (
        <>
            {
                Number(result) === A+B
                    ? <div style={{backgroundColor: "green"}}>Poprawna odpowiedz</div>
                    : <div style={{backgroundColor: "red"}}>Błędna odpowiedz</div>
            }
        </>
    );
};

export default AtrybutyZadanie2;
