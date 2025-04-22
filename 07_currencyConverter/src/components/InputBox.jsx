function InputBox({
  label,
  ammount,
  onAmountChange,
  onCyrrencyChange,
  currencyOptions = [], 
  selectCurrency = "usd",
  ammountDisable = false,
  currencyDisable = false,

  className = "",
}) {

    const amountInput = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInput} 
         className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={amountInput}
          type="number"
          placeholder="Amount"
          disabled={ammountDisable}
          value={ammount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select 
        disabled={currencyDisable}
        value={selectCurrency}
        onChange={(e) => onCyrrencyChange && onCyrrencyChange(e.target.value)}
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">

          {currencyOptions.map((currency, index) => (
            <option key={index} value={currency}>
            {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
