import React from 'react'

const MoreButton = (props) => {
    return <button onClick={props.buttonFunction}>
            {props.buttonText}
          </button>
}

export default MoreButton
