import React, { Fragment } from 'react'

const Sushi = (props) => {
  let{name,price,img_url,id}=props.sushiInfo


  return (
    <div className="sushi">
      <div className="plate" onClick={()=>props.eatSushi(props.sushiInfo)}>
        {props.isSushiEaten.includes(props.sushiInfo)?null:
          <img alt={name} src={img_url} width="100%" />}

      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
