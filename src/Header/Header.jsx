import styles from './Header.module.css'

function Header(){

    const phoneNumber = "0768545124";

    return(
        <header className={styles.main_header}>
            <h1 className={styles.main_name}>Pizza World Porterville</h1>
            <div className={styles.contact}>
                <b>Phone:</b> {phoneNumber}
            </div>
            {/*<nav className=r{styles.main_nav}>
                <a href="">Menu</a>
                <a href="">Specials</a>
                <a href="">Extra</a>
                <a href="">About</a>
            </nav>*/}
        </header>
    );

}

export default Header
