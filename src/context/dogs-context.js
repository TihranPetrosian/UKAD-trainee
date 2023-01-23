import { createContext, useState, useEffect } from "react";
import { getDogs } from "../services/dogs.service";

export const DogContext = createContext()

const Context = (props) => {
    const [dogsValue, setDogsValue] = useState([]);

    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        const dogsData = await getDogs("https://api.thedogapi.com/v1/breeds?limit=10&page=0.");
        setDogsValue(dogsData);
    };

    const dogs = {
        dogsValue
    };

    return (
        <DogContext.Provider value={dogs}>
            {props.children}
        </DogContext.Provider>
    );
}

export default Context;