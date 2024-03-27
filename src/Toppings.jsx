import Topping from './toppings.json'
function Toppings(){

    const small = 10;
    const medium = 12;
    const large = 15;

    return(
        <table className="main-table toppings-section">
            <thead>
                <tr>
                    <td><h2>Toppings</h2></td>
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
        </table>
    );
}

export default Toppings
