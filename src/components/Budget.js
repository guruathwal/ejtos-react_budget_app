
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

  const handleBudgetChange = (newBudget) => {
    dispatch({ type: 'SET_BUDGET', payload: newBudget });
  };

  return (
    <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" value={budget} onChange={(e) => handleBudgetChange(parseInt(e.target.value))} /></span>
    </div>
  );
};
export default Budget;
