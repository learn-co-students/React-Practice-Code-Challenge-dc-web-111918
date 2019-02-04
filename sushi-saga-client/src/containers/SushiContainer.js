import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushiArr)
  

  return (

    <Fragment>
      <div className="belt">
        {props.sushiArr.map(sushiObj => 
          <Sushi
            sushiObj={sushiObj}
            key={sushiObj.id}
            addSushi={props.addSushi}
            sushiOnTable={props.sushiOnTable}
          />).slice(props.sushiIndex, props.sushiIndex + 4)
        }
        <MoreButton renderSushi={props.renderSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer