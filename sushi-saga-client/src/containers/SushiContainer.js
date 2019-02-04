import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from  '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.displaySushi.map((sushi,index)=>
          <Sushi key={index} sushiInfo={sushi} eatSushi={props.eatSushi} isSushiEaten={props.isSushiEaten}/>
        )
        }
        <MoreButton moreSushiPlease={props.moreSushiPlease} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
