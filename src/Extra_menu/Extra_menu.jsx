import styles from './Extra_menu.module.css'
function Extra_menu(){
    return(
        <>
        <div className={styles.menu_one}>
            <h2>Burgers</h2>
            <p>
                <b>Chicken Burger</b> <b>R</b>40
                <br />
                <b>Beef Burger</b> <b>R</b>50
            </p>
        </div>
        <div className={styles.menu_two}>
            <h2>Chips</h2><p>
                <b>R 10</b>
                <br />
                <b>R 15</b> 
                <br />
                <b>R 20</b>
                 <br />
                <b>R 25</b>
                 <br />
                <b>R 30</b>
            </p>

        </div>
        <div className={styles.menu_three}>
            <h2>Russian Chip Roll</h2>
            <b>R 20</b>
        </div>
        </>
    );
}

export default Extra_menu
