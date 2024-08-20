import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./login/Header";
import Login from "./login/Login";
import Graph from "./graph/Graph";


function App() {
  const [showButton, toggleButton] = useState<boolean>(false);

  const handleShowButton = () => {
    toggleButton(true);
    setTimeout(() => toggleButton(false), 4000);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={      
          <div>
            <Header showButton={showButton} />
            <Login 
              handleShowButton={handleShowButton} />
          </div>
        } />
        <Route path="Graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
