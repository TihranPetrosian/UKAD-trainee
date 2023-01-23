import style from "./home.style.module.css";
import Slider from "../../components/slider/slider";
import { useContext } from "react";
import { DogContext } from "../../context/dogs-context";

const Home = () => {

    const dogData = useContext(DogContext);

    return (
        <div className={style.container}>
            <h1 className={style.title}>Home page</h1>
            <Slider data={dogData.dogsValue.slice(0, 8)} />
        </div>
    );
}

export default Home;