import { HashLink } from 'react-router-hash-link'
import styles from './Bookmark.module.css'

function Bookmark(){
    return (
        <div className={styles.bookmark_menu}>
            <HashLink className={styles.menu_link} smooth to='#seafood_menu'>Seafood</HashLink>
            <HashLink className={styles.menu_link} smooth to='#veg_menu'>Vegetarian</HashLink>
            <HashLink className={styles.menu_link} smooth to='#toppings_menu'>Toppings</HashLink>
        </div>
    );
}

export default Bookmark
