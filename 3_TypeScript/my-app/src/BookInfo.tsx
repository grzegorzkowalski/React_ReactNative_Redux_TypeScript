import {useEffect, useState } from "react";
import useHookValidator from "./hooks/useHookValidator";

const BookInfo = ({ isbn } : { isbn: string }) => {
    const [testIsbn, setTestIsbn] = useHookValidator(isbn);
    const [book, setBook] = useState("");

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res => res.json())
            .then(data => setBook(data.items[0].volumeInfo.title))
            .catch(err => console.log(err))
    }, []);

    if (book) {
        return (
            <div>
                <p>Test poprawności numeru ISBN: {testIsbn}</p>
                <h1>{book}</h1>
            </div>
        )
    }
    return <h2>Trwa ładowanie danych</h2>;
};

export default BookInfo;
