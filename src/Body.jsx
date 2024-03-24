import Pizza from './pizzas.json';

function Body(){

    const small = 70
    const medium = 115
    const large = 135


    return(
        <table className="main-table">
            <thead>
                <tr>
                    <th><h2>Pizzas</h2></th>
                    <th><h2>Price</h2></th>
                </tr>
            </thead>
            <tbody>
                {
                 Pizza.map( pizza => {
                    return(
                       <>
                       <tr>
                         <td>
                             {pizza.name}
                             <br />
                             {pizza.toppings}
                             <br />
                             <br />
                         </td>
                          <td>
                            <table>
                                <tr>
                                    <td>small</td>
                                    <td>meduim</td>
                                    <td>large</td>
                                </tr>
                                <tr>
                                    <td>R {small}</td>
                                    <td>R {medium}</td>
                                    <td>R {large}</td>
                                </tr>
                            </table>  
                          </td>
                          <td>
                             
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

export default Body
