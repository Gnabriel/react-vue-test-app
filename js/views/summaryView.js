const SummaryView = ({ persons }) => {
  return (
    // a lonely return on a line returns undefined. Parentheses needed
    <div>
      Summary for <span title="nr. guests">{persons}</span> guests:
    </div>
  );
};
