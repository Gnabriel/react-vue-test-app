const RenderTest = () => {
  console.log("Vue sub-component render test");
  return false;
};

const App = ({ model }) => {
  return (
    <div>
      <SidebarPresenter model={model} />
      <SummaryPresenter model={model} />
      <RenderTest />
    </div>
  );
};
