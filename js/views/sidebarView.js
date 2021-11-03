const SidebarView = ({ guests }) => {
  return (
    <div>
      <button disabled={guests <= 1}>-</button>
      <span>{guests}</span>
      <button>+</button>
    </div>
  );
};
