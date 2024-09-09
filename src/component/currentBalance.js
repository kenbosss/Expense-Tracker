import React, { useContext } from 'react'
import {GlobalContext} from '../context/Globalestate'

const Currentbalance = () => {
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map(transaction => transaction.amount)
  console.log(amount)
  const total = amount.reduce((acc,item) => (acc + item),0).toFixed(2)
  console.log(total)
  return (
    <>
        <h4 classname='balance'>Your Balance</h4>
      <h1 >{total}</h1>
    </>
  )
}

export default Currentbalance
