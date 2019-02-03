import React from 'react'

const WalletForm = (props) => {
    return (
        <div className='walletForm'>
            <form onSubmit={props.refill}>
                <input type='number' name='input'/>
                <button type='submit' value='submit'>Refill</button>
            </form>
        </div>
    )
}

export default WalletForm