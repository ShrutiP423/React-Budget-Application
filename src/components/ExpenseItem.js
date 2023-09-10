import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);
  

    const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
    };
    const { expenses } = useContext(AppContext);

    let handleAddExpense=(state,action)=>{
      
        const totalExpenses = state.expenses.map((currentExp) => {
            if (currentExp.name === action.payload.name && currentExp.cost - action.payload.cost >= 0) {
            return (currentExp.cost = currentExp.cost + 10);}
        });;
      return totalExpenses
    };
    let handleReduceExpense=()=>{
      
        const totalExpenses = expenses.reduce(( item) => {
            return (item.cost = item.cost + 10);
        }, 0);;
      
    };

  
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddExpense}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleReduceExpense}></FaMinusCircle></td>
        <td><FaTimesCircle size='1em'  onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;



