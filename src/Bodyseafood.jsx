import Pizza from './pizzas-seafood.json';

function Bodyseafood(){

    const small = 70
    const medium = 115
    const large = 135


    return(
        <table className="main-table">
            <thead>
                <tr>
                    <td><h2>Seafood</h2></td>
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
        </table>
    );
}

export default Bodyseafood
