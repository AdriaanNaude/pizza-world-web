import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){

    const phoneNumber = "0768545124";

    return(
        <>
        <header className={styles.main_header}>
            <h1 id="main_heading" className={styles.main_name}>Pizza World Porterville</h1>
            <div className={styles.contact}>
                <b className={styles.phone}>Phone: {phoneNumber}</b>
            </div>
            <nav className={styles.main_nav}>
                <Link className={styles.nav_link} smooth to="/pizza-world-web/">Menu</Link>
                {/*<Link to="pizza-world-web/special">Specials</Link>*/}
                <Link className={styles.nav_link} smooth to="/pizza-world-web/extra">Extra</Link>
                {/*<Link className={styles.nav_link} smooth to="pizza-world-web/about">About</Link>*/}
            </nav>
        </header>
        </>
    );

}

export default Header
