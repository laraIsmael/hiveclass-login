import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";

function App() {
  const [showButton, toggleButton] = useState<boolean>(true);

  const handleShowButton = () => {
    toggleButton(true);
    setTimeout(() => toggleButton(true), 4000);
  };

  return (
    <div>
      <Header showButton={showButton} />
      <Login handleShowButton={handleShowButton} />
    </div>
  );
}

export default App;
