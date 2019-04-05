import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.allSushi.slice(props.start,props.start+4).map(sushiObj => 
            <Sushi 
              sushiObj={sushiObj} 
              key={sushiObj.id}
              allSushi ={props.allSushi}
              eatSushi ={props.eatSushi}
              eatenSushi ={props.eatenSushi}
              />)
        }
        <MoreButton 
          clickMore = {props.clickMore}
          />
      </div>
    </Fragment>
  )
}

export default SushiContainer