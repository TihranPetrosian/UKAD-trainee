import style from './card.style.module.css';


const Card = ({ dogInfo, path }) => {
    return (
        <div className={path !== '' ? style.card : style['carousel-card']}>
            <img src={dogInfo.image.url} alt="dog" className={style.image} />
            <div className={style['text-container']}>
                <h3 className={style.name}>{dogInfo.name}</h3>
                <p className={style.description}>{dogInfo.bred_for}</p>
            </div>
        </div>

    );
}

export default Card;