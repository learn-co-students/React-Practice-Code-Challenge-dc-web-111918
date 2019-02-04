import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.servedSushi.map(sushi =>
            <Sushi sushi={sushi} eatSushi={props.eatSushi} />
          )
        }
        <MoreButton buttonText={"MoreSushi!"} buttonFunction={props.moreSushi} />
        <MoreButton buttonText={"MoreFunds!"} buttonFunction={props.moreFunds} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
