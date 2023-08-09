import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  const currencyOptions = [
    { symbol: '$', name: '$ Dollar' },
    { symbol: '£', name: '£ Pound' },
    { symbol: '€', name: '€ Euro' },
    { symbol: '₹', name: '₹ Ruppee' },
    // Add more currency options as needed
  ];

  return (
    <div>
      <div style={{color:"white", backgroundColor:"green", borderRadius:"5px", height:'3.5rem', textAlign:"center", width:"90%"}}>
        <span> Currency </span>
        <select style={{height:'3.5rem',  backgroundColor:"green", width:"50%"}} onChange={(e) => handleCurrencyChange(e.target.value)} class="btn btn-success dropdown-toggle" >
          {currencyOptions.map((option) => (
            <option key={option.symbol} value={option.symbol}> {`${option.name}`} </option>))
          }
        </select>
      </div>
    </div>

  );
};

export default Currency;
