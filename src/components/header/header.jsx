import logo from '../../assets/images/UKAD_logo.png';
import style from "./header.style.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    let location = useLocation();

    return (
            <div className={style.header}>
                <img className={style.img} src={logo} alt="logo" />
                <ul className={style.nav}>
                    <li><Link to='/' className={`${style.link} ${location.pathname === '/' ? style.underline : ''}`} >home</Link></li>
                    <li><Link to='/products' className={`${style.link} ${location.pathname === '/products' ? style.underline : ''}`}>products</Link></li>
                </ul>
            </div>

    );

}

export default Header;