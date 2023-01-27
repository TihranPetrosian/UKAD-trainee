import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./slider.style.module.css";
import Card from "../card/card";
import chevron from '../../assets/images/chevron-right.png';
import { useLocation } from "react-router-dom";

const CustomRightArrow = ({ onClick, ...rest }) => {
    return <button className={`${style['custom-arrow']} ${style.right}`} {...rest} onClick={onClick}>
        <img src={chevron} alt="right-arrow" />
    </button>
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    return <button className={`${style['custom-arrow']} ${style.left}`} {...rest} onClick={onClick}>
        <img src={chevron} alt="right-arrow" />
    </button>
};

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 678, min: 0 },
        items: 1
    }
};

const Slider = ({ data }) => {

    let location = useLocation();

    return (
        <Carousel customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />} responsive={responsive} className={style.slider}>
            {data.map((item, index) =>
                <Card path={location.pathname.replace("/", "")} key={index} dogInfo={item} />
            )}
        </Carousel>
    );
}

export default Slider;