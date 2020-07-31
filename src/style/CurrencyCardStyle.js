import styled from "styled-components";

export const CarrencyCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
`;

export const CurrencyCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;
`;

export const CurrencyInput = styled.input`
  width: 143px;
  height: 29px;
`;

export const CurrencySelect = styled.select`
  width: 150px;
  height: 35px;
  margin-bottom: 23px;
`;

export const WordBetweenSelects = styled.div`
  position: relative;
  align-content: center;
  top: 4px;
  width: 30px;
`;

export const SymbolBetweenInputs = styled.div`
  position: relative;
  align-content: center;
  width: 30px;
  top: 63px;
  right: 196px;
`;

export const TextBefore = styled.div`
  display: inline-block;
  position: relative;
  width: 169px;
  height: 23px;
  margin-top: 5px;
  margin-left: -90px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;


export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center
`

export const Button = styled.button`
  border: none;
  background: none;
  color: rgba(0, 0, 0, 0.37);
  text-decoration: underline;
  font-family: Roboto;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;
