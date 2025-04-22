import { useState, useEffect } from "react";

const UseCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((currencyData) => setData(currencyData[currency]));
    console.log(data);
  }, [currency]);
  return data;
};

export default UseCurrencyInfo;
// UseCurrencyInfo(usd);
