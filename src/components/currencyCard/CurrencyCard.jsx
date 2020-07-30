import React from "react";
import { useState } from "react";

import { CurrencyCardStyle } from '../../style/CurrencyCardStyle'

const CurrencyCard = (props) => {

  return (
    <CurrencyCardStyle>
      <select>
        {props.currencies.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <input />
    </CurrencyCardStyle>
  );
};

export default CurrencyCard;
