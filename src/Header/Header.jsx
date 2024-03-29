import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){

    const phoneNumber = "0768545124";

    return(
        <>
        <header className={styles.main_header}>
            <h1 className={styles.main_name}>Pizza World Porterville</h1>
            <div className={styles.contact}>
                <b>Phone:</b> {phoneNumber}
            </div>
            <nav className={styles.main_nav}>
                <Link to="/pizza-world-web/">Menu</Link>
                {/*<Link to="/specials">Specials</Link>*/}
                <Link to="/pizza-world-web/extra">Extra</Link>
                {/*<Link to="/about">About</Link>*/}
            </nav>
        </header>
        </>
    );

}

export default Header
