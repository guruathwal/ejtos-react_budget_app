
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, dispatch, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
  }, 0);

  const handleBudgetChange = (newBudget) => {
    if (totalExpenses < newBudget)
    {
      dispatch({ type: 'SET_BUDGET', payload: newBudget });
    } else {
      alert("You cannot reduce the budget value lower than the spending.");
    }
  };

  return (
    <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" step={10} value={budget} onChange={(e) => handleBudgetChange(parseInt(e.target.value))} /></span>
    </div>
  );
};
export default Budget;
