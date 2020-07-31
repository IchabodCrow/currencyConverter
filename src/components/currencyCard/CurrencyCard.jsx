import React, { useCallback } from "react";
import { useState } from "react";

import { CurrencyCardStyle, CurrencyInput, CurrencySelect } from "../../style/CurrencyCardStyle";

const CurrencyCard = ({ currencies, onInput, onSelect, pair }) => {

   const handleInput = useCallback((e) => {
       onInput(e.target.value);
   })

   const handleSelect = (e) => {
        const currency = currencies.find( (item) => item.CharCode === e.target.value)
        onSelect(currency);
   }

  return (
    <CurrencyCardStyle>
        <CurrencySelect 
            onChange={ handleSelect }
            value={ pair.currency.CharCode }
        >
          {currencies.map((currency) => (
            <option key={currency.ID}>{currency.CharCode}</option>
          ))}
        </CurrencySelect>
        <CurrencyInput
            type='number' 
            onChange={ handleInput }
            value={ pair.inputValue }
        />
    </CurrencyCardStyle>
  );
};

export default CurrencyCard;
