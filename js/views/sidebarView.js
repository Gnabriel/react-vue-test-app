const SidebarView = ({ guests, setGuests }) => {
  return (
    <div>
      <button onClick={() => setGuests(--guests)} disabled={guests <= 1}>
        -
      </button>
      <span>{guests}</span>
      <button onClick={() => setGuests(++guests)}>+</button>
    </div>
  );
};
