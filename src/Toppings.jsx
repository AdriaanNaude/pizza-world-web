import { HashLink } from 'react-router-hash-link'
import Topping from './toppings.json'
function Toppings(){

    const small = 15;
    const medium = 20;
    const large = 30;

    return(
        <table className="main-table toppings-section">
            <thead>
                <tr className="data-head-row">
                    <th><h2 id="toppings_menu">Toppings</h2></th>
                </tr>
            </thead>
            <tbody>
                {
                 Topping.map( topping => {
                    return(
                       <>
                       <tr className="data-row">
                         <td className="pizza-data-field">
                             <i>{topping.toppings}</i>
                         </td>
                          <td className="price-data-field">
                                <div>
                                    <b>Small</b>
                                    <br />
                                    <b>R</b> {small}
                                </div>
                                <div>
                                    <b>Medium</b>
                                    <br />
                                    <b>R</b> {medium}
                                </div>
                                <div>
                                    <b>Large</b>
                                    <br />
                                    <b>R</b> {large}
                                </div>
                          </td>
                      </tr>
                      </>
                    )
                  })
                }
            </tbody>
            <div className="back_to">
                <p>
                    <HashLink smooth to='#main_heading'>Back to top</HashLink>
                </p>
            </div>
        </table>
    );
}

export default Toppings
