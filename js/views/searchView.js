const SearchFormView = ({ options }) => {
  return (
    <div>
      <input placeholder="Search..." />
      <select>
        <option>Choose:</option>
        {options.map((opt) => {
          return <option key={options.indexOf(opt)}>{opt}</option>;
        })}
      </select>
      <button>Search</button>
    </div>
  );
};
