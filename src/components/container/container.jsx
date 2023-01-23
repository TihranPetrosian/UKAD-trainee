import style from './container.style.module.css';

const Container = ({ children }) => {
    return (
        <div className={style["app-container"]}>
            {children}
        </div>
    );
}

export default Container;