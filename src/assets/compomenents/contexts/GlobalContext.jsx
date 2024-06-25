import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            
            const response = await fetch('http://localhost:3000/posts');
            if (!response.ok) {
                throw new Error('Errore durante il recupero dei dati');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Errore nel fetch dei dati:', error.message);
        }
    };

    return (
        <GlobalContext.Provider value={{
            data, 
            fetchData,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobal = () => {
    const value = useContext(GlobalContext);
    if (value === undefined) {
        throw new Error('Non sei dentro al Global Provider!');
    }
    return value;
};

export { GlobalProvider, useGlobal };
