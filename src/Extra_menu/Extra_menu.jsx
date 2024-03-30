import styles from './Extra_menu.module.css'
function Extra_menu(){

    const chick_burger_price = 40;
    const beef_burger_price = 50;

    return(
        <>
        <table className={styles.menu_one}>
            <thead>
                <tr className={styles.data_head_row}>
                    <th>
                        <h2>Burgers</h2>
                    </th>
                    <th>
                        <h2>Price</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.data_row}>
                         <td className={styles.burger_data_field}>
                             <b>Chicken Burger</b>
                             <b>Beef Burger</b>
                         </td>
                          <td className={styles.price_data_field}>
                                <div>
                                    <b>R</b> {chick_burger_price}
                                </div>
                                <div>
                                    <b>R</b> {beef_burger_price}
                                </div>
                          </td>
                      </tr>
            </tbody>
        </table>

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
