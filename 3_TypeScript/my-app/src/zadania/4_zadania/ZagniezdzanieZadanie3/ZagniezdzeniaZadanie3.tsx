import people from "./people";
import "./style.css";

const ZagniezdzeniaZadanie3 = () => {
    return (
        <div>
            {
                people.map((el) => {
                    return (
                        <div key={el.id} className="person">
                            <img src={el.avatar} />
                            <div className="info">
                                <h1>{`${el.title}  ${el.name} ${el.surname}`}</h1>
                                <p>{el.bio}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ZagniezdzeniaZadanie3;
