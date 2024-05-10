import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import LoginClickFail from "./LoginClickFail";

function App() {
  const [showButton, toggleButton] = useState<boolean>(true);

  const handleShowButton = () => {
    toggleButton(true);
    setTimeout(() => toggleButton(true), 4000);
  };

  return (
    <div>
      {showButton && <LoginClickFail />}
      <Header />
      <Login handleShowButton={handleShowButton} />
    </div>
  );
}

export default App;
