import React, { useState, useEffect } from "react";

const useHookValidator = (initialValue : string) : [string,  React.Dispatch<React.SetStateAction<string>>]  => {
    const [isbn, setIsbn] = useState<string>("");

    useEffect(() => {
        if (initialValue.length === 10) {
            setIsbn(initialValue);
        }
        else {
            setIsbn("Błędna wartość");
        }
    }, [initialValue, isbn]);

    return (
        [
            isbn,
            setIsbn
        ]
    );
};

export default useHookValidator;
