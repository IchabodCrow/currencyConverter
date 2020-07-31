import React, { useEffect, useCallback } from "react";
import CurrencyCard from "../currencyCard/CurrencyCard";
import { useState } from "react";
import { Header } from "../../style/header";
import {
  CarrencyCardContainer,
  WordBetweenSelects,
  SymbolBetweenInputs,
  TextBefore,
  Button,
  ButtonBox,
} from "../../style/CurrencyCardStyle";
import spinner from "../../img/762.gif";
import { Spinner, SpinnerBox } from "../../style/Spinner";

const Converter = ({ getCurrencyList, currencies }) => {
  const [pairs, setPairs] = useState({});

  useEffect(() => {
    getCurrencyList().then((res) => {
      setPairs({
        left: {
          ...pairs.left,
          currency: res.ValCurs.Valute[0],
        },
        right: {
          ...pairs.right,
          currency: res.ValCurs.Valute[0],
        },
      });
    });
  }, []);

  const calculate = (coef, currency1, currency2) => {
    return (
      parseFloat(coef) *
      (parseFloat(currency1.Value) / parseFloat(currency2.Value))
    ).toFixed(2);
  };

  const handleInput = useCallback((side) => (inputValue) => {
    const otherSide = side === "left" ? "right" : "left";
    setPairs({
      [side]: {
        ...pairs[side],
        inputValue: parseFloat(inputValue),
      },
      [otherSide]: {
        ...pairs[otherSide],
        inputValue: calculate(
          inputValue,
          pairs[side].currency,
          pairs[otherSide].currency
        ),
      },
    });
  });

  const handleSelect = useCallback((side) => (currency) => {
    const otherSide = side === "left" ? "right" : "left";
    setPairs({
      [side]: {
        ...pairs[side],
        currency,
        inputValue: calculate(
          pairs[otherSide].inputValue,
          pairs[otherSide].currency,
          currency
        ),
      },
      [otherSide]: pairs[otherSide],
    });
  });

  const handleClick = () => {
    setPairs({
      ...pairs,
      left: {
        ...pairs.left,
        currency: pairs.right.currency,
      },
      right: {
        currency: pairs.left.currency,
        inputValue: calculate(
          pairs.left.inputValue,
          pairs.right.currency,
          pairs.left.currency
        ),
      },
    });
  };

  if (!currencies.length || !Object.keys(pairs).length) {
    return (
      <SpinnerBox>
        <Spinner src={spinner} alt="gif" />
      </SpinnerBox>
    );
  }

  return (
    <>
      <Header>Конвертер валют</Header>
      <div>
        <CarrencyCardContainer>
          <TextBefore>Вы переводите из</TextBefore>
          <CurrencyCard
            onInput={handleInput("left")}
            onSelect={handleSelect("left")}
            currencies={currencies}
            pair={pairs.left}
          />
          <WordBetweenSelects>в</WordBetweenSelects>

          <CurrencyCard
            onInput={handleInput("right")}
            onSelect={handleSelect("right")}
            currencies={currencies}
            pair={pairs.right}
          />
          <SymbolBetweenInputs>=</SymbolBetweenInputs>
        </CarrencyCardContainer>
      </div>
      <ButtonBox>
        <Button onClick={handleClick}>поменять валюты местами</Button>
      </ButtonBox>
    </>
  );
};

export default Converter;
