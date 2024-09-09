import React from 'react';
import { GlobalContext } from '../context/Globalestate';
import { useContext } from 'react';
import Transaction from './Transaction';
const Transactionlist = () => {
    const {transactions} = useContext(GlobalContext)
  
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
       
     </ul>
    </div>
  )
}

export default Transactionlist
