const SidebarView = ({ guests, setGuests }) => {
  return (
    <div>
      <button onClick={() => setGuests(guests - 1)} disabled={guests <= 1}>
        -
      </button>
      <span>{guests}</span>
      <button onClick={() => setGuests(guests + 1)}>+</button>
    </div>
  );
};
