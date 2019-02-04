import React from 'react'

const Sushi = (props) => {
  // console.log(props.addSushi)
  return (
      <div className="sushi">
        <div className="plate"
          onClick={() => props.addSushi(props.sushiObj)}>
          { /* Tell me if this sushi has been eaten! */
            props.sushiOnTable.find((sushi) => sushi.id === props.sushiObj.id) ?
              null // sushi in table arr
              :
              <img src={props.sushiObj.img_url} width="100%" /> // sushi not eaten--show img
          }
        </div>
        <h4 className="sushi-details">
          {props.sushiObj.name} - ${props.sushiObj.price}
        </h4>
      </div>
  )
}

export default Sushi