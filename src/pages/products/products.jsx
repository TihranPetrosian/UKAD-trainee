import style from "./products.style.module.css";
import Card from "../../components/card/card";
import { useContext } from "react";
import { DogContext } from "../../context/dogs-context";

const Products = () => {
    const dogData = useContext(DogContext)

    return (
        <div className={style.container}>
            <h1 className={style.title}>Products page</h1>
            <div className={style.list}>
                {dogData.dogsValue[0] && dogData.dogsValue.map((item, index) => <Card key={index} dogInfo={item} />)}
            </div>
        </div>
    )
};

export default Products;