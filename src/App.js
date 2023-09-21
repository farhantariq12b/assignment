import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import Home from "./components/main";
import Contacts from "./components/contacts";
import AllContacts from "./components/allContacts";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/all-contacts" element={<AllContacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
