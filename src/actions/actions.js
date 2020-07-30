export const GET_CURRENCY_LIST = "GET_CURRENCY_LIST";

export const getCurrencyList = () => {
    debugger
  return (dispatch) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/www.cbr.ru/scripts/XML_daily.asp"
    )
      .then((response) => response.text())
      .then((xml) => {
        const parser = require('xml2json-light');
        const json = parser.xml2json(xml)
        console.log(json)
      });
  };
};

export const getCurrencyListSuccess = data => {
    debugger
    return {
        type: GET_CURRENCY_LIST,
        data
    }
} 
