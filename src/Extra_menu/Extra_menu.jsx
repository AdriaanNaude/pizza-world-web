import styles from './Extra_menu.module.css'
import Burger from './burger.json'
function Extra_menu(){

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
            {
             Burger.map( burger => {
              return(
                <>
                <tr className={styles.data_row}>
                         <td className={styles.burger_data_field}>
                            <b>{burger.name}</b>
                         </td>
                          <td className={styles.price_data_field}>
                            <div>
                                <b>R</b> {burger.price}                       
                            </div>
                          </td>
                      </tr>
                     </>
                    )
                 })
                }
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
