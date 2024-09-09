import React from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/Globalestate'
import { useContext } from 'react'

const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = (e) =>{
      e.preventDefault()
    

    const newTransaction ={
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }
    
  
  return (
    <div>
      <h3>Add New transaction</h3>
      <form onSubmit={onSubmit}>
<div className='form-control'>
    <label for='text'>Text</label>
    <input type='text' value={text} onChange={(e) => setText(e.target.value)}id='text' placeholder='Add Transaction'></input>
</div>
<div className='form-control'>
    <label htmlFor='Amount'>Amount <br />(negative - Expense, postive -Income)</label>
    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}id='amount' placeholder='Enter Amount'/>
</div>
<button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
