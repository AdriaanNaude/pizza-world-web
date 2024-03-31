import { HashLink } from 'react-router-hash-link'
import Pizza from './pizzas-vegetarian.json';

function Bodyveg(){

    const small = 70
    const medium = 115
    const large = 135


    return(
        <table className="main-table">
            <thead>
                <tr>
                    <td><h2 id="veg_menu">Vegetarian</h2></td>
                </tr>
            </thead>
            <tbody>
                {
                 Pizza.map( pizza => {
                    return(
                       <>
                       <tr className="data-row">
                         <td className="pizza-data-field">
                             <b>{pizza.name}</b>
                             <br />
                             <i>{pizza.toppings}</i>
                             <br />
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
            <div>
                <p>
                    <HashLink smooth to='#main_heading'>Back to top</HashLink>
                </p>
            </div>
        </table>
    );
}

export default Bodyveg
