const SidebarPresenter = ({ model }) => {
  return (
    <SidebarView
      guests={model.numberOfGuests}
      setGuests={(guests) => {
        model.setNumberOfGuests(guests);
      }}
    />
  );
};
