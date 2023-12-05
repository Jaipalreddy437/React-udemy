import TabButton from "./TabButton";

const Tabs = ({ children, buttons, buttonContainer = "menu" }) => {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
