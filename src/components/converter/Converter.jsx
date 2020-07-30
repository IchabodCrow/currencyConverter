import React from "react";
import CurrencyCard from "../currencyCard/CurrencyCard";
import { useState } from "react";
import { Header } from "../../style/header";

const Converter = (props) => {

    const [ currencyOptions, setCurrencyOptions ] = useState(['EUR', 'USD', 'RUB'])
    const [ amountCost, setAmountCost ] = useState([83, 74, 1])
    console.log(props)

    return (
      <>
        <Header>Конвертер валют</Header>
        <div>
          <div>Вы переводите из</div>
          <CurrencyCard 
            currencies={currencyOptions}
            amountCost={amountCost}
           />
          <div>в</div>

          <CurrencyCard 
            currencies={currencyOptions} 
            amountCost={amountCost}
            />
        </div>
        <div></div>

        <button>поменять валюты местами</button>
      </>
    );
  }


export default Converter;
