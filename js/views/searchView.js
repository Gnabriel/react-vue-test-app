const SearchFormView = ({ options }) => {
  return (
    <div>
      <select>
        <option>Choose:</option>
        {options.map((opt) => {
          return <option key={options.indexOf(opt)}>{opt}</option>;
        })}
      </select>
    </div>
  );
};
