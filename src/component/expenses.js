import React from 'react'
import { GlobalContext} from '../context/Globalestate'
import { useContext } from 'react'
const Expenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map(transaction => transaction.amount)
  const income = amount.filter(amount => amount > 0).reduce((acc,item) => (acc + item ),0).toFixed(2)
  const expenses = amount.filter(amount => amount < 0).reduce((acc,item) => (acc + item ),0).toFixed(2)
 
  console.log(income)
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>+${income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>-${expenses}</p>
        </div>
        
      
    </div>
  )
}

export default Expenses
