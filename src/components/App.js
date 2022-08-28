import React from "react";
import { ToneComponent, Header, Homepage } from "./Index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/synth" element={<ToneComponent />} />
      </Routes>
    </div>
  );
};

export default App;
