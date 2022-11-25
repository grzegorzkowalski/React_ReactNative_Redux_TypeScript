import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import {StoperContext, initialState, StoperType} from "./context/StoperContext";

function App() {
  const [state, dispatch] = useState<StoperType>(initialState);
  return (
      <>
          <StoperContext.Provider value={{state, dispatch}}>
              <Home />
              {/*<BrowserRouter>*/}
              {/*    <Routes>*/}
              {/*        <Route path="/" element={<Home />} />*/}
              {/*        <Route path="/contact" element={<Contact />} />*/}
              {/*    </Routes>*/}
              {/*</BrowserRouter>*/}
          </StoperContext.Provider>
      </>

  );
}

export default App;
