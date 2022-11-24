const Sum = ({tab} : {tab : number[]}) => {
    return (
        <div>
            {
                tab.reduce((prev,cur) => prev+cur)
            }
        </div>
    );
};

export default Sum;
