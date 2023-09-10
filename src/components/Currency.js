import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch} = useContext(AppContext);
   
    const handleCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
}

    return (
        <div className='alert alert-secondary'>
           Currency: <select className="currency-select" style={{background: 'lightgreen'}} id="currencyInputSel01" onChange={event=>handleCurrency(event.target.value)}>
                        
                        <option value="$" name="Dollar" defaultValue>$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>
                  </select>
        </div>
    );
}; 

export default Currency;
