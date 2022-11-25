const NumberInfo = ({numericValue} : {numericValue : number}) => {
    const isPrime = (num : number) : boolean => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num > 1;
    };
    const isPowerOfTwo = (num : number) : boolean => (num & (num - 1)) === 0;

    let element : JSX.Element | null = null;
    if (isPowerOfTwo(numericValue)) {
        element = <li>Liczba jest potęgą dwójki</li>
    }
    else {
        element = <li>Liczba NIE jest potęgą dwójki</li>
    }

    return (
        <ul>
            <li>{ numericValue }</li>
            <li>{ numericValue % 2 === 0 ? "Parzysta" : "Nieparzysta" }</li>
            { isPrime(numericValue) && <li>Liczba pierwsza</li> }
            { element }
        </ul>
    );
};

export default NumberInfo;
