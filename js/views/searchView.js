const SearchFormView = ({ options, onSearch, onText, onDishType }) => {
  return (
    <div>
      <input placeholder="Search..." onInput={(e) => onText(e.target.value)} />
      <select onChange={(e) => onDishType(e.target.value)}>
        <option>Choose:</option>
        {options.map((opt) => {
          return <option key={options.indexOf(opt)}>{opt}</option>;
        })}
      </select>
      <button onClick={(e) => onSearch()}>Search</button>
    </div>
  );
};
