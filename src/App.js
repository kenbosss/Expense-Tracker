
import React from 'react';
import Header from './component/header';
import Currentbalance from './component/currentBalance';
import Expenses from './component/expenses';
import Transactionlist from './component/Transactionlist';
import AddTransaction from './component/AddTransaction';
import { GlobalProvider } from './context/Globalestate';
import './App.css';

function App() {
  return (
    <GlobalProvider>  
<Header />
<div className='container'>
  <Currentbalance />
  <Expenses />
  <Transactionlist />
  <AddTransaction />
</div>

    </GlobalProvider>

  );
}

export default App;
