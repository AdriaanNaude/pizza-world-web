import styles from './Footer.module.css'
import logo from './../images/facebook-logo.jpeg';
function Footer(){
    
   const date = new Date().getFullYear();

    return(
        <footer className={styles.main_footer}>
            <div className={styles.footerinfo_one}>
                &copy; {date} pizzaworldporterville
            </div>
            <div className={styles.footerinfo_two}>
                <img className={styles.facebook_img} src={logo} alt="faceBook logo" /> <a className={styles.facelink} href="https://www.facebook.com/PizzaWorldPorterville?mibextid=ZbWKwL">Pizza World Porterville</a>
            </div>
        </footer>
    );

}

export default Footer
