import styles from './Extra_menu.module.css'
function Extra_menu(){

    const cheese_burger_price = 52;
    const hawaiin_burger_price = 60;
    const chick_burger_price = 40;
    const rib_burger_price = 45;
    const beef_burger_price = 50;
    const bielie_burger_price = 65;

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
                             <b>Cheese Burger </b>
                             <b>Hawaiin Burger</b>
                             <b>Chicken Burger</b>
                             <b>Rib Burger</b>
                             <b>Beef Burger</b>
                             <b>Bielie Burger</b>
                         </td>
                          <td className={styles.price_data_field}>
                                <div>
                                    <b>R</b> {cheese_burger_price}
                                </div>
                                <div>
                                    <b>R</b> {hawaiin_burger_price}
                                </div>
                                <div>
                                    <b>R</b> {chick_burger_price}
                                </div>
                                <div>
                                    <b>R</b> {rib_burger_price}
                                </div>
                                <div>
                                    <b>R</b> {beef_burger_price}
                                </div>
                                 <div>
                                    <b>R</b> {bielie_burger_price}
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
